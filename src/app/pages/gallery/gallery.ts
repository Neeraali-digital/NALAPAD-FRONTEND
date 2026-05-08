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
  activeCategory = 'photos';
  selectedImage: string | null = null;
  
  categories = [
    { id: 'photos', name: 'Photos' },
    { id: 'videos', name: 'Videos' }
  ];

  // Only including existing files from public/gallery
  images = [
    { type: 'image', category: 'photos', src: '/gallery/nalapad10.jpeg', title: 'Institutional Vista', sub: 'Aerial View', span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad1.jpeg', title: 'Vibrant Campus', sub: 'Entry Gate', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad2.jpeg', title: 'Student Gathering', sub: 'Amphitheatre', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00159.jpg', title: 'Academic Excellence', sub: 'Modern Classroom', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00226.jpg', title: 'Clinical Practice', sub: 'Advanced Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00242.jpg', title: 'Future Nurses', sub: 'Skill Lab Session', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad3.jpeg', title: 'Academic Block', sub: 'East Wing', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00260.jpg', title: 'Laboratory Excellence', sub: 'Research Wing', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00332.jpg', title: 'Healthcare Training', sub: 'Practical Workshop', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00347.jpg', title: 'In-depth Study', sub: 'Resource Center', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad4.jpeg', title: 'Nursing Labs', sub: 'MCH Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00370.jpg', title: 'Scientific Inquiry', sub: 'Chemistry Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00511.jpg', title: 'Campus Interaction', sub: 'Student Plaza', span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00514.jpg', title: 'Modern Infrastructure', sub: 'Main Lobby', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00620.jpg', title: 'Faculty Mentorship', sub: 'Discussion Hall', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00632.jpg', title: 'Anatomy Lab', sub: 'Discovery Room', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00722.jpg', title: 'Medical Simulation', sub: 'Tech-enabled Learning', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00728.jpg', title: 'Patient Care Simulation', sub: 'Critical Care Unit', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00736.jpg', title: 'Digital Literacy', sub: 'Computer Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00744.jpg', title: 'Nursing Practice', sub: 'Fundamentals Lab', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00754.jpg', title: 'Global Standards', sub: 'Accredited Facility', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00819.jpg', title: 'Expert Guidance', sub: 'Faculty Interaction', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00843.jpg', title: 'Practical Learning', sub: 'Hands-on Session', span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00850.jpg', title: 'Teamwork', sub: 'Group Project', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00903.jpg', title: 'Clinical Rotation', sub: 'Hospital Bridge', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00980.jpg', title: 'Anatomy Study', sub: 'Biology Lab', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01000.jpg', title: 'Career Path', sub: 'Placement Cell', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01123.jpg', title: 'Event Celebration', sub: 'Auditorium', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01341.jpg', title: 'Focus and Zeal', sub: 'Student Study', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02352.jpg', title: 'Dynamic Campus', sub: 'Recreation Area', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02445.jpg', title: 'Skill Acquisition', sub: 'Advanced Simulation', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02547.jpg', title: 'Institutional Pride', sub: 'Main Facade', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02579.jpg', title: 'Student Life', sub: 'Social Space', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02908.jpg', title: 'Research Breakthrough', sub: 'Innovation Wing', span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02994.jpg', title: 'Professional Growth', sub: 'Seminar Room', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02343.jpg', title: 'Campus Life', sub: 'Outdoor Spaces', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02517.jpg', title: 'Simulation Hub', sub: 'Skills Lab', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/SID02522.jpg', title: 'Advanced Care', sub: 'ICU Simulation', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/SID02541.jpg', title: 'Interactive Learning', sub: 'Smart Classroom', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02560.jpg', title: 'Modern Facilities', sub: 'Student Lounge', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02573.jpg', title: 'Campus Serenity', sub: 'Green Spaces', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/SID02577.jpg', title: 'Academic Life', sub: 'Lecture Hall', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/SID02579.jpg', title: 'Clinical Rounds', sub: 'Bedside Training', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02619.jpg', title: 'Practical Exam', sub: 'Assessment Hall', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02839.jpg', title: 'Graduation Ceremony', sub: 'Milestone Moment', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad5.jpeg', title: 'Research Hub', sub: 'Innovation Cell', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad6.jpeg', title: 'Student Services', sub: 'Admin Block', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad7.jpeg', title: 'Library Access', sub: 'Digital Section', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad8.jpeg', title: 'Clinical Excellence', sub: 'Primary Care', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad9.jpeg', title: 'Healthcare Journey', sub: 'Training Hall', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad11.jpeg', title: 'Future Leaders', sub: 'Batch of 2026', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad13.webp', title: 'Simulation Success', sub: 'Skill Center', span: '' },
  ];

  videos = [
    { type: 'video', category: 'videos', src: 'https://www.youtube.com/embed/UqhlqBbjxRw', title: 'Campus Tour', sub: 'Official Nalapad Overview', span: 'md:col-span-2' },
    { type: 'video', category: 'videos', src: 'https://www.youtube.com/embed/UqhlqBbjxRw', title: 'Clinical Skills', sub: 'Simulation Center Focus', span: 'md:col-span-2' },
    { type: 'video', category: 'videos', src: 'https://www.youtube.com/embed/UqhlqBbjxRw', title: 'Student Life', sub: 'Campus Experience', span: 'md:col-span-2' },
    { type: 'video', category: 'videos', src: 'https://www.youtube.com/embed/UqhlqBbjxRw', title: 'Placement Authority', sub: 'Career Outcomes', span: 'md:col-span-2' }
  ];

  galleryItems = [...this.images, ...this.videos].map(item => ({ 
    ...item, 
    loaded: false,
    span: item.span || '' 
  }));
  filteredItems = this.galleryItems.filter(item => item.category === 'photos');

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
    this.filteredItems = this.galleryItems.filter(item => item.category === cat);
  }

  openLightbox(src: string) {
    this.selectedImage = src;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('lightbox-open');
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
    document.body.classList.remove('lightbox-open');
  }

  onImageLoad(item: any) {
    item.loaded = true;
  }
}
