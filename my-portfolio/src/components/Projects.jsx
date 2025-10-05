import { motion } from "framer-motion";

const projects = [
  {
    name: "Nobara",
    desc: "Full-stack E-commerce site (MERN stack).",
    link: "https://github.com/Rahul1-hy/E-commerce-website/"
  },
  {
    name: "Preplexity AI Clone",
    desc: "AI-powered chat web app (Next.js, Supabase).",
    link: "https://github.com/Rahul1-hy/preplexity-ai-clone"
  },
  {
    name: "Portfolio/Resume",
    desc: "Live code editor and preview (React).",
    link: "https://github.com/Rahul1-hy/Resume"
  }
];

export default function Projects() {
  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <ul>
        {projects.map((project, idx) => (
          <motion.li
            key={project.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <strong>{project.name}:</strong> {project.desc}{" "}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}