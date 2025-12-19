import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { createSparkles } from "../utils/sparkels.js";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-10 pt-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-gray-400 text-lg mb-2"
          >
            Hello, My name is
          </motion.p>

          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="text-white">Aryan</span>{" "}
            <span className="text-[#22c55e]">Pawar</span>
          </motion.h1>

          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            I am a{" "}
            <span className="text-[#22c55e]">
              <TypeAnimation
                sequence={[
                  "Coder",
                  1500,
                  "Game Developer",
                  1500,
                  "Learner",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            I’m a passionate Game Developer specializing in Unity and Godot,
            focused on building immersive, gameplay-driven experiences with
            clean and maintainable code.
          </motion.p>

          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                createSparkles(rect.left + rect.width / 2, rect.top);

                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#22c55e] text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              View Projects
            </button>


            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-[#22c55e] text-[#22c55e] px-6 py-3 rounded-full font-medium hover:bg-[#22c55e] hover:text-black transition"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[500px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] md:w-[360px] md:h-[360px] bg-[#22c55e] rounded-full -z-10"></div>

            <img
              src="/image4.png"
              alt="Aryan Pawar"
              className="absolute top-[-100px] left-1/2 -translate-x-1/2 h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
