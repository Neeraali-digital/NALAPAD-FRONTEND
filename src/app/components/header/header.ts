import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
})
export class Header implements OnInit, OnDestroy {
  isMenuOpen = false;
  isHome = true;
  isScrolledPastAd = false;
  isHeaderVisible = false;
  isHovering = false;
  lastInteractionTime = Date.now();
  checkInterval: any;

  constructor(
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isHome = event.url === '/' || event.url === '/home' || event.urlAfterRedirects === '/';
      this.checkScroll();
    });
    
    // Initial check
    setTimeout(() => this.checkScroll(), 100);

    if (isPlatformBrowser(this.platformId)) {
      this.checkInterval = setInterval(() => {
        if (this.isHeaderVisible && !this.isMenuOpen && !this.isHovering) {
          if (Date.now() - this.lastInteractionTime > 3000) {
            this.isHeaderVisible = false;
            this.cdr.detectChanges();
          }
        }
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    this.onUserInteraction();
  }

  @HostListener('window:mousemove', [])
  @HostListener('window:touchstart', [])
  @HostListener('window:click', [])
  onUserInteraction() {
    this.lastInteractionTime = Date.now();
    if (!this.isHeaderVisible) {
      this.isHeaderVisible = true;
      this.cdr.detectChanges();
    }
  }

  onMouseEnter() {
    this.isHovering = true;
    this.isHeaderVisible = true;
    this.cdr.detectChanges();
  }

  onMouseLeave() {
    this.isHovering = false;
    this.lastInteractionTime = Date.now();
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
      this.isHeaderVisible = true;
      this.cdr.detectChanges();
    } else {
      this.lastInteractionTime = Date.now();
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.lastInteractionTime = Date.now();
  }
}
