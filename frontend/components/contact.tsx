"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "../actions/sendEmail";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Feel free to contact me directly at{" "}
        <a className="underline" href="mailto:zoey42zhang@gmail.com">
          zoey42zhang@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10k"
          name="senderEmail"
          type="email"
          placeholder="Your email📪"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg border !border-black/10 p-4"
          placeholder="Your message📝"
          required
          maxLength={5000}
          name="message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
