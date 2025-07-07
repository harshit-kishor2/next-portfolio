export type IProjectTag = 'All' | 'Web App' | 'Mobile App' | 'Blockchain App' | 'Marketplace' | 'Ecommerce';
export const PROJECT_TAGS: IProjectTag[] = ['All', 'Web App', 'Mobile App', 'Blockchain App', 'Marketplace', 'Ecommerce'];

export interface IProject {
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
    title: "Collate - Multi-service Booking App",
    description: "A service booking app for various needs such as laundry, telecommunications, air conditioning, handyman services, and more.",
    features: [
      "Unified platform for customers and merchants",
      "Quick/preferred bookings and subscriptions",
      "Role-based dashboards and analytics",
      "Push notifications and service reminders"
    ],
    technologies: ["React Native", "Firebase", "Node.js", "Redux"],
    tags: ["Mobile App", "Marketplace"],
    role: "Full-stack Developer",
    year: 2024,
    thumbnail: "https://yourcdn.com/images/collate-thumb.png",
    images: [
      "https://yourcdn.com/images/collate-1.png",
      "https://yourcdn.com/images/collate-2.png"
    ],
    link: {
      playStore: "https://play.google.com/store/apps/details?id=com.collate",
      website: "https://collateapp.com",
    }
  },
  //! Jasiri Wallet - Algorand Blockchain Wallet
  {
    title: "Jasiri Wallet - Algorand Blockchain Wallet",
    description: "A non-custodial Algorand wallet with offline support, token trading, and WalletConnect integration.",
    features: [
      "Access to JASIRI Protocol for tokenizing purchases",
      "Secure dApp connections via WalletConnect",
      "Offline transaction signing",
      "Support for ASA tokens and NFTs"
    ],
    technologies: ["Flutter", "Algorand", "WalletConnect", "algosdk"],
    tags: ["Blockchain App", "Mobile App"],
    role: "Mobile & Blockchain Developer",
    year: 2023,
    thumbnail: "https://yourcdn.com/images/jasiri-thumb.png",
    images: [
      "https://yourcdn.com/images/jasiri-1.png",
      "https://yourcdn.com/images/jasiri-2.png"
    ],
    link: {
      playStore: "https://play.google.com/store/apps/details?id=com.jasiriwallet",
      website: "https://jasiriwallet.com",
    }
  }
  // //! Add more projects here
];


export const PROJECTS_DATA: IProject[] = projects;
