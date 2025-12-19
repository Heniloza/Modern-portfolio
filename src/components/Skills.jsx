import React from "react";
import { SiUnity, SiGodotengine } from "react-icons/si";
import { FaGamepad, FaPuzzlePiece } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [20, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-10 bg-[#0f0f14] overflow-hidden"
    >
      <img
        src="/orbital.png"
        alt="orbital background"
        className="absolute inset-0 m-auto w-[500px] md:w-[700px] opacity-10 animate-spin-slow pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#22c55e]">Skills</span>
          </h2>
          <p className="text-gray-400 mt-3">Technologies I work with</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-10 text-center"
        >
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:scale-110 transition"
          >
            <SiUnity className="text-5xl text-gray-200" />
            <p>Unity</p>
          </motion.div>

          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:scale-110 transition"
          >
            <SiGodotengine className="text-5xl text-blue-400" />
            <p>Godot</p>
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:scale-110 transition"
          >
            <FaGamepad className="text-5xl text-purple-400" />
            <p>GDScript</p>
          </motion.div>

          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:scale-110 transition"
          >
            <TbBrandCSharp className="text-5xl text-indigo-400" />
            <p>C#</p>
          </motion.div>

          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2 hover:scale-110 transition"
          >
            <FaPuzzlePiece className="text-5xl text-green-400" />
            <p>Game Design</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
