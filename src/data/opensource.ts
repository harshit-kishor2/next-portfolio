export interface IOpenSource {
  title: string;
  repo: string;
  type: string;
  description: string;
  features: string[];
  technologies: string[];
  year: number;
}

export const openSource = [
  {
    id: 2,
    "title": "@harshitkishor/git-commit",
    "repo": "https://github.com/harshitkishor/git-commit",
    "type": "CLI Tool",
    "description": "Automates Git commit workflows with customizable templates and validation.",
    "features": [
      "Customizable commit message templates",
      "Automated validation and linting",
      "Improves consistency across teams"
    ],
    "technologies": ["Node.js", "Commander.js", "Shell Scripts"],
    "year": 2024
  },
  {
    id: 1,
    "title": "@harshitkishor/rn-responsive",
    "repo": "https://github.com/harshitkishor/rn-responsive",
    "type": "React Native Library",
    "description": "React Native package for building responsive, adaptive UI layouts.",
    "features": [
      "Simplifies responsive design logic",
      "Ensures consistent UI across device sizes",
      "Supports percentage- and breakpoint-based layouts"
    ],
    "technologies": ["React Native", "TypeScript"],
    "year": 2024
  }
];

export const OPENSOURCE_DATA: IOpenSource[] = openSource;
