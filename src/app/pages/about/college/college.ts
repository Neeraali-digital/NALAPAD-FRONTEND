import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CinematicAnimationsService } from '../../../services/cinematic-animations';
import { PROGRAMMES } from '../../../constants/programmes';

@Component({
  selector: 'app-college',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './college.html'
})
export class College implements OnInit, AfterViewInit, OnDestroy {
  readonly programmes = PROGRAMMES;

  stats = [
    { label: 'Established', value: '2021' },
    { label: 'Nursing Programmes', value: String(PROGRAMMES.length) },
    { label: 'Add-on Specialisations', value: '7' },
    { label: 'Specialised Labs', value: '7' }
  ];

  advantages = [
    { title: 'Admission with a Job Guarantee Letter', description: 'Every admitted student receives a job guarantee letter, so the career path is clear from day one.' },
    { title: 'Final-Year Paid Internship', description: 'A final-year internship at a multi-specialty hospital, with a stipend.' },
    { title: 'Degree or Diploma + 7 Add-ons', description: 'Graduate with a B.Sc or GNM qualification plus seven add-on specialisations.' }
  ];

  pillars = [
    { title: 'Academic Foundation', description: 'Structured, RGUHS-aligned academics taught by experienced nursing faculty.' },
    { title: 'Clinical Exposure', description: 'Hands-on training in seven specialised labs and at our parent hospitals.' },
    { title: 'Industry-Ready Skills', description: 'Add-on courses in critical care, digital health, medical coding and AI in healthcare.' },
    { title: 'Holistic Development', description: 'Clubs, houses, cultural events and leadership programmes that build confidence.' }
  ];

  parentHospitals = [
    { name: 'Svastha Hospital', logo: '/partners/svastha.webp' },
    { name: 'Suraksha Hospital', logo: '/partners/suraksha.webp' },
    { name: 'Medicover Hospitals', logo: '/partners/medicover.webp' }
  ];

  constructor(private cinematic: CinematicAnimationsService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    this.cinematic.init();
  }

  ngOnDestroy() {
    this.cinematic.killAll();
  }
}
