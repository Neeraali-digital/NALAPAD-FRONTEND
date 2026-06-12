import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-study-at-nalapad',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './study-at-nalapad.html',
})
export class StudyAtNalapad {
  programs = [
    {
      id: '01',
      name: 'B.Sc Nursing',
      duration: '4 Years',
      seats: '60 Seats',
      badge: 'Undergraduate',
      badgeColor: 'bg-brand-primary',
      highlights: ['Clinical Simulation Labs', 'Hospital Rotations', '100% Placement Support', 'INC & RGUHS Approved'],
      image: '/courses/B.Sc Nursing.jpg',
      link: '/departments/bsc-nursing',
      desc: 'A comprehensive undergraduate nursing programme that blends rigorous academic training with real-world clinical exposure across top-tier hospitals. Graduates are equipped to deliver compassionate, evidence-based patient care at national and international levels.',
    },
    {
      id: '02',
      name: 'GNM Nursing',
      duration: '3 Years',
      seats: '40 Seats',
      badge: 'Diploma',
      badgeColor: 'bg-neutral-800',
      highlights: ['Hands-on Clinical Practice', 'Community Health Training', 'Government Recognized', 'Placement Guaranteed'],
      image: '/courses/GNM Nursing.jpg',
      link: '/departments/gnm',
      desc: 'The General Nursing and Midwifery diploma is a career-launching qualification designed to train skilled nurses who excel in hospital wards, community health centres, and midwifery settings — both in India and abroad.',
    },
  ];

  whyChoose = [
    { icon: 'shield', title: 'INC & KNC Approved', desc: 'Fully recognized by the Indian Nursing Council and Karnataka Nursing Council.' },
    { icon: 'globe', title: 'Global Placements', desc: 'Placement partnerships with hospitals in India, UK, UAE, and beyond.' },
    { icon: 'academic', title: 'Expert Faculty', desc: 'Learn from 20+ experienced clinical specialists and nursing educators.' },
    { icon: 'beaker', title: 'State-of-the-Art Labs', desc: 'Advanced simulation labs that replicate real ICU, OT, and ward environments.' },
    { icon: 'heart', title: 'Patient-Centred Culture', desc: 'Every aspect of our curriculum is built around compassionate, ethical care.' },
    { icon: 'users', title: 'Active Student Life', desc: 'Clubs, events, and house system that nurture leadership and teamwork.' },
  ];

  stats = [
    { value: '100%', label: 'Placement Rate', sub: 'Every batch' },
    { value: '4+', label: 'Accreditations', sub: 'Govt & Council' },
    { value: '50+', label: 'Hospital Partners', sub: 'Across India & Abroad' },
    { value: '1500+', label: 'Graduates', sub: 'Working Worldwide' },
  ];
}
