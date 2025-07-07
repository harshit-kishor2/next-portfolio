export interface IPersonalInfo {
  name: string;
  role: string;
  avatar: string;
  location: string;
  email: string;
  phone: string;
  social: {
    linkedin: string;
    medium: string;
    github: string;
  };
  bio: string;
  tagline: string;
  heroDescription: string;
}
// This file contains personal information for the portfolio
// It includes name, role, contact details, social links, and a brief bio
const personalInfo = {
  "name": "Harshit Kishor",
  "role": "Mobile App Developer",
  "avatar": "https://avatars.githubusercontent.com/u/69955706?v=4",
  "location": "Noida, India",
  "email": "harshitkishor2@gmail.com",
  "phone": "+91 9621162566",
  "social": {
    "linkedin": "https://www.linkedin.com/in/harshitkishor2/",
    "medium": "https://medium.com/@harshitkishor2",
    "github": "https://github.com/harshit-kishor2"
  },
  "bio": "Skilled Mobile App Developer with over 5 years of experience building high-performance, scalable applications using React Native and cross-platform technologies. Passionate about delivering seamless user experiences and clean, maintainable code across both startups and enterprise projects.",
  "tagline": "Crafting scalable mobile solutions with performance and precision",
  "heroDescription": "I design and build responsive, cross-platform mobile apps that deliver real impact. From idea to execution, I help teams turn vision into polished digital products using modern tools and best practices."
};


export const PERSONALINFO_DATA: IPersonalInfo = personalInfo;
