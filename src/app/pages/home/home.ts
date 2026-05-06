import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CinematicAnimationsService } from '../../services/cinematic-animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  providers: [CinematicAnimationsService]
})
export class Home implements OnInit, OnDestroy, AfterViewInit {
  activeSlide = 0;
  private slideInterval: any;

  slides = [
    {
      image: '/banners/slide1-largerscreens.jpeg',
      mobileImage: '/banners/slide1-moblie.jpeg',
      titleTop: 'ADMISSIONS OPEN',
      titleBottom: '2026-2027',
      desc1: 'Join Nalapad College of Nursing for the academic year 2026-2027. We offer state-of-the-art facilities, expert faculty, and global standard education to shape the next generation of healthcare leaders.',
      desc2: 'Secure your seat today and step into a world of clinical excellence. We provide 100% placement assistance across top international healthcare institutions and comprehensive practical training.',
      link: '/admissions'
    },
    {
      image: '/banners/slide2-largerscreens.jpeg',
      mobileImage: '/banners/slide2-mobile.jpeg',
      titleTop: 'VIBRANT CAMPUS',
      titleBottom: 'College Events',
      desc1: 'Experience a dynamic and enriching college life at Nalapad. Our campus is alive with regular cultural, athletic, and academic events that foster holistic student development and leadership.',
      desc2: 'From the annual Milan Cultural Ceremony to the Athletic Pinnacle, our events provide the perfect platform for students to showcase their talents, build lifelong memories, and connect with peers.',
      link: '/gallery'
    },
    {
      image: '/banners/slide3-largerscreens.jpeg',
      mobileImage: '/banners/slide3-mobile.jpeg',
      titleTop: 'ABOUT OUR',
      titleBottom: 'Organization',
      desc1: 'Nalapad Group of Institutions is committed to providing world-class education. Our foundation is built on the core values of integrity, discipline, and scholarly excellence to empower students.',
      desc2: 'With decades of experience in shaping professionals, we are dedicated to creating a nurturing environment where innovation meets tradition for a better tomorrow in the healthcare industry.',
      link: '/departments'
    },
    {
      image: '/banners/slide4-largerscreens.jpeg',
      mobileImage: '/banners/slide4-mobile.jpeg',
      titleTop: 'ENGAGING STUDENT',
      titleBottom: 'Activities',
      desc1: 'We believe education goes beyond the classroom. Our extensive extracurricular programs ensure that students stay physically active, creative, and socially connected throughout their journey.',
      desc2: 'Participate in inter-college sports, art exhibitions, and student-led clubs to build essential leadership skills and enjoy a truly well-rounded, vibrant educational experience at Nalapad.',
      link: '/gallery'
    }
  ];

  certifications = [
    { name: 'Govt of Karnataka', image: '/certifications/Govt of Karnataka.png' },
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

  constructor(
    private cdr: ChangeDetectorRef,
    private cinematic: CinematicAnimationsService
  ) {}

  ngOnInit() {
    this.startSlideShow();
  }

  ngAfterViewInit() {
    this.cinematic.init();
  }

  ngOnDestroy() {
    this.stopSlideShow();
    this.cinematic.killAll();
  }

  startSlideShow() {
    this.stopSlideShow();
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
    this.cdr.detectChanges();
  }

  goToSlide(index: number) {
    this.activeSlide = index;
    this.startSlideShow();
    this.cdr.detectChanges();
  }
}
