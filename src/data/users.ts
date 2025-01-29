import { User } from "../types";

export const currentUser: User = {
  id: 1,
  name: "Dan Vega",
  photo: 'dan.png',
  coverPhoto: 'a3sline2024.jpeg',
  location: "Guadalajara, MX",
  bio: "Hi! I'm a Software Engineer aspirant for Couchsurfing",
  friends: [2, 3, 4, 5, 6, 7]
};

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Dan Vega",
    photo: 'dan.png',
    bio: "Hi! I'm a Software Engineer aspirant for Couchsurfing",
    friends: [2, 3, 4, 5, 6, 7]
  },
  {
    id: 2,
    name: "Carl Roberts",
    photo: 'carl.png',
    bio: "It's morphin' time!",
    friends: [1, 3]
  },
  {
    id: 3,
    name: "Simone Simons",
    photo: 'simone.png',
    bio: "Software Engineer, Guadalajara, MX",
    friends: [1, 3]
  },
  {
    id: 4,
    name: "George Harrison",
    photo: 'george.png',
    bio: "Who did you call chicken!?",
    friends: [1, 5]
  },
  {
    id: 5,
    name: "Anna Richardson",
    photo: 'anna.png',
    bio: "I'm the smart one in the family",
    friends: [1, 3]
  },
  {
    id: 6,
    name: "Peter Parker",
    photo: 'peter.png',
    bio: "I'm Iron Man. Period.",
    friends: [1, 3]
  },
  {
    id: 7,
    name: "Justine Bean",
    photo: 'justine.png',
    bio: "Beyond the Matrix.",
    friends: [1, 3]
  },
];