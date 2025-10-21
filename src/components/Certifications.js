import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaNodeJs } from "react-icons/fa";
import { SiAtlassian, SiReact } from "react-icons/si";

const certifications = [
  {
    icon: <SiAtlassian className="text-sky-400 text-4xl mb-3" />,
    title: "Atlassian Agile Project Management Professional Certificate",
    issuer: "LinkedIn Learning x Atlassian",
    date: "September 2025",
    link: "https://www.linkedin.com/learning/certificates/2630d0d47e1c1e936f0d73e8e65004e47811ca86502f157fdb76bc4a161b81cb?trk=share_certificate",
  },
  {
    icon: <FaLinkedin className="text-blue-500 text-4xl mb-3" />,
    title: "Explore App Development with the MERN Stack",
    issuer: "LinkedIn Learning",
    date: "August 2025",
    link: "https://www.linkedin.com/learning/certificates/3f07c5de7ac507ee882bf9d7b7533e039e3c0d759e54bdd1360062d328aa2b33?trk=share_certificate",
  },
  {
    icon: <SiReact className="text-cyan-400 text-4xl mb-3" />,
    title: "Micro Front-End Architecture with React",
    issuer: "LinkedIn Learning",
    date: "September 2025",
    link: "https://www.linkedin.com/learning/certificates/374666a0baac463bd8517c9e453e8a84d187f437bf0b181d621881a9dba870b9?trk=share_certificate",
  },
  {
    icon: <SiReact className="text-cyan-400 text-4xl mb-3" />,
    title: "Simplifying Web Development with Accessibility Best Practices",
    issuer: `LinkedIn Learning"  "Project Management Institute (PMI)®`,
    date: "August 2025",
    link: "https://www.linkedin.com/learning/certificates/70d9844110ce81d56800f10c2b4f705ce5b4a0fbfb6503418995d2872d6fb790?trk=share_certificate",
  },
  {
    icon: <FaNodeJs className="text-green-400 text-4xl mb-3" />,
    title:
      "Learning Full-Stack JavaScript Development: MongoDB, Node, and React",
    issuer: "LinkedIn Learning",
    date: "August 2025",
    link: "https://www.linkedin.com/learning/certificates/f96898c23dd8976f85dc0b23f9383782eb93ad54890e2c11afca14142c9d017e?trk=share_certificate",
  },
  {
    icon: <FaNodeJs className="text-green-400 text-4xl mb-3" />,
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    date: "January 2025",
    link: "https://www.udemy.com/certificate/UC-1f2d44cb-3e66-4495-b403-a02c79f98c90/",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-[#111111] text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Recognized achievements and professional learning in software
          development, accessibility, and project management.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg text-center py-8 px-6 hover:border-cyan-400 hover:shadow-cyan-500/20 transition duration-300"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center">{cert.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                Issued By: {cert.issuer}
              </p>
              <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
