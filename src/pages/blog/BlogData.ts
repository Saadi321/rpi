import { BlogPost, BlogCategory } from './BlogTypes';

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: 'all', label: 'All Posts' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'events', label: 'Events' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'announcements', label: 'Announcements' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'RPI Students Win National Robotics Competition 2024',
    slug: 'rpi-students-win-robotics-competition-2024',
    excerpt: 'Our Electronics Technology students brought home the first prize in the National Robotics Challenge held in Islamabad.',
    content: `Our Electronics Technology students have made RPI proud by securing first position in the prestigious National Robotics Competition 2024. The team, consisting of final year students Muhammad Ali, Sara Khan, and Ahmed Raza, showcased their autonomous line-following robot that impressed judges with its precision and innovative design.

The competition, held at the Pakistan Engineering Council headquarters in Islamabad, featured teams from over 30 technical institutes across Pakistan. Our team's robot successfully navigated complex maze patterns and demonstrated advanced obstacle avoidance capabilities.

Principal RPI congratulated the team and announced special scholarships for the winners. This achievement reflects the quality of practical training and mentorship provided by our dedicated faculty members.`,
    coverImage: 'https://picsum.photos/seed/blog1/1200/600',
    author: 'Dr. Hassan Ahmed',
    authorAvatar: 'https://picsum.photos/seed/author1/100/100',
    date: '2024-03-15',
    category: 'achievements',
    tags: ['Robotics', 'Competition', 'Students'],
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Admissions Open for Session 2024-2027: Apply Now',
    slug: 'admissions-open-2024',
    excerpt: 'RPI announces admission dates for DAE programs. Limited seats available for Electrical, Civil, Electronics, and CIT technologies.',
    content: `Rawalpindi Polytechnic Institute is pleased to announce that admissions are now open for the academic session 2024-2027. We are accepting applications for our four flagship Diploma of Associate Engineer (DAE) programs:

- Electrical Technology
- Civil Technology
- Electronics Technology
- Computer Information Technology

**Important Dates:**
- Last Date for Application Submission: April 30, 2024
- Entry Test: May 15, 2024
- Merit List Display: May 25, 2024
- Classes Commence: June 5, 2024

**Eligibility Criteria:**
Candidates must have passed Matriculation (Science Group) with minimum 50% marks. For CIT, Arts group students with Mathematics are also eligible.

Prospectus and application forms can be downloaded from our website or obtained from the admission office. For queries, contact: 051-1234567`,
    coverImage: 'https://picsum.photos/seed/blog2/1200/600',
    author: 'Admission Office',
    authorAvatar: 'https://picsum.photos/seed/author2/100/100',
    date: '2024-03-10',
    category: 'admissions',
    tags: ['Admissions', 'DAE', 'Apply'],
    readTime: '3 min read'
  },
  {
    id: '3',
    title: 'Industrial Visit to Tarbela Dam: A Learning Experience',
    slug: 'industrial-visit-tarbela-dam',
    excerpt: 'Civil Technology students visited Pakistan\'s largest hydroelectric power station for hands-on learning about dam construction.',
    content: `Students of Civil Technology Department had an enriching educational experience during their recent visit to Tarbela Dam, one of the world's largest earth-filled dams and a marvel of Pakistani engineering.

The visit was organized as part of the practical curriculum to expose students to real-world construction and hydroelectric power generation systems. Students learned about:

- Dam construction techniques and materials
- Spillway design and flood management
- Powerhouse operations and turbine systems
- Structural health monitoring of large infrastructure

Senior Engineer Abdul Rehman from WAPDA gave a detailed presentation and guided students through various sections of the dam complex. Students appreciated the opportunity to see theoretical concepts come to life at such a massive scale.

Such industrial visits are an integral part of RPI's commitment to providing practical, industry-relevant education to future engineers.`,
    coverImage: 'https://picsum.photos/seed/blog3/1200/600',
    author: 'Engr. Fatima Noor',
    authorAvatar: 'https://picsum.photos/seed/author3/100/100',
    date: '2024-03-05',
    category: 'events',
    tags: ['Industrial Visit', 'Civil', 'Dam'],
    readTime: '4 min read'
  },
  {
    id: '4',
    title: 'New Computer Lab Inaugurated with Latest Technology',
    slug: 'new-computer-lab-inauguration',
    excerpt: 'RPI inaugurates state-of-the-art computer lab with 50 workstations equipped with latest software development tools.',
    content: `Rawalpindi Polytechnic Institute marked a significant milestone in its technological advancement with the inauguration of a brand new Computer Lab equipped with cutting-edge technology.

The new facility features:
- 50 high-performance workstations
- Latest software development IDEs (Visual Studio, Android Studio, PyCharm)
- Networking equipment for hands-on practice
- Smart board for interactive learning
- High-speed fiber optic internet connectivity

The lab was inaugurated by Principal RPI in the presence of faculty members and students. Speaking at the ceremony, the Principal emphasized RPI's commitment to providing world-class facilities that prepare students for modern industry demands.

CIT students expressed excitement about the new facility, which will enable them to work on advanced projects in web development, mobile app development, and network administration.`,
    coverImage: 'https://picsum.photos/seed/blog4/1200/600',
    author: 'IT Department',
    authorAvatar: 'https://picsum.photos/seed/author4/100/100',
    date: '2024-02-28',
    category: 'announcements',
    tags: ['Facilities', 'Computer Lab', 'Technology'],
    readTime: '3 min read'
  },
];
