"use client"
import { FaBoxOpen, FaExternalLinkAlt } from "react-icons/fa"
import "./Projects.css"

const Projects = ({ theme }) => {
  const projects = [
    {
      title: "Car Workshop ERP — Odoo 19 Mini Project",
      description:
        "Comprehensive ERP solution built on Odoo 19 connecting Sales, Purchase, Inventory, and Accounting modules seamlessly. Features service job cards, customer invoicing, spare parts procurement, real-time stock tracking, and P&L financial reporting.",
      technologies: [
        { name: "Odoo 19", bgColor: "rgba(135, 90, 123, 0.2)", textColor: "#875a7b" },
        { name: "Python", bgColor: "rgba(55, 118, 171, 0.2)", textColor: "#3776ab" },
        { name: "PostgreSQL", bgColor: "rgba(51, 103, 145, 0.2)", textColor: "#336791" },
        { name: "XML Views", bgColor: "rgba(255, 102, 0, 0.1)", textColor: "#ff6600" },
        { name: "QWeb Reports", bgColor: "rgba(40, 167, 69, 0.2)", textColor: "#28a745" },
      ],
      link: "#",
    },
    {
      title: "Student Grade Management System — Python",
      description:
        "Console application to add students, record subject marks, calculate GPA, and generate grade reports using Object-Oriented Programming (OOP) principles and file I/O.",
      technologies: [
        { name: "Python", bgColor: "rgba(55, 118, 171, 0.2)", textColor: "#3776ab" },
        { name: "File Handling", bgColor: "cadetblue", textColor: "black" },
        { name: "OOP", bgColor: "plum", textColor: "black" },
        { name: "CLI App", bgColor: "lightyellow", textColor: "black" },
      ],
      link: "#",
    },
    {
      title: "Library Management System — Python",
      description:
        "CRUD-based management system for books, members, and borrowing records featuring search capabilities, real-time availability tracking, and fine calculation.",
      technologies: [
        { name: "Python", bgColor: "rgba(55, 118, 171, 0.2)", textColor: "#3776ab" },
        { name: "OOP", bgColor: "plum", textColor: "black" },
        { name: "Data Structures", bgColor: "lightblue", textColor: "black" },
        { name: "CLI App", bgColor: "lightyellow", textColor: "black" },
      ],
      link: "#",
    },
    {
      title: "Simple Banking System — Python",
      description:
        "Simulated bank operations including account creation, deposits, withdrawals, balance inquiries, and transaction history using robust OOP and exception handling.",
      technologies: [
        { name: "Python", bgColor: "rgba(55, 118, 171, 0.2)", textColor: "#3776ab" },
        { name: "OOP", bgColor: "plum", textColor: "black" },
        { name: "Exception Handling", bgColor: "mistyrose", textColor: "red" },
      ],
      link: "#",
    },
    {
      title: "To-Do List Application — Python",
      description:
        "Feature-rich task manager CLI application supporting add, update, delete, and task status tracking with persistent JSON file storage.",
      technologies: [
        { name: "Python", bgColor: "rgba(55, 118, 171, 0.2)", textColor: "#3776ab" },
        { name: "JSON Storage", bgColor: "lightgreen", textColor: "black" },
        { name: "File Handling", bgColor: "cadetblue", textColor: "black" },
      ],
      link: "#",
    },
  ]

  return (
    <div className={`projects-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaBoxOpen className="label-icon" />
          <span>Projects</span>
        </div>
        <h1 className="section-title">My Projects</h1>
        <div className="line"></div>
      </div>

      <p className="section-description">
        I love to Build Cool Projects. Here, you'll find a curated collection of my creative endeavors and technical
        projects. Each piece represents a journey of invention, problem-solving, and continuous learning. Feel free to
        explore this showcase of my passion and expertise in action.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-tags">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="tech-tag"
                  style={{
                    backgroundColor: tech.bgColor,
                    color: tech.textColor,
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Visit Project <FaExternalLinkAlt className="link-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
