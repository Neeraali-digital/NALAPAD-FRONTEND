import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdmissionEnquiryService } from '../../services/admission-enquiry';
import { ADMISSION_YEAR_LABEL } from '../../constants/contact';

@Component({
  selector: 'app-admissions',
  imports: [RouterLink],
  templateUrl: './admissions.html',
})
export class Admissions {
  private readonly admissionEnquiry = inject(AdmissionEnquiryService);
  readonly admissionYearLabel = ADMISSION_YEAR_LABEL;

  openAdmissionForm() {
    this.admissionEnquiry.open();
  }
}
