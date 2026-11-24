import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MilanEdition {
  year: string;
  photos: string[];
}

@Component({
  selector: 'app-fashion-club',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fashion-club.html'
})
export class FashionClub implements OnInit {
  activeTab = signal<string>('home');

  achievements = [
    {
      year: '2024',
      title: 'Best Costume Design — RGUHS Cultural Fest',
      desc: 'Swept all three design categories at the Rajiv Gandhi University Cultural Festival in Bengaluru.'
    },
    {
      year: '2023',
      title: 'National Nursing Fashion Show — Gold',
      desc: 'Represented Karnataka at the All-India Nursing Cultural Meet and won the Gold Medal for Best Ensemble.'
    },
    {
      year: '2023',
      title: 'Milan Cultural Ceremony — Best Theme',
      desc: 'Our annual Milan show was awarded Best Theme for "Healing Through Heritage".'
    },
    {
      year: '2022',
      title: 'South Zone Collegiate Runway — Runners-Up',
      desc: 'First-ever runway participation at South Zone level; awarded second place for innovation.'
    },
    {
      year: '2021',
      title: 'Nalapad Intra-College — Grand Prix Winners',
      desc: 'Inaugural year of the intra-college fashion competition; Club swept all five categories.'
    }
  ];

  members = [
    { name: 'Priya Sharma', role: 'Club President · Stylist', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80' },
    { name: 'Ananya Menon', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80' },
    { name: 'Kavya Reddy', role: 'Head of Costume Design', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Sneha Pillai', role: 'Makeup Artist', image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=500&q=80' },
    { name: 'Riya Joshi', role: 'Stage Director', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80' },
    { name: 'Divya Nair', role: 'Event Coordinator', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80' },
    { name: 'Meera Iyer', role: 'Lead Model', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80' },
    { name: 'Sana Khan', role: 'Accessories Designer', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80' }
  ];

  private static readonly MILAN_2024_PHOTO_COUNT = 28;
  private static readonly CELEBRATION_PHOTOS_PER_YEAR = 2;

  milanEditions: MilanEdition[] = [
    {
      year: '2024',
      photos: Array.from(
        { length: FashionClub.MILAN_2024_PHOTO_COUNT },
        (_, photoIndex) => `/clubs/milan-gallery/2024/milan-2024-${String(photoIndex + 1).padStart(2, '0')}.webp`
      )
    },
    { year: '2025', photos: [] },
    { year: '2026', photos: [] }
  ];

  selectedYear = signal<string>(this.milanEditions.find(edition => edition.photos.length)?.year ?? this.milanEditions[0].year);

  selectedEdition = computed(() =>
    this.milanEditions.find(edition => edition.year === this.selectedYear()) ?? this.milanEditions[0]
  );

  celebrationPhotos = this.milanEditions.flatMap(edition =>
    edition.photos.slice(0, FashionClub.CELEBRATION_PHOTOS_PER_YEAR)
  );

  selectYear(year: string) {
    this.selectedYear.set(year);
  }

  setTab(tab: string) {
    this.activeTab.set(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
