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
  mlablogo,
  mobile,
  mongodb,
  nodejs,
  pythonlogo,
  qrlogo,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  typescript,
  verletphysicsmp4,
  vexusopenlogo,
  vexworldslogo,
  web,
  mpuemulator
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
    id: "tech",
    title: "Skills"
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Redux Toolkit",
    icon: redux,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "C#",
    icon: csharplogo,
  },
  {
    title: "Python",
    icon: pythonlogo,
  },
  {
    title: "C++",
    icon: cpluspluslogo,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Java",
    icon: javalogo,
  },
  {
    title: "git",
    icon: git,
  },
  {
    title: "docker",
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
    title: "Officer",
    company_name: "Machine Learning @ Berkeley",
    icon: mlablogo,
    iconBg: "#E6DEDD",
    date: "August 2022 - Present",
    points: [
      "Responsible for increasing revenue through meeting with companies to discuss technical partnerships for the semester.",
      "Ensuring client deliverables and milestones are met through up keeping SDLC and Agile-methodology."
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
    name: "6502 MPU Emulator",
    description:
      "Developed a 6502 MPU Emulator to specification with a text-editor interface and debugging capability. Successfully able to run complex programs (Fibonacci sequence generator) involving loops and MMIO.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Windows Forms",
        color: "green-text-gradient",
      },
      {
        name: "Blazor",
        color: "green-text-gradient",
      },
    ],
    image: mpuemulator,
    source_code_link: "https://github.com/MichaelKhaykin/6502Emulator",
  },
  {
    name: "QR Code Generator",
    description:
      "Researched and implemented a working QRCode Generator using C# and WindowsForms from scratch. Can embed any text of varying lengths into the QRCode aswell as control QRCode pattern.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Windows Forms",
        color: "green-text-gradient",
      },
    ],
    image: qrlogo,
    source_code_link: "https://github.com/MichaelKhaykin/QRCodeGenerator",
  },
  {
    name: "Verlet Physics Engine",
    description:
      "Developed and tested a small Verlet physics system by simulating a flag via arranging particles in a grid/rope-like system. Used GPU to efficiently map an image on to the particles in the grid.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "MonoGame",
        color: "green-text-gradient",
      },
      {
        name: "GPU",
        color: "pink-text-gradient",
      },
    ],
    image: verletphysicsmp4,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
