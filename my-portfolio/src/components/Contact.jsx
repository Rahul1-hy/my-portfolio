import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>
        <FaGithub className="inline mr-2" />
        <a href="https://github.com/Rahul1-hy">github.com/Rahul1-hy</a>
      </p>
      <p>
        <FaLinkedin className="inline mr-2" />
        <a href="https://linkedin.com/in/rahulkumar019">linkedin.com/in/rahulkumar019</a>
      </p>
    </section>
  );
}