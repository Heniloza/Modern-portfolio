import projects from "../data/projects";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-10 bg-[#0b0b0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#22c55e]">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#0f0f14] border border-[#22c55e]/20 rounded-xl overflow-hidden hover:border-[#22c55e] transition"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 border border-[#22c55e]/40 text-[#22c55e] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-sm text-gray-500">
                  Status:{" "}
                  <span className="text-[#22c55e] font-medium">
                    {project.status}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
