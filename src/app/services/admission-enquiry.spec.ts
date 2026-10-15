import { describe, it, expect } from 'vitest';
import { AdmissionEnquiryService, buildAdmissionWhatsAppUrl } from './admission-enquiry';
import { ADMISSIONS_WHATSAPP_NUMBER } from '../constants/contact';

describe('buildAdmissionWhatsAppUrl', () => {
  it('should target the admissions WhatsApp number', () => {
    const url = buildAdmissionWhatsAppUrl({ fullName: 'Asha', phone: '9876543210', course: 'GNM Nursing' });

    expect(url.startsWith(`https://wa.me/${ADMISSIONS_WHATSAPP_NUMBER}?text=`)).toBe(true);
  });

  it('should encode name, mobile and course into the message', () => {
    const url = buildAdmissionWhatsAppUrl({ fullName: '  Asha K ', phone: '9876543210', course: 'B.Sc Nursing' });

    const message = decodeURIComponent(url.split('?text=')[1]);

    expect(message).toContain('Name: Asha K');
    expect(message).toContain('Mobile: 9876543210');
    expect(message).toContain('Course: B.Sc Nursing');
  });

  it('should omit the city line when city is blank', () => {
    const url = buildAdmissionWhatsAppUrl({ fullName: 'Asha', phone: '9876543210', course: 'GNM Nursing', city: '  ' });

    expect(decodeURIComponent(url)).not.toContain('City:');
  });

  it('should include the city line when city is given', () => {
    const url = buildAdmissionWhatsAppUrl({ fullName: 'Asha', phone: '9876543210', course: 'GNM Nursing', city: 'Bengaluru' });

    expect(decodeURIComponent(url)).toContain('City: Bengaluru');
  });
});

describe('AdmissionEnquiryService', () => {
  it('should open with a preselected course and close again', () => {
    const service = new AdmissionEnquiryService();

    service.open('GNM Nursing');

    expect(service.isOpen()).toBe(true);
    expect(service.preselectedCourse()).toBe('GNM Nursing');

    service.close();

    expect(service.isOpen()).toBe(false);
  });

  it('should clear the preselected course when opened without one', () => {
    const service = new AdmissionEnquiryService();
    service.open('GNM Nursing');

    service.open();

    expect(service.preselectedCourse()).toBeNull();
  });

  it('should remember that the form was opened this visit after closing', () => {
    const service = new AdmissionEnquiryService();
    expect(service.openedThisVisit()).toBe(false);

    service.open();
    service.close();

    expect(service.openedThisVisit()).toBe(true);
  });
});
