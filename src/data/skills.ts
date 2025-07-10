export interface ISkillCategory {
  category: string;
  message: string;
  icon?: string;
  items: {
    name: string;
    level: number;
    icon: string;
    tooltip: string;
  }[];
}

const skills = [
  {
    "category": "Languages & Frameworks",
    "message": "Languages are the heart of development ❤️",
    "items": [
      {"name": "React Native", "level": 95, "icon": "https://cdn.simpleicons.org/react", "tooltip": "Build cross-platform mobile apps with native performance."},
      {"name": "Expo", "level": 90, "icon": "https://cdn.simpleicons.org/expo", "tooltip": "A framework and platform for universal React apps."},
      {"name": "Next.js", "level": 90, "icon": "https://cdn.simpleicons.org/nextdotjs", "tooltip": "Build dynamic and modern web UIs."},
      {"name": "Flutter", "level": 80, "icon": "https://cdn.simpleicons.org/flutter", "tooltip": "UI toolkit to build beautiful, natively compiled apps."},
      {"name": "TypeScript", "level": 85, "icon": "https://cdn.simpleicons.org/typescript", "tooltip": "JavaScript with static types for better tooling and readability."},
      {"name": "JavaScript", "level": 95, "icon": "https://cdn.simpleicons.org/javascript", "tooltip": "The programming language of the web."},
      {"name": "Dart", "level": 80, "icon": "https://cdn.simpleicons.org/dart", "tooltip": "Google’s client-optimized language for fast apps."},
      {"name": "Node.js", "level": 85, "icon": "https://cdn.simpleicons.org/nodedotjs", "tooltip": "JavaScript runtime for scalable server-side apps."},
      {"name": "Express.js", "level": 80, "icon": "https://cdn.simpleicons.org/express", "tooltip": "Minimal and flexible Node.js web application framework."},
      {"name": "Redux", "level": 90, "icon": "https://cdn.simpleicons.org/redux", "tooltip": "Predictable state container for JavaScript apps."},
      {"name": "React Query", "level": 85, "icon": "https://cdn.simpleicons.org/reactquery", "tooltip": "Powerful data-fetching library for React."},
      {"name": "Apollo Client", "level": 80, "icon": "https://cdn.simpleicons.org/apollographql", "tooltip": "Manage GraphQL data in your UI with ease."}
    ]
  },
  {
    "category": "Databases & APIs",
    "message": "I speak database fluently 📊",
    "items": [
      {"name": "Firebase", "level": 85, "icon": "https://cdn.simpleicons.org/firebase", "tooltip": "Realtime database, authentication, and hosting by Google."},
      {"name": "Supabase", "level": 80, "icon": "https://cdn.simpleicons.org/supabase", "tooltip": "Open-source Firebase alternative with SQL support."},
      {"name": "PostgreSQL", "level": 85, "icon": "https://cdn.simpleicons.org/postgresql", "tooltip": "Advanced open-source relational database."},
      {"name": "MySQL", "level": 80, "icon": "https://cdn.simpleicons.org/mysql", "tooltip": "Popular open-source relational database."},
      {"name": "SQLite", "level": 75, "icon": "https://cdn.simpleicons.org/sqlite", "tooltip": "Lightweight, serverless, self-contained SQL database engine."},
      {"name": "Prisma", "level": 80, "icon": "https://cdn.simpleicons.org/prisma", "tooltip": "Next-gen ORM for Node.js and TypeScript."},
      {"name": "GraphQL", "level": 80, "icon": "https://cdn.simpleicons.org/graphql", "tooltip": "A query language for APIs and runtime for fulfilling queries."},
      {"name": "MongoDB", "level": 75, "icon": "https://cdn.simpleicons.org/mongodb", "tooltip": "NoSQL database for flexible, JSON-like documents."},
      {"name": "realm", "level": 70, "icon": "https://cdn.simpleicons.org/graphql", "tooltip": "Mobile-first object database by MongoDB."},
      {"name": "REST APIs", "level": 90, "icon": "https://cdn.simpleicons.org/fastapi", "tooltip": "Standard API pattern over HTTP using endpoints and resources."}
    ]
  },
  {
    "category": "Tools & Platforms",
    "message": "Mastering tools for seamless development 🛠️",
    "items": [
      {"name": "Git", "level": 95, "icon": "https://cdn.simpleicons.org/git", "tooltip": "Distributed version control system for tracking changes."},
      {"name": "Socket.io", "level": 75, "icon": "https://cdn.simpleicons.org/socketdotio", "tooltip": "Real-time bidirectional communication with web clients."},
      {"name": "Twilio", "level": 75, "icon": "https://cdn.simpleicons.org/twilio", "tooltip": "Cloud communications platform (SMS, voice, video)."},
      {"name": "Stripe", "level": 85, "icon": "https://cdn.simpleicons.org/stripe", "tooltip": "Modern online payments infrastructure."},
      {"name": "Jira", "level": 85, "icon": "https://cdn.simpleicons.org/jira", "tooltip": "Agile project management tool by Atlassian."},
      {"name": "AWS (Lambda, S3, SNS, Cognito)", "level": 80, "icon": "", "tooltip": "Cloud infrastructure with serverless compute, storage, and auth."},
      {"name": "Razorpay", "level": 80, "icon": "https://cdn.simpleicons.org/razorpay", "tooltip": "India-focused payment gateway and fintech solution."},
      {"name": "Klarna", "level": 70, "icon": "https://cdn.simpleicons.org/klarna", "tooltip": "Buy Now, Pay Later solutions provider."},
      {"name": "Branch.io", "level": 70, "icon": "https://cdn.simpleicons.org/brandfetch", "tooltip": "Deep linking and mobile attribution tool."},
      {"name": "Slack", "level": 90, "icon": "https://cdn.simpleicons.org/slack", "tooltip": "Collaboration and team communication platform."},
      {"name": "Pusher Client", "level": 70, "icon": "https://cdn.simpleicons.org/pusher", "tooltip": "Hosted APIs for building real-time features."},
      {"name": "Microsoft Teams", "level": 80, "icon": "https://cdn.simpleicons.org/microsoftteams", "tooltip": "Collaboration and video conferencing app from Microsoft."},
      {"name": "Postman", "level": 90, "icon": "https://cdn.simpleicons.org/postman", "tooltip": "API testing and development tool."}
    ]
  },
  {
    "category": "Blockchain",
    "message": "Building the future with decentralized tech ⛓️",
    "items": [
      {"name": "Algorand", "level": 75, "icon": "https://cdn.simpleicons.org/algorand", "tooltip": "Scalable and secure blockchain network."},
      {"name": "WalletConnect", "level": 70, "icon": "https://cdn.simpleicons.org/walletconnect", "tooltip": "Connect web3 apps to mobile wallets with QR code scanning."},
      {"name": "Smart Contracts", "level": 65, "icon": "https://cdn.simpleicons.org/walletconnect", "tooltip": "Self-executing contracts with logic directly on blockchain."},
      {"name": "crypto", "level": 70, "icon": "https://cdn.simpleicons.org/cryptpad", "tooltip": "Working with cryptographic tools and tokens."},
      {"name": "Web3.js", "level": 65, "icon": "https://cdn.simpleicons.org/web3dotjs", "tooltip": "JavaScript library for interacting with Ethereum blockchain."}
    ]
  },
  {
    "category": "Skills",
    "message": "Versatile skills for end-to-end solutions 💻",
    "items": [
      {"name": "Front-End Development", "level": 95, "icon": "", "tooltip": "Crafting interactive user interfaces with modern web tech."},
      {"name": "Back-End Development", "level": 85, "icon": "", "tooltip": "Building scalable server-side logic and APIs."},
      {"name": "Unit Testing", "level": 80, "icon": "", "tooltip": "Writing tests to ensure individual components work correctly."},
      {"name": "Microservices Architecture", "level": 85, "icon": "", "tooltip": "Designing distributed systems with loosely coupled services."},
      {"name": "CI/CD Pipelines", "level": 85, "icon": "", "tooltip": "Automating integration and deployment workflows."},
      {"name": "Blockchain Development", "level": 75, "icon": "", "tooltip": "Creating apps and smart contracts on decentralized networks."}
    ]
  }
];

export const SKILLS_DATA: ISkillCategory[] = skills;
