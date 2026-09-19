// src/app/services/add-on-courses.ts

import { Injectable } from '@angular/core';

export const ADD_ON_BENEFITS: readonly string[] = [
  'Practical and skill-oriented learning',
  'Industry-relevant knowledge',
  'Exposure to emerging healthcare technologies',
  'Specialised nursing skills',
  'Career-focused learning opportunities',
  'Certificate upon successful completion',
];

export interface AddOnCourse {
  slug: string;
  titleTop: string;       // first line of big heading (black)
  titleBottom: string;    // second line of big heading (brand color)
  badgeLabel: string;     // full course name, used as the card title
  image: string;          // background photo for the card and the detail-page hero
  heroTag: string;        // small caption under hero image e.g. "Next-Gen Care"
  heroSubTag: string;     // e.g. "Training with the tools of tomorrow."
  statLabel: string;      // e.g. "PLACEMENT RATE" or "DEMAND GROWTH"
  statValue: string;      // e.g. "100%" or "35%"
  duration: string;       // e.g. "6 Months"
  durationType: string;   // e.g. "CERTIFICATE PROGRAMME"
  description: string;
}

@Injectable({ providedIn: 'root' })
export class AddOnCoursesService {
  private courses: AddOnCourse[] = [
    {
      slug: 'emergency-critical-care-nursing',
      titleTop: 'EMERGENCY &',
      titleBottom: 'CRITICAL CARE',
      badgeLabel: 'Emergency & Critical Care Nursing',
      image: '/courses/add-on/emergency-critical-care-nursing.jpg',
      heroTag: 'Rapid Response',
      heroSubTag: 'Trained to act in the first critical minutes.',
      statLabel: 'PLACEMENT RATE',
      statValue: '100%',
      duration: '6 Months',
      durationType: 'CERTIFICATE PROGRAMME',
      description:
        'This add-on course prepares nursing students to confidently manage emergency and critical care situations. Through simulation-based training, ICU exposure, and hands-on practice with life-support equipment, students build the speed, precision, and composure needed to handle high-pressure clinical environments and deliver life-saving care.',
    },
    {
      slug: 'neonatal-pediatric-nursing-care',
      titleTop: 'NEONATAL &',
      titleBottom: 'PEDIATRIC CARE',
      badgeLabel: 'Neonatal & Pediatric Nursing Care',
      image: '/courses/add-on/neonatal-pediatric-nursing-care.jpg',
      heroTag: 'Gentle Beginnings',
      heroSubTag: 'Specialised care for our smallest patients.',
      statLabel: 'PLACEMENT RATE',
      statValue: '100%',
      duration: '6 Months',
      durationType: 'CERTIFICATE PROGRAMME',
      description:
        'Focused on the unique physiological and developmental needs of newborns and children, this course equips students with specialised skills in neonatal intensive care, pediatric assessment, and family-centred communication, preparing them for careers in NICUs, pediatric wards, and child health clinics.',
    },
    {
      slug: 'maternal-midwifery-nursing-skills',
      titleTop: 'MATERNAL &',
      titleBottom: 'MIDWIFERY SKILLS',
      badgeLabel: 'Maternal & Midwifery Nursing Skills',
      image: '/courses/add-on/maternal-midwifery-nursing-skills.jpg',
      heroTag: 'New Life, Expert Care',
      heroSubTag: 'Supporting mothers through every stage.',
      statLabel: 'PLACEMENT RATE',
      statValue: '100%',
      duration: '6 Months',
      durationType: 'CERTIFICATE PROGRAMME',
      description:
        'This course develops advanced competencies in antenatal, intranatal, and postnatal care. Students gain hands-on experience with delivery support, maternal health monitoring, and newborn care, preparing them to support safe motherhood and confident, compassionate midwifery practice.',
    },
    {
      slug: 'community-public-health-nursing',
      titleTop: 'COMMUNITY &',
      titleBottom: 'PUBLIC HEALTH',
      badgeLabel: 'Community & Public Health Nursing',
      image: '/courses/add-on/community-public-health-nursing.jpg',
      heroTag: 'Care Beyond the Ward',
      heroSubTag: 'Bringing healthcare to every doorstep.',
      statLabel: 'PLACEMENT RATE',
      statValue: '100%',
      duration: '6 Months',
      durationType: 'CERTIFICATE PROGRAMME',
      description:
        'Designed for students interested in preventive and population-level healthcare, this course covers community outreach, health education, epidemiology basics, and public health programme delivery — preparing nurses to make an impact well beyond hospital walls.',
    },
    {
      slug: 'digital-health-nursing-informatics',
      titleTop: 'DIGITAL HEALTH &',
      titleBottom: 'NURSING INFORMATICS',
      badgeLabel: 'Digital Health & Nursing Informatics',
      image: '/courses/add-on/digital-health-nursing-informatics.jpg',
      heroTag: 'Next-Gen Care',
      heroSubTag: 'Training with the tools of tomorrow.',
      statLabel: 'DEMAND GROWTH',
      statValue: '35%',
      duration: '4 Months',
      durationType: 'CERTIFICATE PROGRAMME',
      description:
        'As healthcare becomes increasingly digital, this course trains students in electronic health records, hospital information systems, telehealth platforms, and data-driven patient care — building the technical fluency modern healthcare employers are actively seeking.',
    },
    {
      slug: 'medical-coding-healthcare-documentation',
      titleTop: 'MEDICAL CODING &',
      titleBottom: 'DOCUMENTATION',
      badgeLabel: 'Medical Coding & Healthcare Documentation',
      image: '/courses/add-on/medical-coding-healthcare-documentation.jpg',
      heroTag: 'Precision Behind the Scenes',
      heroSubTag: 'Where clinical care meets accurate records.',
      statLabel: 'PLACEMENT RATE',
      statValue: '95%',
      duration: '4 Months',
      durationType: 'CERTIFICATE PROGRAMME',
      description:
        'This course introduces students to standardised medical coding systems, accurate clinical documentation, and healthcare compliance practices — opening pathways into hospital administration, insurance, and health information management roles alongside clinical nursing.',
    },
    {
      slug: 'ai-smart-healthcare-in-nursing',
      titleTop: 'AI & SMART',
      titleBottom: 'HEALTHCARE',
      badgeLabel: 'AI & Smart Healthcare in Nursing',
      image: '/courses/add-on/ai-smart-healthcare-in-nursing.jpg',
      heroTag: 'The Future of Care',
      heroSubTag: 'Where nursing meets intelligent technology.',
      statLabel: 'DEMAND GROWTH',
      statValue: '40%',
      duration: '4 Months',
      durationType: 'CERTIFICATE PROGRAMME',
      description:
        'Explore how artificial intelligence and smart devices are transforming patient monitoring, diagnostics, and care delivery. Students learn to work alongside AI-driven tools and wearable health technology, preparing them for the next generation of technology-enabled nursing practice.',
    },
  ];

  getAll(): AddOnCourse[] {
    return this.courses;
  }

  getBySlug(slug: string): AddOnCourse | undefined {
    return this.courses.find((c) => c.slug === slug);
  }
}