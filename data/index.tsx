import { RocketIcon, User, Zap, Fan } from "lucide-react";
import {
  client_1,
  client_2,
  client_3,
  client_4,
  graphicDesignIcon,
  instagramIcon,
  linkedInIcon,
  project_1,
  project_2,
  project_3,
  project_4,
  seoOptIcon,
  webDesignIcon,
  webDevIcon,
  UWLogo,
  EnergyNorthwest,
  CBC,
  Delta
} from "@/app/assets/assets";
import { Instagram, Linkedin } from "lucide-react";
import { SiAutocad, SiPython, SiAdobe } from "react-icons/si";
import { FaCube, FaChartBar, FaTools } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { TbAutomation } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";

import {
  counterListsType,
  FAQ,
  FollowerData,
  myEducationTypes,
  myExperienceTypes,
  myServicesPlansTypes,
  myShowCasesTypes,
  myStackTypes,
  mySkillsTypes,
  testimonialsTypes,
  myServicesTypes,
} from "@/types";
import { socialListsTypes } from "@/types";
import { pagesListsType } from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "About",
    href: "/about",
    icon: <Zap />,
  },
  {
    id: 3,
    title: "Projects",
    href: "/projects",
    icon: <Fan />,
  },
  // {
  //   id: 3,
  //   title: "Contact",
  //   href: "/contact",
  //   icon: <Mail />,
  // },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: "Instagram",
    icon: <Instagram size={22} />,
    link: "https://www.instagram.com/avenuedaze/",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <Linkedin size={22} />,
    link: "https://www.linkedin.com/in/abigailhoutari/",
  },
];

export const mySkills: mySkillsTypes[] = [
  {
    id: 1,
    name: "SOLIDWORKS (CSWA Certified)",
  },
  {
    id: 2,
    name: "Microsoft 365",
  },
  {
    id: 3,
    name: "AutoCAD",
  },
  {
    id: 4,
    name: "OptimiumLap",
  },
  {
    id: 5,
    name: "Machining (laithe & mill)",
  },
  {
    id: 6,
    name: "Technical Drawings",
  },
  {
    id: 7,
    name: "Project Coordination",
  },
  {
    id: 8,
    name: "Data Analysis",
  },
  {
    id: 9,
    name: "OptimumLap",
  },
  {
    id: 10,
    name: "Mechanical Engineering",
  },
  {
    id: 11,
    name: "Technical Documentation",
  },
  {
    id: 12,
    name: "Technical Writing",
  },
  {
    id: 13,
    name: "Private Tutoring",
  },
  {
    id: 14,
    name: "MOS: PowerPoint",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Courses Taken",
    value: 30,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 2,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 40,
  },
  {
    id: 4,
    title: "Awards & Scholarships",
    value: 5,
  },
];

// Remove any duplicate or redundant display of these stats elsewhere in your UI components.
// Only use this single source of truth for your stats display.

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "Sep 2024 – Present",
    title: "Physics and Mathematics Tutor",
    company: "University of Washington Bothell",
    label: "university",
    description:
      "Tutor 7+ students weekly in Calculus (I–III) and Physics; Enhance comprehension in Statics, Dynamics, Strengths of Materials, and Electromagnetism.; Contribute to focus groups improving tutoring center resources and effectiveness.",
    link: "",
    logo: UWLogo,
  },
  {
    id: 2,
    year: "Jan 2024 – Present",
    title: "Mechanical Team Member",
    company: "UW Bothell Formula Racing (FSAE)",
    label: "university",
    description:
      "Designing and modeling the upper steering assembly in SOLIDWORKS; Designed drivetrain sprockets with material selection, thermal considerations, and fatigue analysis.; Performed torque and power transmission calculations to validate drivetrain performance to FSAE standards.",
    link: "",
    logo: UWLogo,
  },
  {
    id: 3,
    year: "Jun 2024 – Sep 2024",
    title: "Mechanical Engineering Intern",
    company: "Energy Northwest",
    label: "company",
    description:
      "Drafted and updated AutoCAD plans for 15+ facility engineering upgrades including space reconfigurations and custom furniture layouts for offices supporting 100+ staff.; Conducted field walk-downs and produced as-built drawings for 5+ major remodels, improving documentation accuracy and reducing construction ambiguity.",
    link: "",
    logo: EnergyNorthwest,
  },
  {
    id: 4,
    year: "Mar 2024 – Jun 2024",
    title: "Undergraduate Teaching Assistant",
    company: "University of Washington Bothell",
    label: "university",
    description:
      "Selected by faculty to serve as a TA; Led lab sessions and presented research comparing two flipped learning models in physics instruction at the 2024 UW STEM Research Symposium, emphasizing inclusive STEM pedagogy.",
    link: "",
    logo: UWLogo,
  },
  {
    id: 5,
    year: "Aug 2022 – Sep 2023",
    title: "Work Based Learning Intern (Instrumentation)",
    company: "Energy Northwest",
    label: "company",
    description:
      "Spearheaded calibration asset tracking system preventing loss of equipment during off-site calibration and improving inventory accuracy in an A2LA-accredited laboratory. Managed monthly invoices for thousands of calibration assets; independently processed invoices during mentor absence, contributing to a record-breaking monthly profit.",
    link: "",
    logo: EnergyNorthwest,
  },
];

