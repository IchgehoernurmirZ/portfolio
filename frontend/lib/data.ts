import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import placeholder from "../public/placeholder.jpg";
import AINarrator from "../public/AINarrator.jpg";
import nft from "../public/nft.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master's in Information Systems",
    company: "Northeastern University",
    location: "Toronto, ON",
    description:
      "Relevant courses: Software Engineering, Application Engineering, Web Design, Program Structure and Algorithms, Database Design",
    icon: React.createElement(LuGraduationCap), //since it's a .ts file, can't write component directly
    date: "2023 - Present",
  },
  {
    title: "App and Eco System Intern",
    company: "Volkswagen(CARIAD)",
    location: "Beijing, China",
    description:
      "Developed and maintained an error management toolchain, improving issue tracking and resolution efficiency.",
    icon: React.createElement(FaCar), //since it's a .ts file, can't write component directly
    date: "2024.05 - 2024.08",
  },
  {
    title: "Full-Stack Developer",
    company: "Thoughtworks",
    location: "Wuhan, China",
    description:
      "I worked as a full-stack developer for 1 year in an Agile environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Recommendation Platform for Walmart",
    description:
      "A recommendation platform to optimize item placement in Walmart stores. I was the full-stack developer",
    tags: ["React", "JavaScript", "CSS", "Python", "Flask", "PostgreSQL"],
    imageUrl: placeholder,
  },
  {
    title: "Porsche AI Narrator",
    description:
      "An AI-powered text-to-speech platform for Porsche. It features audio file saving, tone, pitch, and speed adjustments, and supports multiple languages.",
    tags: ["React", "TypeScript", "Java", "MySQL", "Spring Boot", "AWS"],
    imageUrl: AINarrator,
  },
  {
    title: "NFT Marketplace",
    description:
      "A decentralized marketplace for minting, buying and selling NFTs.",
    tags: [
      "React",
      "JavaScript",
      "Bootstrap",
      "SQL",
      "jQuery",
      "Node.js",
      "Express.js",
      "REST",
      "PostgreSQL",
    ],
    imageUrl: nft,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Django",
  "Flask",
  "Framer Motion",
  "Kubernetes",
  "AWS",
  "Docker",
  "Redis",
] as const;
