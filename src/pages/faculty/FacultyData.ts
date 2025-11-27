import { FacultyMember, Department } from './FacultyTypes';

export const DEPARTMENTS: Department[] = [
  { id: 'all', name: 'All Faculty', icon: 'Users', color: 'text-slate-600' },
  { id: 'electrical', name: 'Electrical Technology', icon: 'Zap', color: 'text-yellow-600' },
  { id: 'civil', name: 'Civil Technology', icon: 'HardHat', color: 'text-orange-600' },
  { id: 'electronics', name: 'Electronics Technology', icon: 'Cpu', color: 'text-blue-600' },
  { id: 'cit', name: 'Computer IT', icon: 'Monitor', color: 'text-cyan-600' },
];

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: '1',
    name: 'Engr. Muhammad Ali Khan',
    designation: 'Senior Instructor',
    department: 'electrical',
    photo: 'https://picsum.photos/seed/faculty1/400/400',
    bio: 'Over 15 years of experience in electrical engineering education and industrial training.',
    expertise: ['Power Systems', 'Industrial Automation', 'Renewable Energy'],
    email: 'ali.khan@rpi.edu.pk',
    phone: '+92-300-1234567',
    qualification: 'B.Sc Electrical Engineering'
  },
  {
    id: '2',
    name: 'Engr. Fatima Noor',
    designation: 'Head of Department',
    department: 'civil',
    photo: 'https://picsum.photos/seed/faculty2/400/400',
    bio: 'Expert in construction management and structural design with 12 years of teaching experience.',
    expertise: ['Structural Design', 'Construction Management', 'AutoCAD'],
    email: 'fatima.noor@rpi.edu.pk',
    qualification: 'M.Sc Civil Engineering'
  },
  {
    id: '3',
    name: 'Engr. Ahmed Raza',
    designation: 'Instructor',
    department: 'electronics',
    photo: 'https://picsum.photos/seed/faculty3/400/400',
    bio: 'Specialized in embedded systems and microcontroller programming.',
    expertise: ['Embedded Systems', 'PCB Design', 'Arduino/Raspberry Pi'],
    email: 'ahmed.raza@rpi.edu.pk',
    qualification: 'B.Sc Electronics Engineering'
  },
  {
    id: '4',
    name: 'Mr. Hassan Malik',
    designation: 'Senior Lecturer',
    department: 'cit',
    photo: 'https://picsum.photos/seed/faculty4/400/400',
    bio: 'Full-stack developer and educator with industry experience in web technologies.',
    expertise: ['Web Development', 'Database Management', 'Networking'],
    email: 'hassan.malik@rpi.edu.pk',
    qualification: 'M.Sc Computer Science'
  },
  {
    id: '5',
    name: 'Engr. Sarah Khan',
    designation: 'Instructor',
    department: 'electrical',
    photo: 'https://picsum.photos/seed/faculty5/400/400',
    bio: 'Passionate about renewable energy and sustainable electrical systems.',
    expertise: ['Solar Power', 'Energy Management', 'Electrical Machines'],
    qualification: 'B.Sc Electrical Engineering'
  },
  {
    id: '6',
    name: 'Engr. Bilal Ahmed',
    designation: 'Workshop Supervisor',
    department: 'civil',
    photo: 'https://picsum.photos/seed/faculty6/400/400',
    bio: 'Hands-on expert in surveying and construction site management.',
    expertise: ['Land Surveying', 'Quantity Estimation', 'Site Management'],
    qualification: 'DAE Civil Technology, B.Tech'
  },
  {
    id: '7',
    name: 'Mr. Usman Tariq',
    designation: 'Lab Instructor',
    department: 'electronics',
    photo: 'https://picsum.photos/seed/faculty7/400/400',
    bio: 'Specializes in digital electronics and IoT device development.',
    expertise: ['Digital Circuits', 'IoT', 'Sensor Integration'],
    qualification: 'B.Sc Electronics Engineering'
  },
  {
    id: '8',
    name: 'Ms. Ayesha Siddiqui',
    designation: 'Instructor',
    department: 'cit',
    photo: 'https://picsum.photos/seed/faculty8/400/400',
    bio: 'Expert in cybersecurity and network administration.',
    expertise: ['Network Security', 'System Administration', 'Ethical Hacking'],
    qualification: 'M.Sc Information Technology'
  },
];
