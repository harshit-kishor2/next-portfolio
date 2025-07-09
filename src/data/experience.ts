export interface IExperience {
  id: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experience = [
  {
    "id": 2,
    "position": "Software Engineer L2",
    "company": "Quokka Labs LLP",
    "duration": "Aug 2023 - Present",
    "location": "Noida (UP), India",
    "description": [
      "Developed scalable mobile applications using React Native and Flutter.",
      "Designed architecture for social media apps and crypto apps to ensure seamless user experience.",
      "Conducted comprehensive testing and debugging of mobile applications, ensuring high quality and stability.",
      "Conducted code reviews and mentored junior developers on coding standards."
    ],
    "technologies": ["React Native", "React.js", "Firebase", "AWS", "GraphQL", "Flutter"]
  },
  {
    "id": 1,
    "position": "Software Engineer",
    "company": "Singsys Software Services Pvt Ltd",
    "duration": "Sept 2020 - Aug 2023",
    "location": "Lucknow (UP), India",
    "description": [
      "Architected and developed distributed mobile applications using React Native and scalable web applications using React.js.",
      "Automated software delivery through integrated CI/CD pipelines, ensuring faster and more reliable releases.",
      "Created unit, integration, and E2E tests for robust QA.",
      "Maintained documentation for development and handovers",
    ],
    "technologies": ["React Native", "React.js", "Node.js", "AWS", "GraphQL", "Flutter", "Stripe", "Firebase"]
  },
];

export const EXPERIENCE_DATA: IExperience[] = experience;
