import { Component, signal, HostListener, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { AdmissionModal } from './components/admission-modal/admission-modal';
import { AdmissionEnquiryService } from './services/admission-enquiry';
import { ADMISSION_YEAR_LABEL, ADMISSIONS_PHONE_TEL, ADMISSIONS_WHATSAPP_NUMBER } from './constants/contact';

const AUTO_PROMPT_DELAY_MS = 10_000;
const AUTO_PROMPT_SCROLL_THRESHOLD_PX = 300;
const AUTO_PROMPT_SESSION_KEY = 'nalapad-admission-auto-prompt-shown';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CommonModule, AdmissionModal],
  templateUrl: './app.component.html',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('nalapad-site');
  protected isScrollStopped = signal(false);
  protected readonly admissionYearLabel = ADMISSION_YEAR_LABEL;
  protected readonly admissionsPhoneTel = ADMISSIONS_PHONE_TEL;
  protected readonly whatsAppUrl = `https://wa.me/${ADMISSIONS_WHATSAPP_NUMBER}`;
  private readonly admissionEnquiry = inject(AdmissionEnquiryService);
  private scrollTimer: any;
  private autoPromptTimer?: ReturnType<typeof setTimeout>;
  private isAutoPromptPending = false;

  ngOnInit() {
    if (this.hasAutoPromptBeenShown()) return;
    this.isAutoPromptPending = true;
    this.autoPromptTimer = setTimeout(() => this.showAutoPrompt(), AUTO_PROMPT_DELAY_MS);
  }

  ngOnDestroy() {
    clearTimeout(this.autoPromptTimer);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isAutoPromptPending && window.scrollY > AUTO_PROMPT_SCROLL_THRESHOLD_PX) {
      this.showAutoPrompt();
    }

    // Hide while scrolling
    this.isScrollStopped.set(false);
    
    // Clear previous timer
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }

    // Show only after scroll stops for 300ms AND we're not at top
    this.scrollTimer = setTimeout(() => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 300) {
        this.isScrollStopped.set(true);
      } else {
        this.isScrollStopped.set(false);
      }
    }, 400); // 400ms delay to detect scroll stop
  }

  openAdmissionForm() {
    this.admissionEnquiry.open();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isScrollStopped.set(false);
  }

  private showAutoPrompt() {
    if (!this.isAutoPromptPending) return;
    this.isAutoPromptPending = false;
    clearTimeout(this.autoPromptTimer);
    this.markAutoPromptShown();
    if (this.admissionEnquiry.openedThisVisit()) return;
    this.admissionEnquiry.open();
  }

  // sessionStorage can throw (private mode, blocked storage); treat that as "not shown yet".
  private hasAutoPromptBeenShown(): boolean {
    try {
      return sessionStorage.getItem(AUTO_PROMPT_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  }

  private markAutoPromptShown() {
    try {
      sessionStorage.setItem(AUTO_PROMPT_SESSION_KEY, 'true');
    } catch {
      // Without storage the prompt can reappear after a full reload, but still only once per load.
    }
  }
}
