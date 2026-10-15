import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinematicAnimationsService } from '../../../services/cinematic-animations';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadership.html'
})
export class Leadership implements OnInit {
  leaders = [
    {
      name: 'Sri N. A. Haris',
      role: 'Chairman',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
     message: 'Education has always been close to my vision for building a stronger and more responsible society. At Nalapad Group of Institutions, we believe that quality education can create opportunities, shape confident individuals, and contribute to the betterment of the community.',
      paragraphs: [
        'Since its establishment in 2021 under the Nalapad Health and Educational Trust, Nalapad has been committed to providing quality higher and professional education in an environment that encourages knowledge, discipline, confidence, and social responsibility.',
        'Our vision goes beyond academic achievement. We want our students to develop the skills, values, and sense of responsibility needed to make a positive difference in their communities and professional lives. Through practical learning, professional development, and exposure to emerging fields, we aim to prepare young people for a changing world.',
        'I warmly welcome every student to the Nalapad family and wish them a meaningful, successful, and rewarding journey ahead.'
      ],
      credentials: [
        'Chairman, Nalapad Group of Institutions',
        'Chairman, Bengaluru Development Authority (BDA)',
        'MLA - Shantinagar Constituency',
        'Bengaluru, Karnataka, India'
      ]
    },
    {
       name: 'Jestin Pappachen',
  role: 'Director',   // ← this must say 'Director', not 'Principal'
      image: 'https://images.unsplash.com/photo-1594824432258-f9b1df0ce82b?auto=format&fit=crop&w=800&q=80',
       message: 'At Nalapad Group of Institutions, our approach to education goes beyond the classroom. We strive to provide students with an environment where academic learning is supported by practical experience, professional skills, and opportunities to discover their potential.',
      paragraphs: [
        'Our programmes are designed to help students build a strong foundation while staying connected to the changing requirements of the healthcare and professional sectors. Through clinical and practical exposure, specialised add-on courses, technology-focused learning, and student activities, we encourage our students to become adaptable and future-ready.',
        'We believe that every student has the potential to achieve more when given the right guidance and opportunities. At Nalapad, we remain committed to creating those opportunities and supporting our students throughout their educational journey.'
      ],
      credentials: [
        'Director',
        'Nalapad Group of Institutions'
      ]
    }, 
     {
      name: 'Anu Thomas',
      role: 'Dean',
      image: 'PASTE_DEAN_PHOTO_URL_HERE',
      message: 'At Nalapad Group of Institutions, we believe that quality nursing education is founded on academic excellence, clinical competence, ethical practice, and compassion. Our aim is to prepare students not only with sound professional knowledge, but also with the confidence and skills required to meet the evolving needs of healthcare.',
      paragraphs: [
        'Our B.Sc. Nursing and GNM Nursing programmes combine structured academics, clinical training, practical exposure, and continuous skill development. Through specialised add-on courses in areas such as critical care, pediatric nursing, digital health, medical coding, and AI in healthcare, students are encouraged to expand their professional capabilities.',
        'With experienced faculty and a supportive academic environment, we strive to nurture competent, compassionate, and responsible nursing professionals who can make a meaningful contribution to healthcare and society.'
      ],
      credentials: [
        'Dean, Nalapad Group of Institutions',
        'Academic Council Member, Rajiv Gandhi University of Health Sciences (RGUHS)'
      ]
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
