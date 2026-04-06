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
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
