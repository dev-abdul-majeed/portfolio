import {
  RiReactjsLine,
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiBootstrapLine,
  RiLayoutGridLine,
  RiStackLine,
  RiTailwindCssLine,
  RiCodeSSlashLine,
  RiNodejsLine,
  RiDatabase2Line,
  RiDatabaseLine,
  RiShareLine,
  RiTestTubeLine,
  RiFlaskLine,
  RiSmartphoneLine,
  RiGithubLine,
  RiCloudLine,
  RiRocketLine,
  RiUploadCloud2Line,
  RiArticleLine,
  RiPaletteLine,
  RiQuillPenLine,
  RiVideoLine,
  RiImageEditLine,
} from "@remixicon/react";

export const skillsData = [
  {
    id: 1,
    category: "Front End",
    skills: [
      { name: "React.js", icon: RiReactjsLine },
      { name: "HTML", icon: RiHtml5Line },
      { name: "CSS", icon: RiCss3Line },
      { name: "JS", icon: RiJavascriptLine },
      { name: "Bootstrap", icon: RiBootstrapLine },
      { name: "Material-UI", icon: RiLayoutGridLine },
      { name: "Chakra-UI", icon: RiStackLine },
      { name: "Tailwind CSS", icon: RiTailwindCssLine },
    ],
  },
  {
    id: 2,
    category: "Back End",
    skills: [
      { name: "Ruby on Rails", icon: RiCodeSSlashLine },
      { name: "Node.js (Express.js)", icon: RiNodejsLine },
    ],
  },
  {
    id: 3,
    category: "Databases",
    skills: [
      { name: "SQL", icon: RiDatabase2Line },
      { name: "MongoDB", icon: RiDatabaseLine },
      { name: "Graph-DB (Neo4J)", icon: RiShareLine },
    ],
  },
  {
    id: 4,
    category: "Testing",
    skills: [
      {
        name: "Rails Testing (Selenium & Capybara)",
        icon: RiTestTubeLine,
      },
      { name: "JS Testing (Jest)", icon: RiFlaskLine },
    ],
  },
  {
    id: 5,
    category: "Mobile App Development",
    skills: [{ name: "React Native", icon: RiSmartphoneLine }],
  },
  {
    id: 6,
    category: "Version Control",
    skills: [{ name: "Git / GitHub", icon: RiGithubLine }],
  },
  {
    id: 7,
    category: "Deployment",
    skills: [
      { name: "Heroku", icon: RiCloudLine },
      { name: "Fly.io", icon: RiRocketLine },
      { name: "Vercel", icon: RiUploadCloud2Line },
    ],
  },
  {
    id: 8,
    category: "Others",
    skills: [
      { name: "Technical Writing", icon: RiArticleLine },
      { name: "Designing", icon: RiPaletteLine },
      { name: "Content Writing", icon: RiQuillPenLine },
      { name: "Video Editing", icon: RiVideoLine },
      { name: "Photo Editing", icon: RiImageEditLine },
    ],
  },
];
