import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        B.Tech IT graduate with experience in front-end and back-end development.
        Built responsive E-commerce/SaaS platforms and collaborative apps. 
        Proficient in JavaScript, React, Node.js, Python, and more.
      </p>
    </motion.section>
  );
}

export default About;