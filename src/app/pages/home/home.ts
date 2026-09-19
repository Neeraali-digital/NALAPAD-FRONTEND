import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
      mobileImage: '/banners/slide1mobile.jpeg',
      titleTop: 'ADMISSIONS OPEN',
      titleBottom: '2026-2027',
      desc1: 'Join Nalapad College of Nursing for the academic year 2026-2027. We offer state-of-the-art facilities, expert faculty, and global standard education to shape the next generation of healthcare leaders.',
      desc2: 'Secure your seat today and step into a world of clinical excellence. We provide 100% placement assistance across top international healthcare institutions and comprehensive practical training.',
      link: '/admissions'
    },
    {
      image: '/banners/slide2-largerscreens.jpeg',
      mobileImage: '/banners/slide2mobile.jpeg',
      titleTop: 'VIBRANT CAMPUS',
      titleBottom: 'College Events',
      desc1: 'Experience a dynamic and enriching college life at Nalapad. Our campus is alive with regular cultural, athletic, and academic events that foster holistic student development and leadership.',
      desc2: 'From the annual Milan Cultural Ceremony to the Athletic Pinnacle, our events provide the perfect platform for students to showcase their talents, build lifelong memories, and connect with peers.',
      link: '/gallery'
    },
    {
      image: '/banners/slide3-largerscreens.jpeg',
      mobileImage: '/banners/slide3mobile.jpeg',
      titleTop: 'ABOUT OUR',
      titleBottom: 'Organization',
      desc1: 'Nalapad Group of Institutions is committed to providing world-class education. Our foundation is built on the core values of integrity, discipline, and scholarly excellence to empower students.',
      desc2: 'With decades of experience in shaping professionals, we are dedicated to creating a nurturing environment where innovation meets tradition for a better tomorrow in the healthcare industry.',
      link: '/departments'
    },
    {
      image: '/banners/slide4-largerscreens.jpeg',
      mobileImage: '/banners/slide4mobile.jpeg',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
      link: '/departments/bsc-nursing'
    },
    {
      name: 'GNM Nursing',
      image: '/courses/GNM Nursing.jpg',
      duration: '3 Years',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
      link: '/departments/gnm'
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

  // Fallback list shown until assets/data/add-on-courses.json loads (and overwrites this).
  // Make sure that JSON file has all 7 entries too, or this will get replaced with fewer.
  addOnCourses = [
  {
    slug: 'emergency-critical-care-nursing',
    title: 'Emergency & Critical Care Nursing',
    image: '/add-on-courses/emergency-critical-care.jpg',
    description: 'Develop essential skills for emergency situations, critical patient care, and nursing support in high-acuity healthcare settings.'
  },
  {
    slug: 'neonatal-pediatric-nursing-care',   // ← changed
    title: 'Neonatal & Pediatric Nursing Care',
    image: '/add-on-courses/neonatal-pediatric-care.jpg',
    description: 'Build specialised knowledge and practical skills for providing effective nursing care to newborns, infants, and children.'
  },
  {
    slug: 'maternal-midwifery-nursing-skills',   // ← changed
    title: 'Maternal & Midwifery Nursing Skills',
    image: '/add-on-courses/maternal-midwifery.jpg',
    description: 'Strengthen essential skills in antenatal, intrapartum, postnatal, and maternal care.'
  },
  {
    slug: 'community-public-health-nursing',
    title: 'Community & Public Health Nursing',
    image: '/add-on-courses/community-public-health.jpg',
    description: 'Learn about community healthcare, health promotion, disease prevention, health education, and public health practices.'
  },
  {
    slug: 'digital-health-nursing-informatics',
    title: 'Digital Health & Nursing Informatics',
    image: '/add-on-courses/digital-health.jpg',
    description: 'Develop skills in digital healthcare systems, electronic health records, healthcare technology, and nursing informatics.'
  },
  {
    slug: 'medical-coding-healthcare-documentation',
    title: 'Medical Coding & Healthcare Documentation',
    image: '/add-on-courses/medical-coding.jpg',
    description: 'Gain an understanding of medical terminology, healthcare documentation, coding practices, and medical records management.'
  },
  {
    slug: 'ai-smart-healthcare-in-nursing',   // ← changed
    title: 'AI & Smart Healthcare in Nursing',
    image: '/add-on-courses/ai-smart-healthcare.jpg',
    description: 'Explore the role of Artificial Intelligence, smart technologies, and digital solutions in modern nursing and healthcare.'
  }
];

  addOnWhyChoose = [
    'Practical and skill-oriented learning',
    'Industry-relevant knowledge',
    'Exposure to emerging healthcare technologies',
    'Specialised nursing skills',
    'Career-focused learning opportunities',
    'Certificate upon successful completion'
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private cinematic: CinematicAnimationsService,
    private http: HttpClient
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