import { User, Zap } from "lucide-react";
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
import { SiAutocad, SiPython, SiArduino, SiAdobe } from "react-icons/si";
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
    icon: <Zap />,
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
    name: "Microsoft 365",
  },
  {
    id: 2,
    name: "SOLIDWORKS (CSWA Certified)",
  },
  {
    id: 3,
    name: "AutoCAD",
  },
  {
    id: 4,
    name: "Python",
  },
  {
    id: 5,
    name: "Arduino",
  },
  {
    id: 6,
    name: "Adobe Suite",
  },
  {
    id: 7,
    name: "Structural Analysis",
  },
  {
    id: 8,
    name: "Basic Failure Theory",
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
    name: "English (Native)",
  },
  {
    id: 13,
    name: "Spanish (Limited Working)",
  },
  {
    id: 14,
    name: "MOS: PowerPoint",
  },
  {
    id: 15,
    name: "MOS: Excel",
  },
  {
    id: 16,
    name: "MOS: Word",
  },
  {
    id: 17,
    name: "National Honor Society (Delta HS)",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Courses Taken",
    value: 45,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 1,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 40,
  },
  {
    id: 4,
    title: "Awards & Scholarships",
    value: 3,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "Sep 2024 – Present",
    title: "Physics and Mathematics Tutor",
    company: "University of Washington Bothell",
    label: "university",
    description:
      "Tutor 7+ students weekly in Calculus (I–III) and Physics; enhance comprehension in Statics, Dynamics, Strengths of Materials, and Electromagnetism; contribute to focus groups improving tutoring center resources and effectiveness.",
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
      "Designing and modeling the upper steering assembly in SOLIDWORKS; designed drivetrain sprockets with material selection, thermal considerations, and fatigue analysis; performed torque and power transmission calculations to validate drivetrain performance to FSAE standards.",
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
      "Drafted and updated AutoCAD plans for 15+ facility engineering upgrades including space reconfigurations and custom furniture layouts for offices supporting 100+ staff. Conducted field walk-downs and produced as-built drawings for 5+ major remodels, improving documentation accuracy and reducing construction ambiguity.",
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
      "Selected by faculty to serve as a TA; led lab sessions and presented research comparing two flipped learning models in physics instruction at the 2024 UW STEM Research Symposium, emphasizing inclusive STEM pedagogy.",
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
    label: "college",
    description: "",
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
    id: 4,
    title: "Arduino",
    description: "Electronics platform",
    logo: SiArduino,
    link: "https://www.arduino.cc",
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
      "Designing advanced mechanical systems with precision using tools like SOLIDWORKS and AutoCAD.",
    icon: FaTools,
    link: "",
  },
  {
    id: 2,
    title: "Carbon Fiber Composite Design",
    description:
      "Specializing in carbon fiber monocoque chassis design and material selection for high-performance applications.",
    icon: MdDesignServices,
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
      "Utilizing Python and Arduino for system automation, data analysis, and control systems.",
    icon: TbAutomation,
    link: "",
  },
];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 0,
    title: "UW Bothell Formula Racing – Steering & Drivetrain",
    description:
      "Designed upper steering assembly in SOLIDWORKS; engineered drivetrain sprockets with fatigue analysis, material selection, and thermal considerations; validated torque and power transmission to FSAE standards.",
    link: "",
    type: "FSAE",
    theme: "Dark",
    pages: 1,
    image: project_3,
  },
  {
    id: 1,
    title: "Devcraft",
    description:
      "Showcasing expertise, passion, and innovation in the realm of development.",
    link: "vortex.com",
    type: "Portfolio",
    theme: "Dark",
    pages: 4,
    image: project_1,
  },
  {
    id: 2,
    title: "Zenith Gym",
    description:
      "Empowering fitness enthusiasts with an immersive online experience.",
    link: "zenith.com",
    type: "Fitness",
    theme: "Light",
    pages: 5,
    image: project_2,
  },
  {
    id: 3,
    title: "Novus Agency",
    description:
      "Transforming ideas into digital realities with creativity and expertise.",
    link: "novus.com",
    type: "Business",
    theme: "Dark",
    pages: 6,
    image: project_3,
  },
  {
    id: 4,
    title: "Apex Agency",
    description:
      "Setting the pinnacle of digital excellence with cutting-edge solutions and creativity.",
    link: "apex.com",
    type: "Business",
    theme: "Light",
    pages: 6,
    image: project_4,
  },
];

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    description:
      "I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...",
    location: "New York City, USA.",
    avatar: client_1,
  },
  {
    id: 2,
    name: "John Anderson",
    description:
      "Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.",
    location: "Sydney, Australia.",
    avatar: client_2,
  },
  {
    id: 3,
    name: "Mark Davis",
    description:
      "Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.",
    location: "London, UK.",
    avatar: client_3,
  },
  {
    id: 4,
    name: "Laura Adams",
    description:
      "Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.",
    location: "Madrid, Spain.",
    avatar: client_4,
  },
];

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: "Web Design",
    price: "$50",
    description:
      "Crafting visually captivating and user-friendly websites for online success.",
    completedWorks: "25+",
    experience: "5+",
    totalHoursWorked: "500 hours",
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: "Web Dev",
    price: "$60",
    description:
      "Bringing ideas to life with robust and scalable web solutions.",
    completedWorks: "30+",
    experience: "6+",
    totalHoursWorked: "420 hours",
    icon: webDevIcon,
  },
  {
    id: 3,
    service: "Graphic Design",
    price: "$40",
    description:
      "Creating visually stunning designs that captivate and engage audiences.",
    completedWorks: "40+",
    experience: "8+",
    totalHoursWorked: "328 hours",
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: "SEO",
    price: "$70",
    description:
      "Elevating online visibility and driving organic traffic through strategies.",
    completedWorks: "20+",
    experience: "4+",
    totalHoursWorked: "223 hours",
    icon: seoOptIcon,
  },
];

export const faqData: FAQ[] = [
  {
    question: "Can you work with clients remotely?",
    answer:
      "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "Can you integrate third-party tools into my website?",
    answer:
      "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.",
  },
  {
    question: "How do you handle website revisions?",
    answer:
      "I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.",
  },
  {
    question: "Can you optimize my website?",
    answer:
      "Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.",
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
