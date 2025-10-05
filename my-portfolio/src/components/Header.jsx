import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Rahul Kumar</h1>
      <p>Full Stack Developer | React | Node.js</p>
      <a href="mailto:rahulkumar1813111034@gmail.com">Contact Me</a>
      <a
        href="https://drive.google.com/file/d/1LC_CBxDOBxa-2KVqOPp7FS7bJLgRCj9C/view?usp=drive_link"
        style={{ marginLeft: "20px" }}
      >
        CV Download
      </a>
    </motion.header>
  );
}
