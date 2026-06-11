import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinematicAnimationsService } from '../../../services/cinematic-animations';

@Component({
  selector: 'app-college',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './college.html'
})
export class College implements OnInit {
  stats = [
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Graduated Nurses', value: '2500+' },
    { label: 'Global Hospital Ties', value: '50+' },
    { label: 'Placement Rate', value: '100%' }
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
