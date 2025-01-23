"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  // before we set active section to "About", we check if the last click was more than 1 second ago
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a bachelor's degree in{" "}
        <span className="font-medium">German</span>, I decided to pursue my
        passion for programming. I joined Thoughtworks after teaching myself
        front-end development and{" "}
        <span className="font-medium">
          {" "}
          gained full-stack web development experience{" "}
        </span>
        while working there.{" "}
        <span className="italic">My favorite part of programming</span> is the
        process of trial and error.
      </p>

      <p>
        My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also proficient in{" "}
        <span className="font-medium">TypeScript and Python.</span> I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy rock
        climbing, playing video games, watching movies, and playing guitar. I am
        passionate about{" "}
        <span className="font-medium">learning new things</span> and am
        currently exploring{" "}
        <span className="font-medium">chess and French</span>. I'm also working
        on improving my soccer skills!
      </p>
    </motion.section>
  );
}
