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
    "id": 1,
    "position": "Software Engineer",
    "company": "Singsys Software Services Pvt Ltd",
    "duration": "Sept 2020 - Aug 2023",
    "location": "Lucknow (UP), India",
    "description": [
      "Led development of a microservices architecture serving 1M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Architected scalable solutions using AWS and Docker"
    ],
    "technologies": ["React Native", "React.js", "Node.js", "AWS", "GraphQL", "Flutter", "Stripe", "Firebase"]
  },
  {
    "id": 2,
    "position": "Software Engineer L2",
    "company": "Quokka Labs LLP",
    "duration": "Aug 2023 - Present",
    "location": "Noida (UP), India",
    "description": [
      "Built and deployed 5+ full-stack applications from conception to production",
      "Collaborated with design team to implement pixel-perfect UI/UX",
      "Optimized application performance improving load times by 40%",
      "Integrated third-party APIs and payment systems"
    ],
    "technologies": ["React Native", "React.js", "Firebase", "AWS", "GraphQL", "Flutter"]
  }
];

export const EXPERIENCE_DATA: IExperience[] = experience;
