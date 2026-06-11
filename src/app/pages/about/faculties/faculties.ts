import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Faculty {
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  experience: string;
  image: string;
  department: string;
}

interface Department {
  name: string;
  shortName: string;
  color: string;
  accentColor: string;
  icon: string;
  faculty: Faculty[];
}

@Component({
  selector: 'app-faculties',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './faculties.html'
})
export class Faculties implements OnInit {

  activeDept = 'all';

  departments: Department[] = [
    {
      name: 'Medical-Surgical Nursing',
      shortName: 'Med-Surg',
      color: 'bg-brand-primary',
      accentColor: '#990000',
      icon: 'activity',
      faculty: [
        {
          name: 'Prof. Dr. Sunita Rao',
          designation: 'Professor & HOD',
          qualification: 'M.Sc Nursing (Med-Surg), Ph.D',
          specialization: 'Critical Care & Trauma Nursing',
          experience: '22 Years',
          image: 'https://images.unsplash.com/photo-1594824432258-f9b1df0ce82b?auto=format&fit=crop&w=500&q=80',
          department: 'Med-Surg'
        },
        {
          name: 'Mrs. Rekha Iyer',
          designation: 'Associate Professor',
          qualification: 'M.Sc Nursing',
          specialization: 'Orthopaedic & Neurological Nursing',
          experience: '15 Years',
          image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80',
          department: 'Med-Surg'
        },
        {
          name: 'Mrs. Anitha Sharma',
          designation: 'Assistant Professor',
          qualification: 'M.Sc Nursing',
          specialization: 'Oncology & Palliative Nursing',
          experience: '9 Years',
          image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80',
          department: 'Med-Surg'
        },
      ]
    },
    {
      name: 'Community Health Nursing',
      shortName: 'Community',
      color: 'bg-emerald-700',
      accentColor: '#047857',
      icon: 'globe',
      faculty: [
        {
          name: 'Prof. Dr. Meera Pillai',
          designation: 'Professor & HOD',
          qualification: 'M.Sc Nursing, Ph.D (PHN)',
          specialization: 'Epidemiology & Public Health',
          experience: '19 Years',
          image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80',
          department: 'Community'
        },
        {
          name: 'Mrs. Kavitha Nair',
          designation: 'Associate Professor',
          qualification: 'M.Sc Nursing (CHN)',
          specialization: 'Maternal & Child Health',
          experience: '13 Years',
          image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=500&q=80',
          department: 'Community'
        },
        {
          name: 'Mr. Suresh Bhat',
          designation: 'Assistant Professor',
          qualification: 'M.Sc Nursing',
          specialization: 'School Health & Occupational Health',
          experience: '7 Years',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
          department: 'Community'
        },
      ]
    },
    {
      name: 'Obstetrics & Gynaecology',
      shortName: 'OBG',
      color: 'bg-pink-700',
      accentColor: '#be185d',
      icon: 'heart',
      faculty: [
        {
          name: 'Prof. Dr. Lakshmi Menon',
          designation: 'Professor & HOD',
          qualification: 'M.Sc Nursing (OBG), Ph.D',
          specialization: 'High-Risk Obstetrics & Neonatal Care',
          experience: '24 Years',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
          department: 'OBG'
        },
        {
          name: 'Mrs. Divya Krishnan',
          designation: 'Associate Professor',
          qualification: 'M.Sc Nursing (OBG)',
          specialization: 'Midwifery & Lactation Counselling',
          experience: '12 Years',
          image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
          department: 'OBG'
        },
        {
          name: 'Mrs. Preethi Sharma',
          designation: 'Assistant Professor',
          qualification: 'M.Sc Nursing',
          specialization: 'Gynaecological Oncology Nursing',
          experience: '6 Years',
          image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80',
          department: 'OBG'
        },
      ]
    },
    {
      name: 'Child Health Nursing',
      shortName: 'Paediatrics',
      color: 'bg-sky-700',
      accentColor: '#0369a1',
      icon: 'users',
      faculty: [
        {
          name: 'Prof. Dr. Vijaya Kumar',
          designation: 'Professor & HOD',
          qualification: 'M.Sc Nursing (CHN), Ph.D',
          specialization: 'Neonatal Intensive Care & Paediatric Oncology',
          experience: '20 Years',
          image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=500&q=80',
          department: 'Paediatrics'
        },
        {
          name: 'Mrs. Shalini Nair',
          designation: 'Associate Professor',
          qualification: 'M.Sc Nursing',
          specialization: 'Developmental Paediatrics',
          experience: '11 Years',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80',
          department: 'Paediatrics'
        },
      ]
    },
    {
      name: 'Mental Health Nursing',
      shortName: 'Mental Health',
      color: 'bg-violet-700',
      accentColor: '#6d28d9',
      icon: 'brain',
      faculty: [
        {
          name: 'Prof. Dr. Arjun Menon',
          designation: 'Professor & HOD',
          qualification: 'M.Sc Nursing (Psychiatry), Ph.D',
          specialization: 'Clinical Psychiatry & Addiction Medicine',
          experience: '18 Years',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
          department: 'Mental Health'
        },
        {
          name: 'Mrs. Priya Joshi',
          designation: 'Associate Professor',
          qualification: 'M.Sc Nursing (MHN)',
          specialization: 'Child Psychiatry & De-addiction Counselling',
          experience: '10 Years',
          image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80',
          department: 'Mental Health'
        },
      ]
    }
  ];

  get filteredDepartments(): Department[] {
    if (this.activeDept === 'all') return this.departments;
    return this.departments.filter(d => d.shortName === this.activeDept);
  }

  get totalFaculty(): number {
    return this.departments.reduce((sum, d) => sum + d.faculty.length, 0);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
