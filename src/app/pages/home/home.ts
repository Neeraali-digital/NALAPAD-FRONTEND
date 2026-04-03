import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {
  activeSlide = 0;
  private slideInterval: any;

  // 1. ADVERTISING AREA (4 SIDES)
  slides = [
    {
      image: '/banners/Best%20hospital%20Internal%20Medicine%20in%20Ranchi.jpg',
      title: 'Excellence in Nursing Education',
      cta: 'Apply Now 2026',
      link: '/admissions'
    },
    {
      image: '/banners/Gyógyszerek%20koronavírus-fertőzöttek%20kezelésére%20–%20Keserű%20György%20Miklós%20akadémikus%20összefoglalója.jpg',
      title: 'Advanced Clinical Training',
      cta: 'Explore Programs',
      link: '/departments'
    },
    {
      image: '/banners/Pharma%20Leaders%20%20_%20DEZIN.jpg',
      title: 'Shape Your Medical Career',
      cta: 'View Placements',
      link: '/facilities'
    },
    {
      image: '/banners/Rule-based%20Expert%20Systems.jpg',
      title: 'World-Class Lab Facilities',
      cta: 'Take a Tour',
      link: '/contact'
    }
  ];

  // (Rest of the data remains same...)
  certifications = [
    { name: 'Govt of Karnataka', image: '/certifications/Govt of Karnataka.png' },
    { name: 'KA State Council', image: '/certifications/KA State Council.png' },
    { name: 'RGUHS University', image: '/certifications/RGUHS University.png' },
    { name: 'INC Approved', image: '/certifications/INC Approved.png' },
    { name: 'KNC Recognized', image: '/certifications/KNC Recognized.png' }
  ];

  courses = [
    { 
      name: 'B.Sc Nursing', 
      image: '/courses/B.Sc Nursing.jpg',
      duration: '4 Years', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.' 
    },
    { 
      name: 'GNM Nursing', 
      image: '/courses/GNM Nursing.jpg',
      duration: '3 Years', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.' 
    },
    { 
      name: 'Post Basic B.Sc', 
      image: '/courses/Post Basic B.Sc.jpg',
      duration: '2 Years', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.' 
    },
    { 
      name: 'M.Sc Nursing', 
      image: '/courses/M.Sc Nursing.jpg',
      duration: '2 Years', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.' 
    }
  ];

  hospitals = [
    { name: 'Aster CMI', logo: '/partners/Aster CMI.jpg', description: 'Premium multi-specialty care partner.' },
    { name: 'Manipal Hospitals', logo: '/partners/Manipal Hospitals.png', description: 'Leading healthcare network in India.' },
    { name: 'Apollo Hospitals', logo: '/partners/Apollo Hospitals.jpg', description: 'Pioneer of modern healthcare.' },
    { name: 'Fortis Health', logo: '/partners/Fortis Health.jpg', description: 'Trustworthy name in critical care.' }
  ];

  clubs = [
    { 
      name: 'Gryffindor', 
      trait: 'Bravery & Courage', 
      color: 'bg-[#740001]', 
      accent: 'border-[#EEBA30]', 
      text: 'text-[#EEBA30]',
      icon: 'zap',
      description: 'The house of the brave, daring, and chivalrous. Focus on leadership and emergency care.'
    },
    { 
      name: 'Ravenclaw', 
      trait: 'Wit & Wisdom', 
      color: 'bg-[#222f5b]', 
      accent: 'border-[#946b2d]', 
      text: 'text-[#946b2d]',
      icon: 'brain',
      description: 'Defined by intelligence, creativity, and wisdom. Focus on research and diagnosis.'
    },
    { 
      name: 'Slytherin', 
      trait: 'Ambition & Pride', 
      color: 'bg-[#1a472a]', 
      accent: 'border-[#aaaaaa]', 
      text: 'text-[#aaaaaa]',
      icon: 'trending-up',
      description: 'The house of ambition, resourcefulness, and determination. Focus on healthcare management.'
    },
    { 
      name: 'Hufflepuff', 
      trait: 'Loyalty & Patience', 
      color: 'bg-[#ecb939]', 
      accent: 'border-[#000000]', 
      text: 'text-black',
      icon: 'heart',
      description: 'Known for hard work, patience, and loyalty. Focus on community health and patient care.'
    }
  ];

  labs = [
    { name: 'Anatomy Lab', image: '/labs/Anatomy Lab.jpg', count: '01' },
    { name: 'Nutrition Lab', image: '/labs/Nutrition Lab.jpg', count: '02' },
    { name: 'Nursing Arts Lab', image: '/labs/Nursing Arts Lab.jpg', count: '03' },
    { name: 'Community Lab', image: '/labs/Community Lab.jpg', count: '04' }
  ];

  heroStats = [
    { label: 'Success Rate', value: '100', suffix: '%' },
    { label: 'Hospital Connects', value: '45', suffix: '+' },
    { label: 'Graduated Students', value: '1500', suffix: '+' },
  ];

  aboutFeatures = [
    { title: 'Global Standards', description: 'Curriculum aligned with international healthcare benchmarks.', icon: 'globe', color: 'bg-brand-primary' },
    { title: 'Expert Faculty', description: 'Mentorship from industry-leading clinical specialists.', icon: 'award', color: 'bg-neutral-900' },
    { title: 'Elite Training', description: 'Hands-on practice with world-class hospital equipment.', icon: 'heart-pulse', color: 'bg-brand-primary' }
  ];

  placementStats = [
    { label: 'Annual Placement', value: '100%', subLabel: 'Success Rate' },
    { label: 'Hospital Partners', value: '50+', subLabel: 'Global Network' },
    { label: 'Highest Package', value: '12 LPA', subLabel: 'Post-Graduation' },
    { label: 'Alumni Network', value: '5000+', subLabel: 'Working Worldwide' }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.stopSlideShow(); // Avoid duplicates
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4500); 
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    this.cdr.detectChanges(); // Force update
  }

  goToSlide(index: number) {
    this.activeSlide = index;
    this.startSlideShow();
    this.cdr.detectChanges();
  }
}

