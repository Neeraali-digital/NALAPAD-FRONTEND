import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gallery } from './pages/gallery/gallery';
import { Facilities } from './pages/facilities/facilities';
import { Departments } from './pages/departments/departments';
import { Admissions } from './pages/admissions/admissions';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'gallery', component: Gallery },
  { path: 'facilities', component: Facilities },
  { path: 'about/mission-vision', loadComponent: () => import('./pages/about/mission-vision/mission-vision').then(m => m.MissionVision) },
  { path: 'about/leadership', loadComponent: () => import('./pages/about/leadership/leadership').then(m => m.Leadership) },
  { path: 'about/college', loadComponent: () => import('./pages/about/college/college').then(m => m.College) },
  { path: 'about/faculties', loadComponent: () => import('./pages/about/faculties/faculties').then(m => m.Faculties) },
  { path: 'about/academic-calendar', loadComponent: () => import('./pages/about/academic-calendar/academic-calendar').then(m => m.AcademicCalendar) },
  { path: 'placement', loadComponent: () => import('./pages/placement/placement').then(m => m.Placement) },
  { path: 'clubs/football', loadComponent: () => import('./pages/clubs/football-club/football-club').then(m => m.FootballClub) },
  { path: 'clubs/fashion', loadComponent: () => import('./pages/clubs/fashion-club/fashion-club').then(m => m.FashionClub) },
  { path: 'houses/:house', loadComponent: () => import('./pages/houses/house-detail/house-detail').then(m => m.HouseDetail) },
  { path: 'departments', component: Departments },
  { path: 'departments/bsc-nursing', loadComponent: () => import('./pages/departments/bsc-nursing/bsc-nursing').then(m => m.BscNursing) },
  { path: 'departments/gnm', loadComponent: () => import('./pages/departments/gnm/gnm').then(m => m.Gnm) },
  { path: 'admissions', component: Admissions },
  { path: 'admissions/domestic', loadComponent: () => import('./pages/admissions/domestic/domestic').then(m => m.Domestic) },
  { path: 'admissions/international', loadComponent: () => import('./pages/admissions/international/international').then(m => m.International) },
  { path: 'admissions/scholarship', loadComponent: () => import('./pages/admissions/scholarship/scholarship').then(m => m.Scholarship) },
  { path: 'admissions/video-counselling', loadComponent: () => import('./pages/admissions/video-counselling/video-counselling').then(m => m.VideoCounselling) },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
