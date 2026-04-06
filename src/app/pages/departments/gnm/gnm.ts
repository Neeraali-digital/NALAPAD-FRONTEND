import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gnm',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './gnm.html',
})
export class Gnm {
  clinicalPartners = [
    { name: 'Manipal Hospitals', logo: '/partners/Manipal Hospitals.png' },
    { name: 'Apollo Hospitals', logo: '/partners/Apollo Hospitals.jpg' },
    { name: 'Fortis Health', logo: '/partners/Fortis Health.jpg' },
    { name: 'Aster CMI', logo: '/partners/Aster CMI.jpg' }
  ];
}
