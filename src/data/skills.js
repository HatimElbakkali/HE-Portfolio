
import phpMailer from "../assets/icons/phpmailer.svg";
import MVC from "../assets/icons/MVC.svg";
import MySQL from "../assets/icons/mysql.svg";

export const skills = [
  {
    id: "frontend",
    category: "FrontEnd",
    items: [
      {
        id: "html",
        name: "HTML",
        icon: "skill-icons:html",
        iconType: "iconify",
      },
      {
        id: "css",
        name: "CSS",
        icon: "skill-icons:css",
        iconType: "iconify",
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: "skill-icons:javascript",
        iconType: "iconify",
      },
      {
        id: "react",
        name: "React JS",
        icon: "logos:react",
        iconType: "iconify",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
        iconType: "iconify",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        icon: "logos:bootstrap",
        iconType: "iconify",
      },
      {
        id: "redux",
        name: "Redux Toolkit",
        icon: "logos:redux",
        iconType: "iconify",
      },
      {
        id: "framer-motion",
        name: "Framer Motion",
        icon: "simple-icons:framer",
        iconType: "iconify",
      },
    ],
  },
  {
    id: "backend",
    category: "BackEnd",
    items: [
      {
        id: "php",
        name: "PHP",
        icon: "logos:php",
        iconType: "iconify",
      },
      {
        id: "phpmailer",
        name: "PHPMailer",
        icon: phpMailer,
        iconType: "image",
      },
    ],
  },
  {
    id: "tools",
    category: "Tools",
    items: [
      {
        id: "figma",
        name: "Figma",
        icon: "logos:figma",
        iconType: "iconify",
      },
    ],
  },
  {
    id: "database",
    category: "DataBase",
    items: [
      {
        id: "mysql",
        name: "MySQL",
        icon: MySQL,
        iconType: "image",
      },
    ],
  },
  {
    id: "architecture",
    category: "Architecture",
    items: [
      {
        id: "mvc",
        name: "MVC",
        icon: MVC,
        iconType: "image",
      },
    ],
  },
];
