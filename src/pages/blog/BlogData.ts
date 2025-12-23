import { BlogPost, BlogCategory, BlogAuthor, BlogComment } from './BlogTypes';

export const BLOG_AUTHORS: BlogAuthor[] = [
  {
    id: 'author-1',
    name: 'Dr. Hassan Ahmed',
    avatar: 'https://picsum.photos/seed/author1/100/100',
    bio: 'Dr. Hassan Ahmed is a Senior Professor at RPI with over 15 years of experience in Electronics and Robotics. He leads the Robotics Club and has mentored numerous award-winning student teams.',
    designation: 'Senior Professor',
    department: 'Electronics Technology',
    email: 'hassan.ahmed@rpi.edu.pk',
    linkedin: 'https://linkedin.com/in/hassanahmed',
    twitter: 'https://twitter.com/hassanahmed',
  },
  {
    id: 'author-2',
    name: 'Admission Office',
    avatar: 'https://picsum.photos/seed/author2/100/100',
    bio: 'Official updates and announcements from the RPI Admission Office. Contact us for admission-related queries and guidance.',
    designation: 'Administrative Staff',
    department: 'Administration',
    email: 'admissions@rpi.edu.pk',
  },
  {
    id: 'author-3',
    name: 'Engr. Fatima Noor',
    avatar: 'https://picsum.photos/seed/author3/100/100',
    bio: 'Engr. Fatima Noor is an Assistant Professor in Civil Technology with expertise in structural engineering and sustainable construction practices.',
    designation: 'Assistant Professor',
    department: 'Civil Technology',
    email: 'fatima.noor@rpi.edu.pk',
    linkedin: 'https://linkedin.com/in/fatimanoor',
  },
  {
    id: 'author-4',
    name: 'IT Department',
    avatar: 'https://picsum.photos/seed/author4/100/100',
    bio: 'The IT Department at RPI manages all technology infrastructure and provides updates on new facilities and digital initiatives.',
    designation: 'Department Staff',
    department: 'Computer Information Technology',
    email: 'it@rpi.edu.pk',
  },
];

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

## The Journey to Victory

The team spent months preparing for this competition, working tirelessly in the Electronics Lab under the guidance of Dr. Hassan Ahmed. Their dedication and hard work paid off when they were announced as the winners.

### Key Achievements:
- First place in the autonomous navigation category
- Best innovation award for sensor integration
- Fastest completion time in the obstacle course

Principal RPI congratulated the team and announced special scholarships for the winners. This achievement reflects the quality of practical training and mentorship provided by our dedicated faculty members.

## Looking Ahead

The team is now preparing for the International Robotics Olympiad to be held in Singapore next year. We wish them the best of luck!`,
    coverImage: 'https://picsum.photos/seed/blog1/1200/600',
    author: 'Dr. Hassan Ahmed',
    authorId: 'author-1',
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

## Important Dates

| Event | Date |
|-------|------|
| Last Date for Application Submission | April 30, 2024 |
| Entry Test | May 15, 2024 |
| Merit List Display | May 25, 2024 |
| Classes Commence | June 5, 2024 |

## Eligibility Criteria

Candidates must have passed Matriculation (Science Group) with minimum 50% marks. For CIT, Arts group students with Mathematics are also eligible.

### Required Documents:
1. Matriculation Certificate and Mark Sheet
2. Character Certificate from last attended institution
3. Domicile Certificate
4. CNIC/B-Form copy
5. Recent passport-size photographs (4 copies)

Prospectus and application forms can be downloaded from our website or obtained from the admission office. For queries, contact: 051-1234567`,
    coverImage: 'https://picsum.photos/seed/blog2/1200/600',
    author: 'Admission Office',
    authorId: 'author-2',
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

## Key Learning Areas

### Dam Construction
- Earth-fill dam construction techniques
- Material selection and testing procedures
- Foundation engineering principles

### Power Generation
- Turbine systems and their operations
- Powerhouse design considerations
- Grid synchronization processes

### Safety & Monitoring
- Structural health monitoring systems
- Seismic sensors and early warning systems
- Emergency protocols

Senior Engineer Abdul Rehman from WAPDA gave a detailed presentation and guided students through various sections of the dam complex. Students appreciated the opportunity to see theoretical concepts come to life at such a massive scale.

Such industrial visits are an integral part of RPI's commitment to providing practical, industry-relevant education to future engineers.`,
    coverImage: 'https://picsum.photos/seed/blog3/1200/600',
    author: 'Engr. Fatima Noor',
    authorId: 'author-3',
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

## New Facility Features

The new facility includes:
- **50 high-performance workstations** with Intel i7 processors
- **Latest software development IDEs** (Visual Studio, Android Studio, PyCharm)
- **Networking equipment** for hands-on practice
- **Smart board** for interactive learning
- **High-speed fiber optic** internet connectivity

### Technical Specifications

| Component | Specification |
|-----------|--------------|
| Processor | Intel Core i7-12700 |
| RAM | 16GB DDR5 |
| Storage | 512GB NVMe SSD |
| Graphics | NVIDIA RTX 3060 |
| Display | 24" FHD IPS Monitor |

The lab was inaugurated by Principal RPI in the presence of faculty members and students. Speaking at the ceremony, the Principal emphasized RPI's commitment to providing world-class facilities that prepare students for modern industry demands.

CIT students expressed excitement about the new facility, which will enable them to work on advanced projects in web development, mobile app development, and network administration.`,
    coverImage: 'https://picsum.photos/seed/blog4/1200/600',
    author: 'IT Department',
    authorId: 'author-4',
    authorAvatar: 'https://picsum.photos/seed/author4/100/100',
    date: '2024-02-28',
    category: 'announcements',
    tags: ['Facilities', 'Computer Lab', 'Technology'],
    readTime: '3 min read'
  },
];

export const BLOG_COMMENTS: BlogComment[] = [
  {
    id: 'comment-1',
    postId: '1',
    name: 'Ali Hassan',
    email: 'ali.hassan@email.com',
    message: 'Congratulations to the team! This is a proud moment for RPI. The dedication of our students is truly inspiring.',
    date: '2024-03-16',
    isApproved: true,
  },
  {
    id: 'comment-2',
    postId: '1',
    name: 'Sarah Khan',
    email: 'sarah.khan@email.com',
    message: 'Amazing achievement! I graduated from RPI in 2020 and seeing such accomplishments makes me proud of my alma mater.',
    date: '2024-03-17',
    isApproved: true,
  },
  {
    id: 'comment-3',
    postId: '2',
    name: 'Muhammad Ahmed',
    email: 'muhammad.ahmed@email.com',
    message: 'I am planning to apply for the Electronics Technology program. Can someone guide me about the admission process?',
    date: '2024-03-12',
    isApproved: true,
  },
];

export const getAuthorById = (authorId: string): BlogAuthor | undefined => {
  return BLOG_AUTHORS.find(author => author.id === authorId);
};

export const getPostsByAuthor = (authorId: string): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.authorId === authorId);
};

export const getCommentsByPost = (postId: string): BlogComment[] => {
  return BLOG_COMMENTS.filter(comment => comment.postId === postId && comment.isApproved);
};
