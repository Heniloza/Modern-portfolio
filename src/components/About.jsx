import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-[#0b0b0f]">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About <span className="text-[#22c55e]">Me</span>
        </motion.h2>

        <div className="text-gray-300 text-lg leading-relaxed space-y-6">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            My name is{" "}
            <span className="text-white font-semibold">Aryan Pawar</span>, and I
            am a highly passionate{" "}
            <span className="text-[#22c55e]">Game Developer</span> with strong
            proficiency in <span className="text-white">Unity</span> and{" "}
            <span className="text-white">Godot</span>, specializing in{" "}
            <span className="text-[#22c55e]">GDScript-based development</span>.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I focus on creating{" "}
            <span className="text-white">
              immersive, gameplay-driven experiences
            </span>{" "}
            backed by solid technical design and{" "}
            <span className="text-white">clean, maintainable code</span>. I
            enjoy transforming ideas into polished, interactive experiences
            while keeping performance and scalability in mind.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            I am constantly learning, experimenting with new mechanics, and
            refining my development workflow to grow as a developer and
            contribute to meaningful game projects.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
