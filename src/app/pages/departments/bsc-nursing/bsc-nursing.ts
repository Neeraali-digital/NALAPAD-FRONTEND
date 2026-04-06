import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bsc-nursing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './bsc-nursing.html',
})
export class BscNursing {
  syllabus = [
    { year: 'Year 1', subjects: ['Anatomy & Physiology', 'Nutrition', 'Nursing Foundation', 'Psychology'] },
    { year: 'Year 2', subjects: ['Sociology', 'Pharmacology', 'Pathology & Genetics', 'Medical Surgical Nursing I'] },
    { year: 'Year 3', subjects: ['Medical Surgical Nursing II', 'Child Health Nursing', 'Mental Health Nursing'] },
    { year: 'Year 4', subjects: ['Midwifery', 'Community Health Nursing', 'Nursing Research'] }
  ];

  clinicalPartners = [
    { name: 'Manipal Hospitals', logo: '/partners/Manipal Hospitals.png' },
    { name: 'Apollo Hospitals', logo: '/partners/Apollo Hospitals.jpg' },
    { name: 'Fortis Health', logo: '/partners/Fortis Health.jpg' },
    { name: 'Aster CMI', logo: '/partners/Aster CMI.jpg' }
  ];
}
