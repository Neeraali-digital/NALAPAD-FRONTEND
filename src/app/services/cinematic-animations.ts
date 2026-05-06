import { Injectable } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({ providedIn: 'root' })
export class CinematicAnimationsService {

  init() {
    requestAnimationFrame(() => {
      setTimeout(() => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        this.heroAnim();
        this.certAnim();
        this.aboutAnim();
        this.courseAnim();
        this.hospitalAnim();
        this.pillarAnim();
        this.ecAnim();
        this.labAnim();
        this.placementAnim();
      }, 300);
    });
  }

  killAll() {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }

  private heroAnim() {
    const hero = document.querySelector('#advertising');
    if (!hero) return;
    gsap.fromTo(hero.querySelectorAll('h2'), { y: 60, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.3, ease: 'power4.out', delay: 0.3 });
    gsap.fromTo(hero.querySelectorAll('.grid p'), { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.7, stagger: 0.1 });
    ScrollTrigger.create({
      trigger: '#advertising', start: 'top top', end: 'bottom top', scrub: 1.5,
      onUpdate: (s) => {
        const p = s.progress;
        hero.querySelectorAll('picture img').forEach(el => {
          gsap.set(el, { scale: 1 + p * 0.1, yPercent: p * 15 });
        });
        hero.querySelectorAll('.absolute.inset-x-0').forEach(el => {
          gsap.set(el, { yPercent: p * -20, opacity: 1 - p * 1.5 });
        });
      }
    });
  }

  private certAnim() {
    ScrollTrigger.create({
      trigger: '#certifications', start: 'top 88%', once: true,
      onEnter: () => {
        const el = document.querySelector('#certifications');
        if (!el) return;
        gsap.fromTo(el.querySelectorAll('[class*="flex-col"]'),
          { y: 40, opacity: 0, scale: 0.85 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', stagger: 0.12 });
      }
    });
  }

  private aboutAnim() {
    const section = document.querySelector('#about');
    if (!section) return;
    ScrollTrigger.create({
      trigger: '#about', start: 'top 80%', once: true,
      onEnter: () => {
        const cols = section.querySelectorAll('.grid.lg\\:grid-cols-2 > div');
        if (cols[0]) gsap.fromTo(cols[0], { x: -70, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power4.out' });
        if (cols[1]) gsap.fromTo(cols[1], { x: 70, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.15 });
        gsap.fromTo(section.querySelectorAll('.grid.md\\:grid-cols-3 > div'),
          { y: 50, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.5)', stagger: 0.15, delay: 0.3 });
        gsap.fromTo(section.querySelectorAll('.grid.lg\\:grid-cols-12'),
          { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.5 });
      }
    });
    ScrollTrigger.create({
      trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 1.2,
      onUpdate: (s) => {
        section.querySelectorAll('.grid.lg\\:grid-cols-12 img').forEach(el => {
          gsap.set(el, { yPercent: (s.progress - 0.5) * -15 });
        });
      }
    });
  }

  private courseAnim() {
    ScrollTrigger.create({
      trigger: '#courses', start: 'top 78%', once: true,
      onEnter: () => {
        const el = document.querySelector('#courses');
        if (!el) return;
        gsap.fromTo(el.querySelector('.text-left'),
          { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
        gsap.fromTo(el.querySelectorAll('.grid > div'),
          { y: 90, opacity: 0, scale: 0.88, rotateX: 6 },
          { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12, delay: 0.2 });
      }
    });
    ScrollTrigger.create({
      trigger: '#courses', start: 'top bottom', end: 'bottom top', scrub: 1.5,
      onUpdate: (s) => {
        document.querySelectorAll('#courses .grid > div img').forEach(el => {
          gsap.set(el, { yPercent: (s.progress - 0.5) * -20 });
        });
      }
    });
  }

  private hospitalAnim() {
    ScrollTrigger.create({
      trigger: '#hospitals', start: 'top 80%', once: true,
      onEnter: () => {
        const el = document.querySelector('#hospitals');
        if (!el) return;
        gsap.fromTo(el.querySelector('.border-l-8'),
          { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'power4.out' });
        gsap.fromTo(el.querySelectorAll('.grid.grid-cols-2 > div'),
          { scale: 0.8, opacity: 0, y: 25 },
          { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.4)', stagger: 0.08, delay: 0.2 });
      }
    });
  }

  private pillarAnim() {
    ScrollTrigger.create({
      trigger: '#clubs', start: 'top 80%', once: true,
      onEnter: () => {
        const el = document.querySelector('#clubs');
        if (!el) return;
        gsap.fromTo(el.querySelector('h2'),
          { y: 50, opacity: 0, filter: 'blur(6px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out' });
        gsap.fromTo(el.querySelectorAll('.grid > div[class*="group"]'),
          { y: 70, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power4.out', stagger: 0.15, delay: 0.3 });
      }
    });
    ScrollTrigger.create({
      trigger: '#clubs', start: 'top bottom', end: 'bottom top', scrub: 2,
      onUpdate: (s) => {
        document.querySelectorAll('#clubs .animate-twinkle').forEach(el => {
          gsap.set(el, { yPercent: -s.progress * 35 });
        });
        document.querySelectorAll('#clubs .animate-twinkle-delayed').forEach(el => {
          gsap.set(el, { yPercent: -s.progress * 18 });
        });
      }
    });
  }

  private ecAnim() {
    ScrollTrigger.create({
      trigger: '#extra-curricular', start: 'top 80%', once: true,
      onEnter: () => {
        const el = document.querySelector('#extra-curricular');
        if (!el) return;
        gsap.fromTo(el.querySelector('h2'),
          { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
        gsap.fromTo(el.querySelectorAll('.grid > div'),
          { y: 90, opacity: 0, scale: 0.85 },
          { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power4.out', stagger: 0.18, delay: 0.2 });
      }
    });
    ScrollTrigger.create({
      trigger: '#extra-curricular', start: 'top bottom', end: 'bottom top', scrub: 1.5,
      onUpdate: (s) => {
        document.querySelectorAll('#extra-curricular .grid > div img').forEach(el => {
          gsap.set(el, { yPercent: (s.progress - 0.5) * -18 });
        });
      }
    });
  }

  private labAnim() {
    ScrollTrigger.create({
      trigger: '#labs', start: 'top 80%', once: true,
      onEnter: () => {
        const el = document.querySelector('#labs');
        if (!el) return;
        gsap.fromTo(el.querySelector('.border-l-8'),
          { y: 50, opacity: 0, x: -25 },
          { y: 0, opacity: 1, x: 0, duration: 1.1, ease: 'power4.out' });
        gsap.fromTo(el.querySelectorAll('.grid > div[class*="group"]'),
          { y: 70, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power4.out', stagger: 0.12, delay: 0.3 });
      }
    });
    ScrollTrigger.create({
      trigger: '#labs', start: 'top bottom', end: 'bottom top', scrub: 1.5,
      onUpdate: (s) => {
        document.querySelectorAll('#labs .grid > div img').forEach(el => {
          gsap.set(el, { yPercent: (s.progress - 0.5) * -25 });
        });
      }
    });
  }

  private placementAnim() {
    ScrollTrigger.create({
      trigger: '#placements', start: 'top 80%', once: true,
      onEnter: () => {
        const el = document.querySelector('#placements');
        if (!el) return;
        gsap.fromTo(el.querySelector('h2'),
          { y: 70, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.4, ease: 'power4.out' });
        gsap.fromTo(el.querySelectorAll('.flex.gap-4 > div'),
          { scale: 0.8, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.9, ease: 'back.out(1.5)', stagger: 0.15, delay: 0.3 });
        gsap.fromTo(el.querySelectorAll('.grid.grid-cols-3 > div'),
          { y: 50, opacity: 0, scale: 0.85 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.4)',
            stagger: { amount: 1, from: 'start' }, delay: 0.4 });
        gsap.fromTo(el.querySelectorAll('.grid.grid-cols-2 img, .grid.lg\\:grid-cols-5 img'),
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.6 });
      }
    });
  }
}
