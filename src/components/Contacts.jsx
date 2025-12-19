import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-[#0f0f14]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-[#22c55e]">Me</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Let’s connect and build something great
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-gray-300"
          >
            <div className="flex items-center gap-4">
              <MdLocationOn className="text-3xl text-[#22c55e]" />
              <div>
                <p className="font-medium text-white">Address</p>
                <p>Mundra Kutch, Gujarat, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MdEmail className="text-3xl text-[#22c55e]" />
              <div>
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:pawar.aryan169@gmail.com"
                  className="hover:text-[#22c55e] transition"
                >
                  pawar.aryan169@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#0b0b0f] border border-[#22c55e]/20 rounded-xl p-8 flex flex-col justify-between hover:border-[#22c55e] transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Let’s Work Together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I’m open to game development collaborations and learning
                opportunities. Feel free to reach out or connect with me on
                these platforms.
              </p>
            </div>

            <div className="flex gap-6 mt-6">
              <a
                href="https://www.linkedin.com/in/aryan-pawar-342b94367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-300 hover:text-[#0A66C2] transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/pawararyan169"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-300 hover:text-white transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
