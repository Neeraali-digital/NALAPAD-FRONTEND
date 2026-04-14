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
