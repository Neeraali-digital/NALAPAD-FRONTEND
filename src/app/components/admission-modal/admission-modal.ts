import { Component, DOCUMENT, ElementRef, HostListener, effect, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdmissionEnquiryService, buildAdmissionWhatsAppUrl } from '../../services/admission-enquiry';
import { PROGRAMMES, UNDECIDED_PROGRAMME_LABEL } from '../../constants/programmes';
import { ADMISSION_YEAR_LABEL } from '../../constants/contact';

const INDIAN_MOBILE_PATTERN = /^[6-9]\d{9}$/;

type SubmitState = { kind: 'editing' } | { kind: 'sent'; whatsAppUrl: string; popupBlocked: boolean };

@Component({
  selector: 'app-admission-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './admission-modal.html',
})
export class AdmissionModal {
  private readonly enquiryService = inject(AdmissionEnquiryService);
  private readonly document = inject(DOCUMENT);
  private readonly formBuilder = inject(FormBuilder);
  private readonly nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

  readonly isOpen = this.enquiryService.isOpen;
  readonly yearLabel = ADMISSION_YEAR_LABEL;
  readonly courseOptions = [...PROGRAMMES.map(programme => programme.name), UNDECIDED_PROGRAMME_LABEL];
  readonly submitState = signal<SubmitState>({ kind: 'editing' });

  readonly enquiryForm = this.formBuilder.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(INDIAN_MOBILE_PATTERN)]],
    course: [PROGRAMMES[0].name, Validators.required],
    city: [''],
  });

  constructor() {
    effect(() => {
      const isOpen = this.isOpen();
      this.document.body.style.overflow = isOpen ? 'hidden' : '';
      if (!isOpen) return;
      this.resetForm(this.enquiryService.preselectedCourse());
      queueMicrotask(() => this.nameInput()?.nativeElement.focus());
    });
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.enquiryService.close();
  }

  showError(controlName: 'fullName' | 'phone'): boolean {
    const control = this.enquiryForm.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }
    const whatsAppUrl = buildAdmissionWhatsAppUrl(this.enquiryForm.getRawValue());
    // Not passing 'noopener' as a feature: it makes open() return null, hiding popup-blocker failures.
    const openedWindow = this.document.defaultView?.open(whatsAppUrl, '_blank');
    if (openedWindow) openedWindow.opener = null;
    this.submitState.set({ kind: 'sent', whatsAppUrl, popupBlocked: !openedWindow });
  }

  private resetForm(preselectedCourse: string | null): void {
    this.submitState.set({ kind: 'editing' });
    this.enquiryForm.reset({
      fullName: '',
      phone: '',
      course: preselectedCourse ?? PROGRAMMES[0].name,
      city: '',
    });
  }
}
