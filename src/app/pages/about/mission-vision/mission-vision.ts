import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinematicAnimationsService } from '../../../services/cinematic-animations';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-vision.html'
})
export class MissionVision implements OnInit {
  visionText = 'Our vision is to build a progressive institution that delivers quality higher and professional education through advanced teaching methods, practical learning, innovation, and technology. We aim to expand our academic programmes and introduce industry-relevant courses that meet the changing needs of society and the professional world. By providing modern learning facilities, practical exposure, specialised skill development, and opportunities for innovation and research, we strive to empower students to become confident, competent, adaptable, and responsible professionals. We envision Nalapad as an institution where academic excellence, professional growth, and holistic development come together to prepare students for successful careers and meaningful contributions to society. ';

 missionText = 'Our mission is to provide quality higher and professional education that combines academic excellence with practical and industry-oriented learning. We aim to equip students with relevant skills through clinical exposure, specialised add-on courses, modern healthcare practices, and emerging technologies such as AI and digital healthcare. We encourage extracurricular activities, leadership, communication, and personality development to support the overall growth of every student. Through experienced faculty, a supportive learning environment, and opportunities for continuous skill development, we strive to nurture confident, competent, ethical, and socially responsible professionals who are prepared to succeed in their careers and contribute meaningfully to society.' 

  goals = [
    { desc: 'To provide quality nursing education that develops competent and compassionate healthcare professionals.' },
    { desc: 'To equip students with scientific knowledge, clinical skills, and ethical values required for effective patient care.' },
    { desc: 'To promote critical thinking, leadership, and decision-making abilities among nursing students.' },
    { desc: 'To encourage research, innovation, and evidence-based nursing practice for improved healthcare outcomes.' },
    { desc: 'To prepare graduates to meet the healthcare needs of individuals, families, and communities at local and global levels.' },
    { desc: 'To foster professionalism, discipline, empathy, and lifelong learning in the nursing profession.' },
    { desc: 'To provide practical clinical exposure through collaboration with hospitals and healthcare institutions.' },
    { desc: 'To develop socially responsible nurses committed to community health promotion and disease prevention.' },
    { desc: 'To enhance communication and teamwork skills necessary for multidisciplinary healthcare environments.' },
    { desc: 'To create opportunities for continuous professional development and advanced nursing education.' }
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
