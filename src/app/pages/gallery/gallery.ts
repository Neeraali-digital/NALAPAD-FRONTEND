import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
})
export class Gallery implements OnInit {
  activeCategory = 'all';
  
  categories = [
    { id: 'all', name: 'All Moments' },
    { id: 'photos', name: 'Photos' },
    { id: 'videos', name: 'Videos' },
    { id: 'events', name: 'Events' }
  ];

  galleryItems = [
    { type: 'image', category: 'events', src: 'https://images.unsplash.com/photo-1543326127-185675c2e35b', title: 'Sports Meet', sub: 'Campus Grounds' },
    { type: 'video', category: 'videos', src: 'https://www.youtube.com/embed/UqhlqBbjxRw', title: 'Clinical Training', sub: 'Nursing Arts Lab' },
    { type: 'image', category: 'photos', src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420', title: 'Cultural Fest', sub: 'Auditorium' },
    { type: 'image', category: 'events', src: 'https://images.unsplash.com/photo-1523580494112-071d22def106', title: 'Graduation', sub: 'Class of 2024' },
    { type: 'video', category: 'videos', src: 'https://www.youtube.com/embed/UqhlqBbjxRw', title: 'Lab Session', sub: 'Anatomy Lab' },
    { type: 'image', category: 'photos', src: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5', title: 'Elite Labs', sub: 'Simulation Center' },
    { type: 'image', category: 'events', src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118', title: 'Medical Camp', sub: 'Rural Health' },
    { type: 'image', category: 'photos', src: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b', title: 'Campus Life', sub: 'Chill Zone' }
  ];

  filteredItems = [...this.galleryItems];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.setCategory(params['category']);
      }
    });
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
    if (cat === 'all') {
      this.filteredItems = [...this.galleryItems];
    } else {
      this.filteredItems = this.galleryItems.filter(item => item.category === cat);
    }
  }
}
