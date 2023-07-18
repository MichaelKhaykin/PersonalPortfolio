import {
  backend,
  berkeleytimelogo,
  carrent,
  citadellogo,
  close,
  cpluspluslogo,
  creator,
  csharplogo,
  css,
  docker,
  git,
  github,
  gmrlogo,
  html,
  javalogo,
  jobit,
  jpllogo,
  logo,
  menu,
  mobile,
  mongodb,
  nodejs,
  pythonlogo,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  typescript,
  vexusopenlogo,
  vexworldslogo,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "C#",
    icon: csharplogo,
  },
  {
    name: "Python",
    icon: pythonlogo,
  },
  {
    name: "C++",
    icon: cpluspluslogo,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: javalogo,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Citadel",
    icon: citadellogo,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Developing brand new tool using React, Python, Redis, PostgresDB,and MSSQLfor the global fixed income team.",
      "Saving traders time and money by creating a service that allows full communication between internal systems and banks."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Berkeley Time",
    icon: berkeleytimelogo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Modernized and optimized the backend infrastructure for BerkeleyTime, an internal project at UC Berkeley used by over 40,000 students annually to plan their coursework and schedules.",
      "Facilitate transition to modern tools and technologies such as Graph QL, MongoDB, Node, and Typescript."
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Jet Propulsion Laboratory",
    icon: jpllogo,
    iconBg: "#383E56",
    date: "June 2022 - Aug 2022",
    points: [
      "Developed communication systems for High Altitude Balloons to communicate sensor data to groundstations via satellite.",
      "Developed full-stack app using React, Postgre SQL and Docker to livestream video footage for constant monitoring."
    ],
  },
  {
    title: "Senior Programming Instructor",
    company_name: "Great Minds Robotics",
    icon: gmrlogo,
    iconBg: "#383E56",
    date: "May 2020 - June 2022",
    points: [
      "Co-lead Immersive Learning Courses in fields of Computer Architecture and Computer Vision.",
      "Maintained company GitHub curriculums: Data Structures, Cryptography, Computer Vision and Neural Networks."
    ],
  },
  {
    title: "Junior Instructor",
    company_name: "Great Minds Robotics",
    icon: gmrlogo,
    iconBg: "#383E56",
    date: "May 2018 - May 2020",
    points: [
      "Responsible for directly teaching students fundamentals of OOP, primarily in C# and C++. Tracked student progress, frequently established connections with struggling students and identifying root causes of problems.",
      "Observed other instructors and lecturers, gathering valuable techniques to implement into future lectures and courses."
    ],
  },
  {
    title: "Lead Driver & Programmer",
    company_name: "VEX Robotics World Championship",
    icon: vexworldslogo,
    iconBg: "#383E56",
    date: "2018-2019",
    points: [
      "1st Place Division Teamwork",
      "2nd Place Overall Robot Skills",
      "Think Award (awarded to 4/500 teams)"
    ],
  },
  {
    title: "Lead Driver & Programmer",
    company_name: "US Open VEX Championship",
    icon: vexusopenlogo,
    iconBg: "#383E56",
    date: "2018-2019",
    points: [
      "1st Place Robot Skills",
      "1st Place Teamwork Champion",
      "Excellence Award (Highest Honor)",
    ],
  },
  {
    title: "Lead Driver & Programmer",
    company_name: "Vex Robotics World Championship",
    icon: vexworldslogo,
    iconBg: "#383E56",
    date: "2017-2018",
    points: [
      "1st Place Division Teamwork Champion",
      "3rd Place World Champion",
      "Judges Award (awarded to 4/500 teams)"
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
