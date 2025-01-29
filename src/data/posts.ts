import { Post } from "../types";

export const mockPosts: Post[] = [
  {
    id: 1,
    userId: 1,
    content: "Just finished my first social media app for Couchsurfing! 🚀",
    timestamp: "2025-01-28T14:00:00Z",
    images: [],
    likes: 5,
    comments: [
      { userId: 4, text: "Best of luck Dan!", timestamp: "2025-01-28T14:00:00Z", likes: 2 },
      { userId: 2, text: "Mine is better 😉", timestamp: "2025-01-28T14:00:00Z", likes: 1 },
    ],
    shared: 2
  },
  {
    id: 2,
    userId: 2,
    content: "Had a great day at the park!",
    timestamp: "2025-01-27T14:00:00Z",
    images: [],
    likes: 12,
    comments: [
      { userId: 4, text: "GPI", timestamp: "2025-01-28T14:00:00Z", likes: 2 },
    ],
    shared: 2
  },
  {
    id: 3,
    userId: 3,
    content: "In love with this city!",
    timestamp: "2025-01-27T14:00:00Z",
    images: ['venezia1.jpg', 'venezia2.jpg'],
    likes: 34,
    comments: [
      { userId: 2, text: "Looks awesome!", timestamp: "2025-01-28T14:00:00Z", likes: 1 },
      { userId: 5, text: "Wish I was there!", timestamp: "2025-01-28T14:00:00Z", likes: 2 }
    ],
    shared: 10
  },
  {
    id: 4,
    userId: 6,
    content: "Any available for a movie tonight?",
    timestamp: "2025-01-27T14:00:00Z",
    images: [],
    likes: 12,
    comments: [
      { userId: 4, text: "Call me at 7pm", timestamp: "2025-01-28T14:00:00Z", likes: 2 },
    ],
    shared: 2
  },
  {
    id: 5,
    userId: 5,
    content: "",
    timestamp: "2025-01-27T14:00:00Z",
    images: ['museum1.jpg'],
    likes: 8,
    comments: [
      { userId: 2, text: "Looks awesome!", timestamp: "2025-01-28T14:00:00Z", likes: 1 },
      { userId: 3, text: "Wish I was there!", timestamp: "2025-01-28T14:00:00Z", likes: 2 },
      { userId: 4, text: "Great pic!", timestamp: "2025-01-28T14:00:00Z", likes: 1 }
    ],
    shared: 10
  }
];