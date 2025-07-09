export type IProjectTag = 'All' | 'Web App' | 'Mobile App' | 'Blockchain App' | 'Marketplace' | 'Ecommerce' | 'Social App';
export const PROJECT_TAGS: IProjectTag[] = ['All', 'Web App', 'Mobile App', 'Blockchain App', 'Marketplace', 'Ecommerce', 'Social App'];

export interface IProject {
  id: number;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  tags: IProjectTag[];
  role: string;
  year: number;
  video?: string;
  images?: string[];
  thumbnail?: string;
  link?: {
    appStore?: string;
    playStore?: string;
    website?: string;
  };
}

const projects: IProject[] = [
  //! Collate - Multi-service Booking App
  {
    id: 1,
    title: "Collate - Multi-service Booking App",
    description: "A service booking app for various needs such as laundry, telecommunications, electricity, air conditioning, handyman services, and more.",
    features: [
      "Unified platform for customers and merchants",
      "Quick/preferred bookings and subscriptions",
      "Role-based dashboards and analytics",
      "Push notifications and service reminders",
      "Secure payment processing"
    ],
    technologies: ["React Native", "React JS", "Redux", "Express JS", "Material UI", "GraphQL", "Firebase", "Stripe", "Twilio", "Zendesk"],
    tags: ["Mobile App", "Marketplace", "Ecommerce"],
    role: "Full-stack Developer",
    year: 2021,
    thumbnail: "https://harshit-kishor2.github.io/portfolio-assets/images/projects/collate.webp",
    images: [],
    link: {
      playStore: "https://play.google.com/store/apps/details?id=com.collateorg",
      appStore: "https://apps.apple.com/sg/app/collate/id1566995853",
      website: "https://www.collate.com.sg/",
    }
  },
  //! Jasiri Wallet - Algorand Blockchain Wallet
  {
    id: 2,
    title: "Jasiri Wallet - Algorand Blockchain Wallet",
    description: "A non-custodial Algorand wallet with offline support, token trading, and WalletConnect integration.",
    features: [
      "Access to JASIRI Protocol for tokenizing purchases",
      "Secure dApp connections via WalletConnect",
      "Offline transaction signing",
      "Support for ASA tokens and NFTs"
    ],
    technologies: ["React Native", "Pera Wallet", "Web3", "Crypto", "WalletConnect", "algosdk"],
    tags: ["Blockchain App", "Mobile App"],
    role: "Mobile & Blockchain Developer",
    year: 2024,
    thumbnail: "https://harshit-kishor2.github.io/portfolio-assets/images/projects/jasiri.webp",
    images: [],
    link: {
      playStore: "https://play.google.com/store/apps/details?id=com.jasiriwallet",
    }
  },
  // ! Singapore Watch Insider - Social Media App
  {
    "id": 3,
    "title": "SWI (Singapore Watch Insider) - Marketplace for Luxury Watches",
    "description": "A marketplace for bidding on high-end luxury watches with real-time chat and direct negotiation.",
    "features": [
      "Bid on premium luxury watches",
      "Real-time chat with sellers",
      "Negotiate and complete purchases within the app"
    ],
    "technologies": ["React Native", "Firebase", "Socket.io", "Redux", "Branch.io", "Stripe"],
    "tags": ["Marketplace", "Mobile App", "Social App", "Ecommerce"],
    "role": "Mobile Developer",
    "year": 2023,
    "thumbnail": "https://harshit-kishor2.github.io/portfolio-assets/images/projects/swi.png",
    "images": [],
    "link": {
      website: "https://www.sgwatchinsider.com/"
    }
  },
  {
    "id": 4,
    "title": "Suntec+ Eats - Food Delivery Platform",
    "description": "A multi-app food delivery system supporting merchants and customers with live tracking and flexible order fulfillment.",
    "features": [
      "Separate apps for merchants and customers",
      "Live order tracking",
      "Supports self-collection and merchant delivery",
      "Flexible order fulfillment",
      "Secure payment processing",
    ],
    "technologies": ["React Native", "Firebase", "GraphQL", "Redux", "Next.js", "Stripe", "Twillio", "Mailgun", "Google Maps API"],
    "tags": ["Mobile App", "Marketplace", "Ecommerce"],
    "role": "Full Stack Developer",
    "year": 2022,
    "thumbnail": "https://harshit-kishor2.github.io/portfolio-assets/images/projects/suntec.png",
    "images": [],
    "link": {
      website: "https://sunteccity.com.sg/"
    }
  },
  {
    "id": 5,
    "title": "StarFarm - Music Streaming Platform",
    "description": "An immutable, transparent platform empowering artists and streamers with fair distribution and high-quality streaming.",
    "features": [
      "Transparent music streaming ecosystem",
      "Web and mobile availability",
      "Full transaction transparency for artists"
    ],
    "technologies": ["React Native", "Expo", "React.js", "Firebase", "Redux", "GraphQL", "In App Purchases"],
    "tags": ["Mobile App", "Marketplace", "Social App"],
    "role": "Mobile Developer",
    "year": 2023,
    "thumbnail": "https://harshit-kishor2.github.io/portfolio-assets/images/projects/starfarm.webp",
    "images": [],
    "link": {
      "playStore": "https://play.google.com/store/apps/details?id=com.starfarm",
      "appStore": "https://apps.apple.com/in/app/starfarm-we-grow-stars/id1623552284",
      website: 'https://starfarm.com/'
    },
  },
  {
    "id": 6,
    "title": "Shivam Yoga Studio",
    "description": "An on-demand and live yoga app with e-commerce integration and a robust admin panel for class management.",
    "features": [
      "Mobile app and admin panel",
      "On-demand videos and live yoga sessions",
      "Subscription and plan-based purchases"
    ],
    "technologies": ["React Native", "Firebase", "Razorpay", "Node.js", "Redux", "Socket.io"],
    "tags": ["Mobile App", "Marketplace", "Ecommerce"],
    "role": "Full-stack Developer",
    "year": 2023,
    "thumbnail": "https://harshit-kishor2.github.io/portfolio-assets/images/projects/shivam_yoga.webp",
    "images": [],
    "link": {
      "website": "https://shivamyogastudio.com/",
      "playStore": "https://play.google.com/store/apps/details?id=com.shivamyoga",
      "appStore": "https://apps.apple.com/in/app/shivam-yoga-studio/id6462672055"
    }
  },
  {
    "id": 7,
    "title": "Jumper AI (Vonage) - Conversational Commerce Platform",
    "description": "A cross-platform commerce app enabling product sales and customer engagement through chat and social platforms.",
    "features": [
      "Built with Flutter for cross-platform support",
      "Sell products via chat and social media",
      "Automated engagement and order management"
    ],
    "technologies": ["Flutter", "Firebase", "Pusher Client"],
    "tags": ["Mobile App", "Marketplace", "Social App"],
    "role": "Flutter Developer",
    "year": 2023,
    "thumbnail": "https://harshit-kishor2.github.io/portfolio-assets/images/projects/jumper_ai.svg",
    "images": [],
    "link": {
      "playStore": "https://play.google.com/store/apps/details?id=com.vonage.jumper",
      "appStore": "https://apps.apple.com/us/app/jumper-assist/id6503607662",
      "website": "https://jumper.ai/"
    }
  },
  {
    "id": 8,
    "title": "Winelikes - Social Wine Community",
    "description": "A community-driven wine app for tasting, learning, socializing and discovering wines—from novices to sommeliers.",
    "features": [
      "Social feed to sip, share, and connect with wine lovers",
      "Palate Wizard quiz to match your taste profile",
      "Wine & food pairing recommendations",
      "Interactive wine trivia and games (Winebingo, Winedle)",
      "Event discovery and meetup coordination"
    ],
    "technologies": ["React Native", "Firebase", "Redux", "Social Auth", "REST APIs"],
    "tags": ["Mobile App", "Marketplace", "Social App"],
    "role": "Project Lead",
    "year": 2023,
    "thumbnail": "https://harshit-kishor2.github.io/portfolio-assets/images/projects/winelikes.webp",
    "images": [],
    "link": {
      "playStore": "https://play.google.com/store/apps/details?id=com.winelikes",
      "appStore": "https://apps.apple.com/us/app/winelikes/id1604508326",
      "website": "https://winelikes.com/"
    },
  },
  {
    "id": 9,
    "title": "iGym SG - 24/7 Pay-as-You-Train Gym App",
    "description": "A fully automated, 24 hour gym experience in Singapore—pay only for time used via QR-code check-in, track training & nutrition, earn rewards points.",
    "features": [
      "Hourly pay-as-you-train pricing",
      "QR-code entry & exit tracking",
      "In-app eWallet with topup & rewards",
      "Training & nutrition diary",
      "Personal trainer bios & booking",
      "Real-time gym capacity notifications"
    ],
    "technologies": ["React Native", "Firebase", "Node.js", "REST API", "Razorpay integration"],
    "tags": ["Mobile App"],
    "role": "Mobile Developer",
    "year": 2021,
    "thumbnail": "https://harshit-kishor2.github.io/portfolio-assets/images/projects/igym.webp",
    "images": [],
    "link": {
      "playStore": "https://play.google.com/store/apps/details?id=com.igymsg",
      "appStore": "https://apps.apple.com/app/igym-sg/id1453997863",
      "website": "https://igym.sg/"
    }
  },
  {
    "id": 10,
    "title": "iGym Trainer - Staff & Trainer Companion App",
    "description": "A companion app for iGym staff and trainers to manage bookings, check-in clients, manage sessions and track training history.",
    "features": [
      "Staff/trainer check-in & check-out via QR",
      "Manage client training session subscriptions",
      "View training & nutrition logs",
      "Receive fitness news & app updates",
      "Account & profile management"
    ],
    "technologies": ["React Native", "Firebase", "REST APIs", "QR-code integration"],
    "tags": ["Mobile App"],
    "role": "Mobile Developer",
    "year": 2021,
    "thumbnail": "https://harshit-kishor2.github.io/portfolio-assets/images/projects/igym.webp",
    "images": [],
    "link": {
      "playStore": "https://play.google.com/store/apps/details?id=com.igym.trainer",
      "appStore": "https://apps.apple.com/app/igym-trainer/id1473001979",
      "website": "https://igym.sg/"
    }
  },
  {
    "id": 11,
    "title": "Smart Cages - IoT Monitoring System for Animal Enclosures",
    "description": "An IoT-enabled system that allows remote monitoring of animals via live video streaming from smart cages equipped with sensors and cameras.",
    "features": [
      "Implemented scalable IoT architecture for smart cage monitoring",
      "Integrated real-time video streaming from in-cage cameras",
      "Live environment data (e.g., temperature, motion, humidity)",
      "Secure remote access and notifications for abnormalities",
      "Alarms and notifications for critical conditions"
    ],
    "technologies": ["React Native", "Socket.io", "IoT", "Raspberry Pi", "RTSP", "WebRTC", "Firebase"],
    "tags": ["Mobile App"],
    "role": "IoT & Mobile Developer",
    "year": 2023,
    "thumbnail": "",
    "images": [],
    "link": {
      "playStore": "",
      "appStore": "",
      "website": ""
    }
  },
  {
    "id": 12,
    "title": "OT Tracking - Geofencing-Based Employee & Asset Tracker",
    "description": "A real-time employee and asset tracking app with geofencing capabilities to monitor location-based attendance and automate working hours.",
    "features": [
      "Live location tracking of employees and assets",
      "Automatic geofence entry/exit detection",
      "Instant notifications to managers on geofence events",
      "Automated calculation of working hours within geofenced zones",
      "Admin dashboard for monitoring and reports"
    ],
    "technologies": ["React Native", "Firebase", "Geofencing API", "Background Location Services", "Push Notifications"],
    "tags": ["Mobile App"],
    "role": "Mobile Developer",
    "year": 2023,
    "thumbnail": "",
    "images": [],
    "link": {
      "playStore": "",
      "appStore": "",
      "website": ""
    }
  }

  // //! Add more projects here
];


export const PROJECTS_DATA: IProject[] = projects;
