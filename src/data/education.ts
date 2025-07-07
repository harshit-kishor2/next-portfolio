export interface IEducation {
  id: number;
  degree: string;
  field: string;
  institution: string;
  duration: string;
  startYear: number;
  endYear: number;
  location: string;
  grade: string;
}

const education: IEducation[] = [
  {
    "id": 1,
    "degree": "Bachelor of Computer Applications",
    "field": "Computer Applications",
    "institution": "Dr. Ram Manohar Lohia Awadh University, Ayodhya",
    "duration": "2013 - 2016",
    "startYear": 2013,
    "endYear": 2016,
    "location": "Barabanki (UP), India",
    "grade": "71.33%",
  },
  {
    "id": 2,
    "degree": "Master of Computer Applications",
    "field": "Computer Applications",
    "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
    "duration": "2017 - 2020",
    "startYear": 2017,
    "endYear": 2020,
    "location": "Lucknow (UP), India",
    "grade": "8.25 CGPA"
  }
];

export const EDUCATION_DATA: IEducation[] = education;
