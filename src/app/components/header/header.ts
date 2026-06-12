import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header implements OnInit {
  isMenuOpen = false;
  isHome = true;
  isScrolledPastAd = false;
  isHeaderVisible = true;
  hideTimeout: any;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHome = event.url === '/' || event.url === '/home' || event.urlAfterRedirects === '/';
      this.checkScroll();
    });
    
    // Initial check
    setTimeout(() => this.checkScroll(), 100);
    this.startHideTimer();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    this.isHeaderVisible = true;
    this.startHideTimer();
  }

  startHideTimer() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }
    
    this.hideTimeout = setTimeout(() => {
      if (!this.isMenuOpen) {
        this.isHeaderVisible = false;
      }
    }, 5000);
  }

  onMouseEnter() {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    this.isHeaderVisible = true;
  }

  onMouseLeave() {
    this.startHideTimer();
  }

  checkScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isHome) {
        const adArea = document.getElementById('advertising');
        const isMobile = window.innerWidth < 768;
        if (adArea && !isMobile) {
          // Show header slightly before the area finishes, or exactly when it finishes
          this.isScrolledPastAd = window.scrollY > (adArea.clientHeight * 0.7);
        } else {
          this.isScrolledPastAd = window.scrollY > 10;
        }
      } else {
        this.isScrolledPastAd = true;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      if (this.hideTimeout) clearTimeout(this.hideTimeout);
      this.isHeaderVisible = true;
    } else {
      this.startHideTimer();
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.startHideTimer();
  }
}
