import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CinematicAnimationsService } from '../../../services/cinematic-animations';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mission-vision.html'
})
export class MissionVision implements OnInit {
  visionText = 'Our vision is to inspire future nurses to serve humanity with compassion, empathy, integrity, and professionalism. We aspire to create a nurturing learning environment that encourages innovation, clinical excellence, and a deep commitment to caring for every individual with dignity and respect. By shaping competent and compassionate healthcare providers, we aim to bring hope, healing, and comfort to communities, improving the quality of life and making a meaningful difference in society.';

  missionStatements = [
    'To provide high-quality nursing education that combines evidence-based practice, critical thinking, and ethical care.',
    'To develop skilled and compassionate nurses through rigorous academic programs, clinical training, and community engagement.',
    'To foster lifelong learning, research, and professional growth in nursing students, preparing them to meet evolving healthcare challenges.',
    'To promote health equity and patient-centered care by instilling leadership, empathy, and professionalism in future nurses.'
  ];

  goals = [
    {
      id: '01',
      title: 'Competent & Compassionate Professionals',
      desc: 'To provide quality nursing education that develops competent and compassionate healthcare professionals.',
      icon: 'academic'
    },
    {
      id: '02',
      title: 'Clinical & Ethical Knowledge',
      desc: 'To equip students with scientific knowledge, clinical skills, and ethical values required for effective patient care.',
      icon: 'beaker'
    },
    {
      id: '03',
      title: 'Leadership & Decision-Making',
      desc: 'To promote critical thinking, leadership, and decision-making abilities among nursing students.',
      icon: 'brain'
    },
    {
      id: '04',
      title: 'Research & Innovation',
      desc: 'To encourage research, innovation, and evidence-based nursing practice for improved healthcare outcomes.',
      icon: 'microscope'
    },
    {
      id: '05',
      title: 'Global Healthcare Preparedness',
      desc: 'To prepare graduates to meet the healthcare needs of individuals, families, and communities at local and global levels.',
      icon: 'globe'
    },
    {
      id: '06',
      title: 'Empathy & Lifelong Learning',
      desc: 'To foster professionalism, discipline, empathy, and lifelong learning in the nursing profession.',
      icon: 'shield'
    },
    {
      id: '07',
      title: 'Practical Clinical Exposure',
      desc: 'To provide practical clinical exposure through collaboration with hospitals and healthcare institutions.',
      icon: 'briefcase'
    },
    {
      id: '08',
      title: 'Community Health Promotion',
      desc: 'To develop socially responsible nurses committed to community health promotion and disease prevention.',
      icon: 'users'
    },
    {
      id: '09',
      title: 'Multidisciplinary Teamwork',
      desc: 'To enhance communication and teamwork skills necessary for multidisciplinary healthcare environments.',
      icon: 'chat'
    },
    {
      id: '10',
      title: 'Advanced Career Opportunities',
      desc: 'To create opportunities for continuous professional development and advanced nursing education.',
      icon: 'trending-up'
    }
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
