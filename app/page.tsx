import MyEducation from "@/components/Education/MyEducation";
import Hero from "@/components/Hero/Hero";
import MyExperience from "@/components/MyExperience/MyExperience";
import SkillsContainer from "@/components/SkillsContainer/SkillsContainer";
// import MyServices from "@/components/MyServices/MyServices";
// import MyStack from "@/components/MyStack/MyStack";
// import ShowCase from "@/components/ShowCase";
// import Testimonials from "@/components/Testimonials";
import React from "react";

export const myProjects = [
  {
    id: 1,
    title: "UW Bothell Formula SAE – Drivetrain Sprocket Design",
    subtitle: "FSAE | Drivetrain | SOLIDWORKS | 2024",
    description:
      "Designed drivetrain sprockets for the UW Bothell Formula SAE team. Applied material selection, thermal considerations, and fatigue analysis to improve durability under racing conditions. Performed torque and power transmission calculations to validate drivetrain performance and ensure compliance with FSAE standards.",
    image: "https://fsaeonline.com/images/fsae-logo.png", // Example image from Formula SAE
    link: "https://www.instagram.com/uwbbrd/", // UWB BRD Instagram
    tags: ["FSAE", "Drivetrain", "SOLIDWORKS", "Engineering"],
  },
];

export default function Home() {
  return (
    <div className="flex lg:flex-1 flex-col gap-0 h-min px-5 overflow-hidden p-0 relative lg:px-0 w-full flex-wrap lg:flex-nowrap items-center justify-start">
      <div className="gap-[50px] flex-col max-w-full w-full lg:max-w-[750px] lg:w-[80%] lg:flex-nowrap flex items-center flex-none h-min justify-center  relative overflow-hidden lg:overflow-visible p-[80px_0px]  ">
        <Hero />
        <SkillsContainer />
        <MyExperience />
        <MyEducation />
        {/* 
        <MyStack />
        <MyServices />
        <ShowCase showData={2} isMore />
        <Testimonials /> */}
      </div>
    </div>
  );
}
