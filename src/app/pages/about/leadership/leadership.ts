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
      name: 'Dr. Ramesh Sharma',
      role: 'Chairman',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
      message: 'Education is the most powerful weapon which you can use to change the world. At Nalapad, we are committed to providing an environment that fosters intellectual growth and clinical excellence.'
    },
    {
      name: 'Prof. Sunita Menon',
      role: 'Principal',
      image: 'https://images.unsplash.com/photo-1594824432258-f9b1df0ce82b?auto=format&fit=crop&w=800&q=80',
      message: 'Our faculty brings together decades of clinical experience and academic rigor to shape the healthcare leaders of tomorrow. We believe in holistic development and empathetic care.'
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
