import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';

export interface HouseData {
  slug: string;
  name: string;
  trait: string;
  tagline: string;
  description: string;
  story: string;
  mission: string;
  training: string;
  membership: string;
  color: string;           // bg class
  accentColor: string;     // hex for inline styles
  textAccent: string;      // text class
  borderAccent: string;    // border class
  heroBg: string;          // unsplash URL
  storyImg: string;
  animal: string;
  element: string;
  founded: string;
  members: string;
  achievements: { year: string; title: string; desc: string }[];
  activities: { name: string; desc: string; icon: string }[];
  gallery: string[];
  team: { name: string; role: string; image: string }[];
}

const HOUSES: Record<string, HouseData> = {
  gryffindor: {
    slug: 'gryffindor',
    name: 'Gryffindor',
    trait: 'Bravery & Courage',
    tagline: 'Dare to Care. Lead with Heart.',
    description: 'The house of the brave, daring, and chivalrous. Gryffindor at Nalapad stands for emergency leadership, crisis care, and the courage to serve every patient with unwavering commitment.',
    story: 'Founded in the first year of the Nalapad House System, Gryffindor quickly established itself as the house that runs toward emergencies while others step back. Our members are the first responders, the night-shift heroes, the students who volunteer for every community health camp and disaster relief drive. We believe that true bravery is compassion in action.',
    mission: 'To cultivate fearless, compassionate healthcare leaders who act decisively under pressure and inspire those around them.',
    training: 'Gryffindor holds weekly Emergency Response Drills, BLS/CPR simulation workshops, and inter-house leadership seminars every semester.',
    membership: 'Open to all students by the Sorting Ceremony at the start of the academic year. Selection is based on leadership aptitude and community service record.',
    color: 'bg-[#740001]',
    accentColor: '#EEBA30',
    textAccent: 'text-[#EEBA30]',
    borderAccent: 'border-[#EEBA30]',
    heroBg: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=2000&q=80',
    storyImg: 'https://images.unsplash.com/photo-1576765608538-84dd7e95ea5b?auto=format&fit=crop&w=1000&q=80',
    animal: 'Lion',
    element: 'Fire',
    founded: '2018',
    members: '87',
    achievements: [
      { year: '2024', title: 'Inter-House Championship — Overall Winners', desc: 'Swept the annual house championship with top scores in academics, sports, and community service.' },
      { year: '2023', title: 'Best Community Health Camp', desc: 'Organised a 3-day free health camp serving over 2,000 villagers in Tumkur district.' },
      { year: '2023', title: 'Emergency Response Drill — First Place', desc: 'Fastest and most accurate response in the annual college-wide emergency simulation.' },
      { year: '2022', title: 'Cultural Championship', desc: 'Won the Milan Cultural Trophy for best theatrical performance — "Healers of the Battlefield".' },
      { year: '2021', title: 'Leadership Award', desc: 'Gryffindor Captain named Best Student Leader by the faculty council.' }
    ],
    activities: [
      { name: 'Emergency Response Drills', desc: 'Monthly simulations covering trauma, cardiac arrest, and mass-casualty events.', icon: 'zap' },
      { name: 'Community Health Camps', desc: 'Quarterly free health camps in rural Karnataka villages.', icon: 'heart' },
      { name: 'BLS/CPR Workshops', desc: 'Open certification workshops for all students and college staff.', icon: 'activity' },
      { name: 'Leadership Seminars', desc: 'Fortnightly talks by senior nurses, doctors, and public health champions.', icon: 'users' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1576765608538-84dd7e95ea5b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80'
    ],
    team: [
      { name: 'Arjun Nair', role: 'House Captain', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
      { name: 'Priya Sharma', role: 'Vice Captain', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&q=80' },
      { name: 'Rahul Iyer', role: 'Sports Head', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
      { name: 'Sunita Menon', role: 'Academic Head', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  ravenclaw: {
    slug: 'ravenclaw',
    name: 'Ravenclaw',
    trait: 'Wit & Wisdom',
    tagline: 'Question Everything. Know More. Heal Better.',
    description: 'Defined by intelligence, creativity, and a relentless thirst for knowledge. Ravenclaws are the researchers, diagnosticians, and clinical innovators of Nalapad.',
    story: 'Ravenclaw was established to honour students who believe that the best care begins with the deepest knowledge. Our members lead the college in research publications, diagnostic workshops, and clinical innovation challenges. We challenge assumptions, question protocols, and never stop learning. In nursing, knowing why is just as important as knowing how.',
    mission: 'To foster a culture of evidence-based practice, critical inquiry, and academic excellence in every Ravenclaw member.',
    training: 'Weekly research methodology workshops, journal club sessions, case study presentations, and monthly diagnostic challenge competitions.',
    membership: 'Assigned at the Sorting Ceremony. Ravenclaws are students who demonstrate exceptional academic curiosity and a love of learning.',
    color: 'bg-[#222f5b]',
    accentColor: '#946b2d',
    textAccent: 'text-[#946b2d]',
    borderAccent: 'border-[#946b2d]',
    heroBg: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000&q=80',
    storyImg: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
    animal: 'Eagle',
    element: 'Air',
    founded: '2018',
    members: '74',
    achievements: [
      { year: '2024', title: 'Best Research Paper — RGUHS', desc: 'Ravenclaw members published a nursing research paper awarded Best Paper at the RGUHS annual conference.' },
      { year: '2023', title: 'Academic Excellence Trophy', desc: 'Highest cumulative GPA across all four houses for the third consecutive year.' },
      { year: '2023', title: 'Diagnostic Challenge Champions', desc: 'Won the inter-college clinical case analysis competition in Mysuru.' },
      { year: '2022', title: 'Quiz Masters', desc: 'Swept all three rounds of the South Zone Inter-Collegiate Medical Quiz.' },
      { year: '2021', title: 'Innovation Award', desc: 'Designed a low-cost wound-care protocol adopted by two partner hospitals.' }
    ],
    activities: [
      { name: 'Journal Club', desc: 'Weekly review of the latest nursing and clinical research publications.', icon: 'book' },
      { name: 'Diagnostic Challenges', desc: 'Monthly clinical case analysis competitions within and across colleges.', icon: 'microscope' },
      { name: 'Research Projects', desc: 'Faculty-guided student research with presentation at conferences.', icon: 'brain' },
      { name: 'Knowledge Quizzes', desc: 'Inter-house and inter-college quiz competitions across all clinical subjects.', icon: 'star' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b6f4e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80'
    ],
    team: [
      { name: 'Deepa Krishnan', role: 'House Captain', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80' },
      { name: 'Vivek Rao', role: 'Vice Captain', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Ananya Pillai', role: 'Research Head', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Karthik Bhat', role: 'Academic Coordinator', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  slytherin: {
    slug: 'slytherin',
    name: 'Slytherin',
    trait: 'Ambition & Pride',
    tagline: 'Strategic. Driven. Unstoppable.',
    description: 'The house of ambition, resourcefulness, and determination. Slytherin members are the healthcare managers, policy shapers, and career leaders of tomorrow.',
    story: 'Slytherin was born from the belief that ambition and compassion are not opposites. Our members are relentlessly goal-driven — pursuing hospital management internships, policy advocacy, and national-level competitions. We are proud of our identity, our hustle, and our record of producing the most placement-ready graduates at Nalapad.',
    mission: 'To develop resourceful, ambitious, and strategically sharp healthcare professionals who lead organisations and shape policy.',
    training: 'Weekly career development workshops, mock interviews, hospital management case studies, and networking events with industry leaders.',
    membership: 'Selected at the annual Sorting Ceremony based on demonstrated ambition, goal-orientation, and strategic thinking.',
    color: 'bg-[#1a472a]',
    accentColor: '#aaaaaa',
    textAccent: 'text-[#aaaaaa]',
    borderAccent: 'border-[#aaaaaa]',
    heroBg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
    storyImg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    animal: 'Serpent',
    element: 'Water',
    founded: '2018',
    members: '69',
    achievements: [
      { year: '2024', title: 'Highest Placement Rate', desc: '100% of Slytherin final-years were placed before graduation — highest offer packages in college history.' },
      { year: '2023', title: 'National Healthcare Management Debate — 1st Place', desc: 'Defeated 14 teams from across India at the AIIMS-hosted healthcare policy debate.' },
      { year: '2023', title: 'Best Entrepreneur Award', desc: 'Slytherin member Rohan Verma won Best Student Entrepreneur at the Karnataka Startup Summit.' },
      { year: '2022', title: 'Hospital Management Internship — MOU', desc: 'Slytherin secured a formal MOU with Manipal Hospitals for priority management internships.' },
      { year: '2021', title: 'Inter-House Sports — Champions', desc: 'Dominated the annual sports meet with gold in 6 of 10 events.' }
    ],
    activities: [
      { name: 'Career Workshops', desc: 'Weekly sessions on resume building, interview skills, and career strategy.', icon: 'briefcase' },
      { name: 'Management Case Studies', desc: 'Real hospital management scenarios analysed and presented to faculty panels.', icon: 'trending-up' },
      { name: 'Policy Debates', desc: 'Structured debates on healthcare policy, ethics, and administration.', icon: 'chat' },
      { name: 'Industry Networking', desc: 'Quarterly networking events with hospital administrators and healthcare executives.', icon: 'globe' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551836022-4961be69a0b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'
    ],
    team: [
      { name: 'Rohan Verma', role: 'House Captain', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=500&q=80' },
      { name: 'Meera Joshi', role: 'Vice Captain', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80' },
      { name: 'Aditya Kumar', role: 'Placement Head', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=500&q=80' },
      { name: 'Sana Khan', role: 'Events Coordinator', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  hufflepuff: {
    slug: 'hufflepuff',
    name: 'Hufflepuff',
    trait: 'Loyalty & Patience',
    tagline: 'Together We Heal. Together We Grow.',
    description: 'Known for hard work, patience, and loyalty. Hufflepuff members are the backbone of patient care — kind, tireless, and deeply committed to community health.',
    story: 'Hufflepuff was created to celebrate the unsung heroes of healthcare — the students who show up every day, who stay late, who hold a patient\'s hand and mean it. Our house has the highest volunteering hours in the college, the warmest community events, and the most dedicated patient advocates. We believe that the greatest strength is showing up, consistently, for others.',
    mission: 'To nurture dedicated, empathetic, and hardworking healthcare professionals who prioritise patient dignity and community wellbeing above all.',
    training: 'Patient communication workshops, palliative care sensitivity training, community outreach volunteering, and mental health first aid certification.',
    membership: 'Assigned at the Sorting Ceremony to students who demonstrate exceptional empathy, reliability, and dedication to service.',
    color: 'bg-[#ecb939]',
    accentColor: '#1a1a1a',
    textAccent: 'text-black',
    borderAccent: 'border-black',
    heroBg: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=2000&q=80',
    storyImg: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
    animal: 'Badger',
    element: 'Earth',
    founded: '2018',
    members: '92',
    achievements: [
      { year: '2024', title: 'Highest Community Service Hours', desc: 'Logged 4,800+ hours of community health service — a college record.' },
      { year: '2023', title: 'Best Patient Care Award', desc: 'Recognised by Aster CMI Hospital for exceptional patient handling during clinical rotations.' },
      { year: '2023', title: 'Mental Health Awareness Month — Gold', desc: 'Organised the college\'s first-ever mental health awareness week, reaching 600+ students.' },
      { year: '2022', title: 'Palliative Care Excellence', desc: 'Partnered with Bangalore Hospice Trust to deliver compassionate end-of-life training.' },
      { year: '2021', title: 'Cultural Harmony Award', desc: 'Won the Milan inter-house award for "Most Inclusive Community Event".' }
    ],
    activities: [
      { name: 'Community Health Outreach', desc: 'Weekly health education visits to schools, slums, and senior care centres.', icon: 'heart' },
      { name: 'Patient Communication Workshops', desc: 'Role-play sessions focused on empathy, active listening, and difficult conversations.', icon: 'chat' },
      { name: 'Mental Health Initiatives', desc: 'Peer support circles, counselling awareness drives, and self-care workshops.', icon: 'brain' },
      { name: 'Palliative Care Training', desc: 'Sensitivity training in end-of-life care with palliative care specialists.', icon: 'shield' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1609902726285-00668009f004?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80'
    ],
    team: [
      { name: 'Divya Nair', role: 'House Captain', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80' },
      { name: 'Suresh Kumar', role: 'Vice Captain', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=500&q=80' },
      { name: 'Kavya Reddy', role: 'Community Head', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Riya Joshi', role: 'Events Head', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80' }
    ]
  }
};

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './house-detail.html'
})
export class HouseDetail implements OnInit, OnDestroy {
  house = signal<HouseData | null>(null);
  activeTab = signal<string>('home');
  private routeSub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.routeSub = this.route.paramMap.subscribe(params => {
      const slug = params.get('house') || '';
      this.house.set(HOUSES[slug] || null);
      this.activeTab.set('home');
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    if (this.routeSub) this.routeSub.unsubscribe();
  }

  setTab(tab: string) {
    this.activeTab.set(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getHeroTextColor(house: HouseData): string {
    return house.slug === 'hufflepuff' ? 'text-neutral-900' : 'text-white';
  }
}