export const myEducation: myEducationTypes[] = [
  {
    id: 1,
    year: "Sept 2023 – June 2027",
    degree: "Bachelor of Science in Mechanical Engineering",
    college: "University of Washington",
    label: "university",
    description:
      "Relevant Coursework: Machine design, Dynamics, Strengths of Materials, Thermodynamics, Fluid Mechanics, 3D Modeling Design.",
    link: "",
    logo: UWLogo,
  },
  {
    id: 2,
    year: "Sep 2021 - June 2023",
    degree: "Associate of Arts",
    college: "Columbia Basin College",
    label: "running start",
    description: "Completed as part of the Running Start program",
    link: "",
    logo: CBC,
  },
  {
    id: 3,
    year: "Sep 2019 - June 2023",
    degree: "High School Diploma",
    college: "Delta High School",
    label: "high school",
    description: "GPA: 3.5/4.0",
    link: "",
    logo: Delta,
  },
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: "SOLIDWORKS",
    description: "3D CAD Design Tool",
    logo: FaCube,
    link: "https://www.solidworks.com",
  },
  {
    id: 2,
    title: "AutoCAD",
    description: "2D, 3D CAD Design Tool",
    logo: SiAutocad,
    link: "https://www.autodesk.com/products/autocad/overview",
  },
  {
    id: 3,
    title: "Microsoft 365",
    description: "Productivity Suite",
    logo: TfiMicrosoftAlt,
    link: "https://www.microsoft.com/en/microsoft-365",
  },
  {
    id: 7,
    title: "OptimumLap",
    description: "Lap time simulation tool",
    logo: FaChartBar,
    link: "https://www.optimumg.com/simulation-software/optimumlap/",
  },
  {
    id: 5,
    title: "Adobe Suite",
    description: "Design Software Suite",
    logo: SiAdobe,
    link: "https://www.adobe.com/creativecloud.html",
  },
  {
    id: 6,
    title: "Python",
    description: "Programming Language",
    logo: SiPython,
    link: "https://www.python.org",
  },
];

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: "Mechanical Design",
    description:
      "Designing mechanical systems with precision using calculations and modelling tools like SOLIDWORKS and AutoCAD.",
    icon: FaTools,
    link: "",
  },
  {
    id: 3,
    title: "Engineering Analysis",
    description:
      "Conducting structural and failure analysis for mechanical systems to ensure safety and performance.",
    icon: FaChartBar,
    link: "",
  },
  {
    id: 4,
    title: "Programming & Automation",
    description:
      "Utilizing Python for system automation and data analysis.",
    icon: TbAutomation,
    link: "",
  },
];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 0,
    title: "UW Bothell Formula Racing – Steering & Drivetrain",
    description:
      "Designing our Formula SAE car's upper steering assembly in SOLIDWORKS, defining geometry and fit with the chassis and drivetrain; Engineered drivetrain sprockets with material selection, thermal considerations, and fatigue analysis to improve durability; Performed torque and power transmission calculations to ensure compliance with FSAE standards.",
    skills: ["SOLIDWORKS", "Material Selection", "Fatigue Analysis"], // <-- Make sure this exists
    year: 2024,
    tool: "SOLIDWORKS",
    image: "https://fsaeonline.com/cdsweb/SharedComponents/fsaeonline.com/img/home_banner.jpg",
  },
];

export const followerData: FollowerData[] = [
  {
    platform: "Instagram",
    followers: "",
    url: "https://www.instagram.com/avenuedaze/",
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    followers: "",
    url: "https://www.linkedin.com/in/abigailhoutari/",
    icon: linkedInIcon,
  },
];


