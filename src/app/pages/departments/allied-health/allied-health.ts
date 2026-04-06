import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allied-health',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './allied-health.html',
})
export class AlliedHealth {
  specializations = [
    { 
      name: 'Bachelor of Physiotherapy (BPT)', 
      desc: 'Expertise in physical rehabilitation, sports medicine, and movement science.',
      duration: '4.5 Years',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z' 
    },
    { 
      name: 'Medical Lab Technology (MLT)', 
      desc: 'Analytical training for high-precision diagnostic testing and clinical labs.',
      duration: '3 Years',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' 
    },
    { 
      name: 'MIT / Imaging Tech', 
      desc: 'Mastery of advanced imaging like MRI, CT, and X-Ray diagnostics.',
      duration: '3 Years',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' 
    }
  ];
}
