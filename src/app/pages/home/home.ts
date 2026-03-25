import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy {
  activeSlide = 0;
  private slideInterval: any;

  slides = [
      {
      image: '/slide2.png',
      title: 'Shaping Future Healthcare Leaders',
      subtitle: 'Join a Community of Healers',
      cta: 'Apply Online',
      link: '/admissions'
    },
    
    {
      image: '/slide1.png',
      title: 'World-Class Nursing Education',
      subtitle: 'INC & KNC Approved Programs',
      cta: 'Explore Courses',
      link: '/departments'
    },
    {
      image: '/slide3.png',
      title: 'Advanced Clinical Simulation',
      subtitle: 'Hands-on Training in Modern Labs',
      cta: 'View Facilities',
      link: '/facilities'
    }
  ];

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.activeSlide = index;
    this.stopSlideShow();
    this.startSlideShow();
  }
}
