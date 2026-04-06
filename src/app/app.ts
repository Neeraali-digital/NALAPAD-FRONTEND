import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CommonModule],
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('nalapad-site');
  protected isScrollStopped = signal(false);
  private scrollTimer: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Hide while scrolling
    this.isScrollStopped.set(false);
    
    // Clear previous timer
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }

    // Show only after scroll stops for 300ms AND we're not at top
    this.scrollTimer = setTimeout(() => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 300) {
        this.isScrollStopped.set(true);
      } else {
        this.isScrollStopped.set(false);
      }
    }, 400); // 400ms delay to detect scroll stop
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isScrollStopped.set(false);
  }
}
