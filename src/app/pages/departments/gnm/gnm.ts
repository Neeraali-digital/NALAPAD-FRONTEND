import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gnm',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './gnm.html',
})
export class Gnm {
  clinicalPartners = [
    { name: 'Manipal Hospitals', logo: '/partners/Manipal Hospitals.png' },
    { name: 'Apollo Hospitals', logo: '/partners/Apollo Hospitals.jpg' },
    { name: 'Fortis Health', logo: '/partners/Fortis Health.jpg' },
    { name: 'Aster CMI', logo: '/partners/Aster CMI.jpg' },
    { name: 'NHS UK', logo: '' } // NHS is handled with text in HTML
  ];

  careerRoles = [
    { title: 'Staff Nurse', image: '/staff_nurse.png', desc: 'Secure immediate placement in multi-specialty hospitals and specialized care units.' },
    { title: 'Home Care Nurse', image: '/home_care_nurse.png', desc: 'Provide expert clinical care in residential settings for elderly and recovering patients.' },
    { title: 'Health Visitor', image: '/health_visitor.png', desc: 'Work in community health centers and outreach programs to promote public wellness.' },
    { title: 'Midwife Specialist', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800', desc: 'Specialized care for maternity and newborn health in clinical and community settings.' }
  ];

  syllabus = [
    {
      year: 'First Year',
      subjects: ['Fundamentals of Nursing', 'Anatomy & Physiology', 'Community Health I', 'Psychology']
    },
    {
      year: 'Second Year',
      subjects: ['Medical Surgical Nursing I', 'Medical Surgical Nursing II', 'Mental Health Nursing', 'Child Health Nursing']
    },
    {
      year: 'Third Year',
      subjects: ['Midwifery & Gynaecology', 'Community Health II', 'Professional Trends', 'Nursing Education']
    }
  ];

  reviews = [
    {
      name: 'Kavita Nair',
      batch: 'Batch 2024',
      image: '/student_1.png',
      text: '"The simulation labs at Nalapad are world-class. I felt completely prepared before my first rotation. The hands-on experience on advanced manikins is truly unique to this campus."',
      span: 'md:col-span-8'
    },
    {
      name: 'Suresh Pal',
      batch: 'Batch 2025',
      image: '/student_2.png',
      text: '"The global network opportunities opened doors I didn\'t know existed. Truly a life-changing campus experience."',
      span: 'md:col-span-4'
    },
    {
      name: 'Anjali Sharma',
      batch: 'Batch 2023',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&h=300',
      text: '"Transitioning from the classroom to the ward felt seamless thanks to the intensive clinical mentorship. The faculty here doesn\'t just teach; they mentor you for the real world."',
      span: 'md:col-span-4'
    },
    {
      name: 'Mohammed Rizwan',
      batch: 'Batch 2024',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=300',
      text: '"The GNM program here is exceptionally structured. We get to work with elite hospitals like Aster and Apollo early on, which gives us a massive edge in the job market."',
      span: 'md:col-span-4'
    },
    {
      name: 'Priya Das',
      batch: 'Batch 2026',
      image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=300&h=300',
      text: '"Coming from a different state, the welcoming atmosphere and state-of-the-art infrastructure made me feel at home. The focus on patient empathy is what sets Nalapad apart."',
      span: 'md:col-span-4'
    }
  ];
}
