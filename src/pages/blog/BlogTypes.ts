export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
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
