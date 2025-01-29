# Code task for Couchsurfing

## Intro

For this task I have created a SPA in NextJS simulating a social media app with mocked data. I surfed pinterest for inspiration and used a project called "Collegro" as a reference for the UI. App State doesn't persist bu we can like posts and add comments to any post. When I read the instructions, my mind started to fly. I thought on doing a full functionality social app with chat and post creation with image handling... Until I remembered that I only had 3 days. That being said, I tried to use at least one of the core concepts, starting with the responsive UI with light/dark mode, Context API and NextApiRequest/Response objects. React and SASS to make the development easier and the final touch with Tailwind. Let's begin...

```

// Root folder structure
.
├── public/              // Static assets like images, fonts, etc.
├── src/                 
│   ├── app/             // Next.js app directory for routing and server components
│   │   ├── layout.tsx   // Root layout file
│   │   ├── page.tsx     // Home page (posts feed)
│   │   ├── profile/     // User profile view
│   │   │   ├── page.tsx
│   │   └── api/         // API routes (Mock backend services)
│   │       ├── posts/   // API for posts
│   │       │   ├── route.ts
│   │       ├── users/   // API for users
│   │       │   ├── route.ts
│   │       ├── users/   // API for current user "logged in"
│   │       │   ├── route.ts
│   ├── components/      // Reusable React components
│   │   ├── navigation/     // Client components for navigation on dirrerent devices
│   │   │   ├── desktop.tsx
│   │   │   ├── mobile.tsx
│   │   ├── posts/     // Components for posts
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostList.tsx
│   │   └── users/      // Conponents for user
│   │       ├── FriendList.tsx
│   ├── lib/             // Utility functions
│   │   ├── api.ts
│   ├── styles/
│   │   ├── styles.sass
│   │   ├── _colors.sass // color vaiables
│   │   ├── _mixins.sass // responsive mixins
│   ├── context/         // React Context API for app state management
│   │   ├── userContext.tsx
│   │   ├── postContext.tsx
│   ├── data/            // Mock data
│   │   ├── posts.ts
│   │   ├── users.ts
│   └── types/           // TypeScript types
│       ├── index.ts
... // and other files (config, package.json, etc)
```

### Types
Used to strongly type the data, for example **User** and **Post**. 

### JSX
- Based on Client and Server components model from NextJS. Used client components when needed (like getting pathname for navigation or the useState hook).
- Used Context API to store the app state manager. Used 2 providers, one for Users and another one for Posts. Then I was able to modify the data with interactions as liking the posts or adding comments. This logic lives in the provider but in the real work, we send this data to the server and after an ACK we reflect the changes in the UI
- Used state and props to share data across nodes

### Styling
- Used SASS (My favorite, but I have used other preprocessors) this allowed me to develop faster the UI
- USed some centralized files such as the color variables and mixins but used modularity on components to modify specific styling on pages/components

### Deployed version
- You can clone the repo and run it using the regular nextjs commands `npm|yarn run dev` or you can see the live demo: https://couch-social-hag7a1n1x-danivegamxs-projects.vercel.app

### Oportunity areas
- With more time I wish I could clean the dependencies and folders for possible comments or unnecessary logs
- Tailwind is awesome, but sometimes I applied some styling in SASS that probably was achievable through classes. Depending on what I was building
- Missing settings screen, liking comments, share posts and chat (TODOs)
- 
