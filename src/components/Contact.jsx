import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const email = "piyushpatil0009@gmail.com";

  const handleClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Let's Connect !
      </motion.h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 max-w-3xl mx-auto">
          🤝 I'm eager to connect with Tech Enthusiasts, Professionals, and
          Mentors who share my passion for technology and innovation. Whether
          it's discussing emerging trends, collaborating on projects, or
          exploring new opportunities, I'm always open to meaningful connections
          and collaborations.💻
        </p>
        <a
          href="#"
          onClick={handleClick}
          className="inline-flex justify-center items-center mx-auto"
        >
          <AiOutlineMail className="text-red-500 text-6xl text-3xl " />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/piyush-patil-66338b252"
          className="inline-flex justify-center items-center mx-4 "
        >
          <FaLinkedin className="text-blue-500 text-6xl text-3xl " />
        </a>
        <a
          target="_blank"
          href="https://github.com/Piyush-Patil-95"
          className="inline-flex justify-center items-center "
        >
          <FaGithub className="text-white-500 text-6xl text-3xl " />
        </a>
      </div>
    </div>
  );
};

export default Contact;
