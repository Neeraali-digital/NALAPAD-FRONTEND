import { Injectable, signal } from '@angular/core';
import { ADMISSIONS_WHATSAPP_NUMBER } from '../constants/contact';

export interface AdmissionEnquiry {
  fullName: string;
  phone: string;
  course: string;
  city?: string;
}

export function buildAdmissionWhatsAppUrl(enquiry: AdmissionEnquiry): string {
  const messageLines = [
    'Hello Nalapad Admissions, I would like to apply.',
    `Name: ${enquiry.fullName.trim()}`,
    `Mobile: ${enquiry.phone.trim()}`,
    `Course: ${enquiry.course}`,
    ...(enquiry.city?.trim() ? [`City: ${enquiry.city.trim()}`] : []),
  ];
  return `https://wa.me/${ADMISSIONS_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join('\n'))}`;
}

@Injectable({ providedIn: 'root' })
export class AdmissionEnquiryService {
  private readonly openState = signal(false);
  private readonly preselectedCourseState = signal<string | null>(null);
  private readonly openedThisVisitState = signal(false);

  readonly isOpen = this.openState.asReadonly();
  readonly preselectedCourse = this.preselectedCourseState.asReadonly();
  readonly openedThisVisit = this.openedThisVisitState.asReadonly();

  open(courseName?: string): void {
    this.preselectedCourseState.set(courseName ?? null);
    this.openState.set(true);
    this.openedThisVisitState.set(true);
  }

  close(): void {
    this.openState.set(false);
  }
}
