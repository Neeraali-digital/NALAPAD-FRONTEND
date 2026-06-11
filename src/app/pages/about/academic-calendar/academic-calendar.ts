import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academic-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academic-calendar.html'
})
export class AcademicCalendar implements OnInit {

  months = [
    {
      name: 'August',
      year: '2025',
      events: [
        { date: '04 Aug', title: 'Orientation Programme', desc: 'Welcome ceremony for incoming B.Sc and GNM batches.', type: 'Academic' },
        { date: '06 Aug', title: 'Commencement of Classes', desc: 'First semester classes begin for all programs.', type: 'Academic' },
        { date: '15 Aug', title: 'Independence Day', desc: 'Flag hoisting and cultural program.', type: 'Holiday' },
        { date: '28 Aug', title: 'Sorting Ceremony', desc: 'Allocation of students into the four houses.', type: 'House Event' }
      ]
    },
    {
      name: 'September',
      year: '2025',
      events: [
        { date: '05 Sep', title: 'Teachers\' Day', desc: 'Special assembly organized by the student council.', type: 'Event' },
        { date: '12 Sep', title: 'Fresher\'s Party', desc: 'Annual welcome event organized by senior batches.', type: 'Cultural' },
        { date: '25 Sep', title: 'First Internal Assessment', desc: 'Internal exams for all batches commence.', type: 'Academic' }
      ]
    },
    {
      name: 'October',
      year: '2025',
      events: [
        { date: '02 Oct', title: 'Gandhi Jayanti', desc: 'National Holiday.', type: 'Holiday' },
        { date: '10 Oct', title: 'World Mental Health Day', desc: 'Awareness walk and seminars organized by Mental Health Dept.', type: 'Event' },
        { date: '20 Oct', title: 'Clinical Postings Begin', desc: 'First-year students begin observational postings.', type: 'Clinical' },
        { date: '30 Oct', title: 'Diwali Break Begins', desc: 'Autumn vacation for students.', type: 'Holiday' }
      ]
    },
    {
      name: 'November',
      year: '2025',
      events: [
        { date: '03 Nov', title: 'Classes Resume', desc: 'College reopens after Diwali break.', type: 'Academic' },
        { date: '14 Nov', title: 'Children\'s Day', desc: 'Paediatric nursing outreach program at local schools.', type: 'Community' },
        { date: '28 Nov', title: 'Milan Cultural Fest', desc: 'Annual inter-college cultural festival.', type: 'Cultural' }
      ]
    },
    {
      name: 'December',
      year: '2025',
      events: [
        { date: '01 Dec', title: 'World AIDS Day', desc: 'Red ribbon campaign and community health drive.', type: 'Community' },
        { date: '15 Dec', title: 'Second Internal Assessment', desc: 'Pre-university exams begin.', type: 'Academic' },
        { date: '24 Dec', title: 'Christmas Eve Celebration', desc: 'Carol singing and campus decoration.', type: 'Event' },
        { date: '25 Dec', title: 'Winter Break Begins', desc: 'Term break for students.', type: 'Holiday' }
      ]
    },
    {
      name: 'January',
      year: '2026',
      events: [
        { date: '02 Jan', title: 'College Reopens', desc: 'Start of the even semester.', type: 'Academic' },
        { date: '12 Jan', title: 'National Youth Day', desc: 'Leadership seminars and guest lectures.', type: 'Event' },
        { date: '26 Jan', title: 'Republic Day', desc: 'Flag hoisting and parade.', type: 'Holiday' },
        { date: '30 Jan', title: 'Nightingale Sports Meet', desc: 'Annual inter-house athletic and sports championship.', type: 'Sports' }
      ]
    },
    {
      name: 'February',
      year: '2026',
      events: [
        { date: '14 Feb', title: 'Community Health Camp', desc: 'Rural health screening camp organized by students.', type: 'Community' },
        { date: '25 Feb', title: 'Clinical Skills Workshop', desc: 'Advanced life support and critical care training.', type: 'Academic' }
      ]
    },
    {
      name: 'March',
      year: '2026',
      events: [
        { date: '08 Mar', title: 'International Women\'s Day', desc: 'Panel discussions and awards for female healthcare leaders.', type: 'Event' },
        { date: '15 Mar', title: 'Third Internal Assessment', desc: 'Final internal exams before university finals.', type: 'Academic' }
      ]
    },
    {
      name: 'April',
      year: '2026',
      events: [
        { date: '07 Apr', title: 'World Health Day', desc: 'Grand health exhibition and public awareness campaign.', type: 'Event' },
        { date: '20 Apr', title: 'Preparation Leave', desc: 'Study break for university exams begins.', type: 'Academic' }
      ]
    },
    {
      name: 'May',
      year: '2026',
      events: [
        { date: '05 May', title: 'University Examinations', desc: 'Final exams commence for all batches.', type: 'Academic' },
        { date: '12 May', title: 'International Nurses Day', desc: 'Lamp lighting ceremony and Florence Nightingale pledge.', type: 'Event' }
      ]
    }
  ];

  getBadgeColor(type: string): string {
    switch (type) {
      case 'Academic': return 'bg-blue-100 text-blue-700';
      case 'Holiday': return 'bg-red-100 text-red-700';
      case 'Event': return 'bg-purple-100 text-purple-700';
      case 'Cultural': return 'bg-pink-100 text-pink-700';
      case 'Clinical': return 'bg-teal-100 text-teal-700';
      case 'Community': return 'bg-green-100 text-green-700';
      case 'Sports': return 'bg-orange-100 text-orange-700';
      case 'House Event': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
