const projects = [
  {
    id: 1,
    title: "LocalChefBazaar",
    subtitle: "Full-Stack MERN Marketplace",
    short: "A role-based online platform connecting home cooks with customers. Features JWT auth, Stripe payments, real-time order tracking, and three dashboards (User, Chef, Admin).",
    image: "https://placehold.co/700x400/6366F1/ffffff?text=LocalChefBazaar",
    chips: ["React","Node.js","Express","MongoDB","Firebase","JWT","Stripe"],
    live: "#",
    github: "https://github.com/Pinak57",
    description: `LocalChefBazaar is a modern full-stack marketplace built with the MERN stack that connects home cooks with customers seeking fresh, homemade food. The platform features three completely separate dashboards — one each for Users, Chefs, and Admins — with role-based access control enforced both on the frontend and backend via JWT tokens stored in httpOnly cookies.

Customers can browse daily menus, check chef availability, place orders, make secure Stripe payments, and track order status in real time. Chefs can list meals, manage menus, accept or reject orders, and view earnings. Admins have full platform oversight including user management, chef application approvals, and a Recharts analytics dashboard.`,
    stack: [
      "React.js — Component-based SPA with React Router v6",
      "Node.js + Express.js — RESTful API backend",
      "MongoDB + Mongoose — Database with relational-style schemas",
      "Firebase Auth — Email/password authentication",
      "JWT (httpOnly cookies) — Secure session management",
      "Stripe — Payment processing integration",
      "Tailwind CSS — Utility-first responsive styling",
      "Recharts — Admin analytics dashboard charts",
      "React Hook Form — All form validation",
      "Axios Interceptors — Centralized API request handling",
      "Framer Motion — Page & component animations",
      "Vercel + Railway — Frontend & backend deployment"
    ],
    challenges: [
      "Implementing three-tier role-based access control with JWT middleware — required careful token verification on every protected route.",
      "Keeping order status in sync between Chef and User dashboards in real time without a dedicated WebSocket server.",
      "Handling Stripe payment flow — redirecting to payment page only when order is accepted and payment is pending, then updating MongoDB after success.",
      "Designing a Firestore/MongoDB hybrid data model to handle users, chefs, meals, orders, reviews and favorites cleanly.",
      "Preventing fraud users from placing orders or creating meals at the API level, not just the UI level.",
      "Making the entire platform pixel-perfect on mobile, tablet and desktop simultaneously."
    ],
    improvements: [
      "Add real-time chat between users and chefs using Socket.io.",
      "Implement push notifications for order status updates.",
      "Build a React Native mobile app version.",
      "Add a recommendation engine based on user order history.",
      "Implement multi-language support (Bengali + English).",
      "Add subscription plans for chefs with premium features."
    ]
  },
  {
    id: 2,
    title: "Personal Portfolio",
    subtitle: "React + Framer Motion Showcase",
    short: "A fully responsive personal portfolio built with React, Framer Motion animations, React Router, and React Type Animation. Features smooth scroll reveals and a dark premium design.",
    image: "https://placehold.co/700x400/22D3EE/0A0F1E?text=Portfolio+Website",
    chips: ["React","Framer Motion","React Router","CSS3"],
    live: "#",
    github: "https://github.com/Pinak57",
    description: `A modern, fully responsive personal portfolio website built from scratch with React. Every section has scroll-triggered reveal animations powered by Framer Motion and react-intersection-observer. Features include a typewriter hero, animated skill bars, project detail pages via React Router, and a contact form.

The project demonstrates mastery of React component architecture, CSS custom properties for theming, responsive layouts with CSS Grid and Flexbox, and smooth UX through thoughtful animation.`,
    stack: [
      "React.js — SPA with component-based architecture",
      "Framer Motion — Scroll-triggered animations",
      "React Router v6 — Client-side routing + project detail pages",
      "React Type Animation — Typewriter effect",
      "React Icons — Scalable icon library",
      "React Scroll — Smooth section navigation",
      "CSS3 Custom Properties — Theming & design tokens",
      "Netlify — Static site deployment"
    ],
    challenges: [
      "Creating smooth scroll-triggered animations without layout shift or janky repaints.",
      "Building the typewriter effect with proper loop and backspace timing.",
      "Animating skill bars only when they enter the viewport using IntersectionObserver.",
      "Making the design look polished on every screen size from 320px to 4K."
    ],
    improvements: [
      "Add a dark/light theme toggle with localStorage persistence.",
      "Connect the contact form to EmailJS for real email delivery.",
      "Add a blog section using a headless CMS like Contentful.",
      "Add page transition animations between routes."
    ]
  },
  {
    id: 3,
    title: "Task Manager App",
    subtitle: "React + Firebase Kanban Board",
    short: "A kanban-style task management app with drag-and-drop, priority levels, due dates, and Firebase real-time sync. Tasks stay updated across all devices instantly.",
    image: "https://placehold.co/700x400/A855F7/ffffff?text=Task+Manager",
    chips: ["React","Firebase","Tailwind","dnd-kit"],
    live: "#",
    github: "https://github.com/Pinak57",
    description: `A kanban-style productivity app built with React and Firebase Firestore. Users can create boards, add tasks with priority levels and due dates, and drag tasks between columns (To Do, In Progress, Done). All changes sync in real time across tabs and devices via Firestore listeners.

Authentication is handled by Firebase Auth with Google sign-in. The UI uses Tailwind CSS for a clean minimal design, and @dnd-kit for the smooth, accessible drag-and-drop experience.`,
    stack: [
      "React.js — Frontend SPA",
      "Firebase Firestore — Real-time database",
      "Firebase Authentication — Google OAuth sign-in",
      "Tailwind CSS — Utility-first styling",
      "@dnd-kit — Accessible drag-and-drop",
      "Vercel — Deployment"
    ],
    challenges: [
      "Optimistically updating the UI on drag-and-drop while keeping Firestore in sync.",
      "Managing real-time Firestore listeners efficiently to avoid unnecessary re-renders.",
      "Handling task order indexes when reordering within the same column.",
      "Designing the Firestore data model so queries are fast and scalable."
    ],
    improvements: [
      "Add team collaboration so multiple users can share a board.",
      "Add subtasks and task comments with threaded discussions.",
      "Build a weekly productivity analytics dashboard.",
      "Add Pomodoro timer integration per task card.",
      "Add deadline push notifications."
    ]
  }
];

export default projects;
