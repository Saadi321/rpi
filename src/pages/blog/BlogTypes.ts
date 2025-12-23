export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  designation: string;
  department: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorId: string;
  authorAvatar: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface BlogCategory {
  id: string;
  label: string;
}

export interface BlogComment {
  id: string;
  postId: string;
  name: string;
  email: string;
  message: string;
  date: string;
  isApproved: boolean;
  replies?: BlogComment[];
}
