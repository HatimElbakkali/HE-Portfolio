import { Linkedin, GitHub, Instagram, Mail } from "react-feather";

const socialLinksNavMB = [
  { id: 1, label: "LINKEDIN", src: "https://www.linkedin.com/in/hatimelbakkali/" },
  { id: 2, label: "GITHUB", src: "https://github.com/HatimElbakkali/" },
  { id: 4, label: "EMAIL", src: "mailto:hatim.elbakkali.dev@gmail.com" },
  { id: 3, label: "INSTAGRAM", src: "https://www.instagram.com/hatim._.elbakkali/" },
];

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/hatimelbakkali/",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    Icon: GitHub,
    href: "https://github.com/HatimElbakkali",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/hatim._.elbakkali/",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    Icon: Mail,
    href: "mailto:hatim.elbakkali.dev@gmail.com",
    external: false,
  },
];

export {socialLinks, socialLinksNavMB}