export interface Programme {
  slug: string;
  name: string;
  level: string;
  duration: string;
  eligibility: string;
  summary: string;
  highlights: readonly string[];
  link: string;
}

// Eligibility follows standard INC norms; confirm exact wording with the college.
export const PROGRAMMES: readonly Programme[] = [
  {
    slug: 'bsc-nursing',
    name: 'B.Sc Nursing',
    level: 'Undergraduate Degree',
    duration: '4 Years',
    eligibility: '10+2 with Physics, Chemistry, Biology & English (min. 45%)',
    summary: 'A full nursing degree with hospital-integrated clinical training from the first year.',
    highlights: [
      'Simulation & skill labs from Year 1',
      'Clinical rotations at partner hospitals',
      'Pick any 2 add-on specialisations',
      'Placement support in India & abroad',
    ],
    link: '/departments/bsc-nursing',
  },
  {
    slug: 'gnm',
    name: 'GNM Nursing',
    level: 'Diploma',
    duration: '3 Years',
    eligibility: '10+2 in any stream with English (min. 40%)',
    summary: 'A government-recognised nursing diploma focused on hands-on patient care.',
    highlights: [
      'Government recognised diploma',
      'Hands-on ward & community practice',
      'Pick any 2 add-on specialisations',
      'Placement assistance on completion',
    ],
    link: '/departments/gnm',
  },
];

export const UNDECIDED_PROGRAMME_LABEL = 'Not sure yet';
