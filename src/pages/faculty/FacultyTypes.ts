export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  photo: string;
  bio: string;
  expertise: string[];
  email?: string;
  phone?: string;
  qualification: string;
}

export interface Department {
  id: string;
  name: string;
  icon: string;
  color: string;
}
