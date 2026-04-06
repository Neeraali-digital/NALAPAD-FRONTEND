import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pharmacy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pharmacy.html',
})
export class Pharmacy {
  features = [
    {
      title: 'Precision Training',
      desc: 'Master the science of formulation, analysis, and clinical pharmacology.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      title: 'R&D Mindset',
      desc: 'Focused research approach with access to advanced analytical infrastructure.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
    },
    {
      title: 'Industry Linkage',
      desc: 'Strong ties with leading pharmaceutical companies for internships and jobs.',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    }
  ];

  programs = [
    { name: 'B.Pharm', duration: '4 Years', intake: '60 Seats' },
    { name: 'D.Pharm', duration: '2 Years', intake: '60 Seats' }
  ];
}
