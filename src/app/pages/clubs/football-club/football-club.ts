import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-football-club',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './football-club.html'
})
export class FootballClub implements OnInit {
  activeTab = signal<string>('home');

  achievements = [
    {
      year: '2024',
      title: 'Karnataka Inter-Collegiate Champions',
      desc: 'Defeated St. Aloysius 3–1 in the final at Kanteerava Stadium.'
    },
    {
      year: '2023',
      title: 'South Zone Runners-Up',
      desc: 'Reached the final of the AIU South Zone Tournament after an unbeaten group stage.'
    },
    {
      year: '2022',
      title: 'Bengaluru University Champions',
      desc: 'Lifted the BU trophy for the third consecutive year.'
    },
    {
      year: '2021',
      title: 'All-India Nursing College Cup — Semifinalists',
      desc: 'Knocked out eventual winners in a penalty shootout.'
    },
    {
      year: '2020',
      title: 'Zonal Champions',
      desc: 'Retained the Zonal championship title for the second time.'
    }
  ];

  squad = [
    { name: 'Arjun Rao', number: '#9', position: 'Captain · Striker', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
    { name: 'Vikram Shetty', number: '#8', position: 'Vice-Captain · Midfielder', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Rahul Iyer', number: '#1', position: 'Goalkeeper', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=500&q=80' },
    { name: 'Mohammed Khan', number: '#4', position: 'Defender', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
    { name: 'Suresh Kumar', number: '#6', position: 'Midfielder', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=500&q=80' },
    { name: 'Deepak Nair', number: '#11', position: 'Winger', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Pradeep Hegde', number: '#3', position: 'Left Back', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=500&q=80' },
    { name: 'Kiran Bhat', number: '#7', position: 'Forward', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=500&q=80' }
  ];

  private static readonly GALLERY_PHOTO_COUNT = 43;

  gallery = Array.from(
    { length: FootballClub.GALLERY_PHOTO_COUNT },
    (_, photoIndex) => `/clubs/football-gallery/football-${String(photoIndex + 1).padStart(2, '0')}.webp`
  );

  setTab(tab: string) {
    this.activeTab.set(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
