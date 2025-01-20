export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "FoodChain",
    year: 2020,
    description: "Excessive food listing portal for avoiding food wastage",
    url: "https://github.com/ameyaranadee/Hackathon-Food",
  },
  {
    title: "ASAG",
    year: 2022,
    description: "Automatic Short Answer Grading System @C-MInDS, IIT Bombay",
    url: "https://github.com/ameyaranadee/automatic-short-answer-grading",
  },
  {
    title: "Explanable Plant Species Identification",
    year: 2022,
    description: "Application to identify plant species based on leaf images using deep learning with XAI",
    url: "https://github.com/ameyaranadee/xai-vnplant200",
  },
  {
    title: "Tactical Touchline",
    year: 2023,
    description: "Central hub for all the code and resources related to the blog",
    url: "https://github.com/ameyaranadee/tactical-touchline",
  },
  {
    title: "Reflective Prompting for RAG",
    year: 2023,
    description: "Course project for CS685",
    url: "https://github.com/ameyaranadee/CS685-Project",
  },
  {
    title: "ArXiv Paper Discovery Tool",
    year: 2024,
    description: "Tinder for research papers at HackUmass 2024",
    url: "https://github.com/ameyaranadee/swipe-my-thesis",
  },
];
