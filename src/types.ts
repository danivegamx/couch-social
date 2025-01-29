export interface User {
  id: number;
  photo: string;
  coverPhoto?: string;
  location?: string;
  name: string;
  bio: string;
  friends: number[];
}

export interface Post {
  id: number;
  userId: number;
  content: string;
  images: string[];
  timestamp: string;
  likes: number;
  comments: Comment[];
  shared: number;
}

export interface Comment {
  userId: number;
  text: string;
  timestamp: string;
  likes: number;
}