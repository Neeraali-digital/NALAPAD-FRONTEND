import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-placement',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './placement.html'
})
export class Placement implements OnInit {

  trainingPrograms = [
    {
      icon: 'shield',
      title: 'Clinical Skills Lab',
      duration: 'Throughout Programme',
      desc: 'State-of-the-art simulation labs with high-fidelity mannequins, IV trainers, and procedure kits. Students practice every clinical skill in a safe, supervised environment before entering the ward.',
      tag: 'Hands-On',
      image: '/training/clinical_skills.jpg'
    },
    {
      icon: 'activity',
      title: 'BLS & ACLS Certification',
      duration: '2-Day Intensive',
      desc: 'All students are certified in Basic Life Support and Advanced Cardiac Life Support by AHA-accredited trainers. Certificates are internationally recognised.',
      tag: 'Certified',
      image: '/training/bls_acls.jpg'
    },
    {
      icon: 'globe',
      title: 'Hospital Internship',
      duration: '6 Months',
      desc: 'Mandatory rotational internship across our 15+ partner hospitals covering ICU, OBG, Paediatrics, Emergency, OT, and Community Health departments.',
      tag: 'Real-World',
      image: '/training/hospital_internship.jpg'
    },
    {
      icon: 'brain',
      title: 'Mental Health & Soft Skills',
      duration: 'Semester 3 & 4',
      desc: 'Communication, therapeutic relationship-building, patient advocacy, and empathy training. Delivered by practising clinical psychologists and senior nursing educators.',
      tag: 'Core Skills',
      image: '/training/mental_health.jpg'
    },
    {
      icon: 'trending',
      title: 'Leadership Development',
      duration: 'Year 3 & 4',
      desc: 'Designed for senior students — nursing management, healthcare operations, charge-nurse responsibilities, and hospital administration case studies.',
      tag: 'Leadership',
      image: '/training/leadership_dev.jpg'
    },
    {
      icon: 'star',
      title: 'Research & Evidence-Based Practice',
      duration: 'Year 2 & 3',
      desc: 'Faculty-guided student research projects with presentation at national nursing conferences. Cultivates critical thinking and scientific inquiry.',
      tag: 'Academic',
      image: '/training/nursing_research.jpg'
    }
  ];

  placementStats = [
    { value: '98%', label: 'Placement Rate', sub: '2023-24 Batch' },
    { value: '15+', label: 'Partner Hospitals', sub: 'Across Karnataka' },
    { value: '₹3.8L', label: 'Avg. Starting Package', sub: 'Per Annum' },
    { value: '6', label: 'International Postings', sub: 'UAE, UK, Canada' }
  ];

  benefits = [
    { title: 'Dedicated Placement Cell', desc: 'A full-time placement team maintains relationships with 15+ hospitals and healthcare groups, actively matching students with roles that suit their specialisation.' },
    { title: 'Campus Recruitment Drives', desc: 'Top employers visit Nalapad campus every semester for direct recruitment drives, walk-in interviews, and pre-placement offers for final-year students.' },
    { title: 'Resume & Interview Coaching', desc: 'One-on-one sessions with placement officers to build professional nursing portfolios, practise clinical scenario interviews, and prepare for HR rounds.' },
    { title: 'International Pathway', desc: 'Dedicated guidance for NCLEX-RN, UK NMC, and UAE DHA licensing examinations — opening doors to global nursing careers.' },
    { title: 'Alumni Network', desc: 'Our 1,200+ alumni across India and abroad serve as mentors, referrers, and partners — creating a strong professional network from day one.' },
    { title: 'Continuous Job Board', desc: 'An exclusive online portal updated weekly with new openings from partner hospitals, clinics, and healthcare NGOs for all graduating batches.' }
  ];

  partners = [
    { name: 'Aster CMI Hospital', city: 'Bengaluru', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Aster_DM_Healthcare_logo.svg/320px-Aster_DM_Healthcare_logo.svg.png', type: 'Multi-Specialty' },
    { name: 'Manipal Hospitals', city: 'Bengaluru', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Manipal_Hospitals_logo.png/320px-Manipal_Hospitals_logo.png', type: 'Super-Specialty' },
    { name: 'Fortis Healthcare', city: 'Pan India', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Fortis_Healthcare_logo.svg/320px-Fortis_Healthcare_logo.svg.png', type: 'Corporate' },
    { name: 'Apollo Hospitals', city: 'Pan India', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Apollo_Hospitals_Logo.png/320px-Apollo_Hospitals_Logo.png', type: 'Super-Specialty' },
    { name: 'Narayana Health', city: 'Bengaluru', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Narayana_Health_Logo.png/320px-Narayana_Health_Logo.png', type: 'Cardiac & Multi-Specialty' },
    { name: 'Columbia Asia', city: 'Bengaluru', logo: 'https://logos-world.net/wp-content/uploads/2022/02/Columbia-Asia-Logo.png', type: 'Multi-Specialty' },
    { name: 'BGS Gleneagles', city: 'Bengaluru', logo: 'https://via.placeholder.com/150x60/ffffff/333333?text=BGS+Gleneagles', type: 'Global Network' },
    { name: 'HCG Oncology', city: 'Bengaluru', logo: 'https://via.placeholder.com/150x60/ffffff/333333?text=HCG', type: 'Oncology' }
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
