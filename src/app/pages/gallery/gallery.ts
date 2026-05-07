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

  // Dynamically populated from public/gallery
  images = [
    { type: 'image', category: 'photos', src: '/gallery/DSC00089.jpg', title: 'Campus Excellence', sub: 'Main Building', span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00159.jpg', title: 'Clinical Training', sub: 'Simulation Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00217-2.jpg', title: 'Student Life', sub: 'Common Area', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00226.jpg', title: 'Nursing Arts', sub: 'Practical Session', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00242.jpg', title: 'Global Gateway', sub: 'Placement Cell', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00260.jpg', title: 'Library Hub', sub: 'Academic Block', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00261.jpg', title: 'Research Wing', sub: 'Science Lab', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00332.jpg', title: 'Campus Grounds', sub: 'Sports Arena', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00347.jpg', title: 'Community Outreach', sub: 'Rural Camp', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00370.jpg', title: 'Anatomy Study', sub: 'Bio Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00494.jpg', title: 'Surgical Skills', sub: 'Skill Center', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00511.jpg', title: 'Pediatric Care', sub: 'MCH Lab', span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00514.jpg', title: 'Emergency Training', sub: 'Residency', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00533.jpg', title: 'Student Seminar', sub: 'Conference Hall', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00620.jpg', title: 'Laboratory Excellence', sub: 'Research Wing', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00632.jpg', title: 'Clinical Mastery', sub: 'Simulation Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00646.jpg', title: 'Medical Research', sub: 'Bio-Tech Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00691.jpg', title: 'Anatomy Excellence', sub: 'Anatomy Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00722.jpg', title: 'Surgical Residency', sub: 'Specialty OT', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00728.jpg', title: 'Public Health', sub: 'Rural Unit', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00736.jpg', title: 'Community Care', sub: 'Primary Center', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00744.jpg', title: 'Global Certification', sub: 'KNC Seminar', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00754.jpg', title: 'Simulation Journey', sub: 'Skills Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00799.jpg', title: 'Laboratory Arts', sub: 'Bio Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00819.jpg', title: 'Institutional Legacy', sub: 'Heritage Block', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00838.jpg', title: 'Academic Life', sub: 'Lecture Hall', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00843.jpg', title: 'Student Hub', sub: 'Engagement Zone', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00850.jpg', title: 'Clinical Practice', sub: 'Medical Unit', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00903.jpg', title: 'Campus Greens', sub: 'Outdoor Spaces', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC00980.jpg', title: 'Nursing Excellence', sub: 'Practical Block', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01000.jpg', title: 'Laboratory Work', sub: 'Chemistry Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01123.jpg', title: 'Research Progress', sub: 'Scientific Wing', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01134.jpg', title: 'Modern Facilities', sub: 'Smart Classroom', span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01322.JPG', title: 'Healthcare Journey', sub: 'Clinical Rotations', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01341.JPG', title: 'Patient Simulation', sub: 'Virtual Ward', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01358.JPG', title: 'Student Success', sub: 'Achievement Wall', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC01412.JPG', title: 'Global Exposure', sub: 'International Seminar', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02343.jpg', title: 'Advanced Labs', sub: 'Tech-Infused Learning', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02352.jpg', title: 'Community Health', sub: 'Social Impact', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02445.jpg', title: 'Leadership Training', sub: 'Council Meeting', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02493.jpg', title: 'Future Nurses', sub: 'Mentorship Program', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02547.jpg', title: 'Campus Infrastructure', sub: 'Architectural View', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02579.jpg', title: 'Learning Spaces', sub: 'Study Pods', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02843.jpg', title: 'Medical Innovation', sub: 'Research Center', span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02908.jpg', title: 'Student Interaction', sub: 'Collaboration Area', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/DSC02994.jpg', title: 'Academic Rigor', sub: 'Evaluation Center', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02343.jpg', title: 'Institutional Pride', sub: 'Nalapad Legacy', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/SID02517.jpg', title: 'Simulation Mastery', sub: 'Clinical OT', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02522.jpg', title: 'Nursing Arts', sub: 'Hand-on Training', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02541.jpg', title: 'Professional Ethos', sub: 'Ethics Seminar', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/SID02560.jpg', title: 'Global Standards', sub: 'KNC Accreditation', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02573.jpg', title: 'Student Life', sub: 'Evening Campus', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/SID02577.jpg', title: 'Healthcare Leaders', sub: 'Post-Grad Wing', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02579.jpg', title: 'Practical Wisdom', sub: 'Ward Management', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/SID02619.jpg', title: 'Clinical Precision', sub: 'Observation Room', span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/SID02839.jpg', title: 'Campus Excellence', sub: 'Institutional Front', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad1.jpeg', title: 'Vibrant Campus', sub: 'Entry Gate', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad2.jpeg', title: 'Student Gathering', sub: 'Amphitheatre', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad3.jpeg', title: 'Academic Block', sub: 'East Wing', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad4.jpeg', title: 'Nursing Labs', sub: 'MCH Lab', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad5.jpeg', title: 'Research Hub', sub: 'Innovation Cell', span: 'md:row-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad6.jpeg', title: 'Student Services', sub: 'Admin Block', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad7.jpeg', title: 'Library Access', sub: 'Digital Section', span: 'md:col-span-2' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad8.jpeg', title: 'Clinical Excellence', sub: 'Primary Care', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad9.jpeg', title: 'Healthcare Journey', sub: 'Training Hall', span: '' },
    { type: 'image', category: 'photos', src: '/gallery/nalapad10.jpeg', title: 'Institutional Vista', sub: 'Aerial View', span: 'md:col-span-2 md:row-span-2' },
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
