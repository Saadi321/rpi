import { ProspectusItem } from './ProspectusTypes';

export const PROSPECTUS_DATA: ProspectusItem[] = [
  {
    id: 'electrical',
    programName: 'Electrical Technology',
    programIcon: 'Zap',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    pdfUrl: '/prospectus/electrical-tech.pdf',
    pdfSize: '2.4 MB',
    thumbnail: 'https://picsum.photos/seed/electrical-prospectus/400/300',
    description: 'Comprehensive diploma program in Electrical Engineering covering power systems, industrial automation, and renewable energy.',
    duration: '3 Years',
    eligibility: 'Matric (Science) with minimum 50% marks',
    highlights: [
      'Industrial Electrical Systems',
      'Power Generation & Distribution',
      'Renewable Energy Technologies',
      'Electrical Machine Maintenance'
    ]
  },
  {
    id: 'civil',
    programName: 'Civil Technology',
    programIcon: 'HardHat',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    pdfUrl: '/prospectus/civil-tech.pdf',
    pdfSize: '2.8 MB',
    thumbnail: 'https://picsum.photos/seed/civil-prospectus/400/300',
    description: 'Professional training in construction, surveying, and structural engineering for modern infrastructure projects.',
    duration: '3 Years',
    eligibility: 'Matric (Science) with minimum 50% marks',
    highlights: [
      'Surveying & Mapping',
      'Structural Design',
      'Construction Management',
      'AutoCAD & Building Estimation'
    ]
  },
  {
    id: 'electronics',
    programName: 'Electronics Technology',
    programIcon: 'Cpu',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    pdfUrl: '/prospectus/electronics-tech.pdf',
    pdfSize: '2.2 MB',
    thumbnail: 'https://picsum.photos/seed/electronics-prospectus/400/300',
    description: 'Advanced electronics curriculum covering circuit design, embedded systems, and industrial automation.',
    duration: '3 Years',
    eligibility: 'Matric (Science) with minimum 50% marks',
    highlights: [
      'Digital & Analog Electronics',
      'Microcontroller Programming',
      'PCB Design & Fabrication',
      'Industrial Automation'
    ]
  },
  {
    id: 'cit',
    programName: 'Computer Information Technology',
    programIcon: 'Monitor',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    pdfUrl: '/prospectus/cit-tech.pdf',
    pdfSize: '2.6 MB',
    thumbnail: 'https://picsum.photos/seed/cit-prospectus/400/300',
    description: 'Modern IT education covering software development, networking, and database management.',
    duration: '3 Years',
    eligibility: 'Matric (Any Group) with minimum 45% marks',
    highlights: [
      'Web & Mobile Development',
      'Database Management',
      'Network Administration',
      'Cybersecurity Basics'
    ]
  }
];
