"use client"
import { FaPlus, FaExternalLinkAlt } from "react-icons/fa"
import "./More.css"

const More = ({ theme }) => {
  return (
    <div className={`more-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaPlus className="label-icon" />
          <span>More</span>
        </div>
        <h1 className="section-title">More</h1>
        <div className="line"></div>
      </div>

      <div className="more-cards">
        <div className="more-card">
          <h3 className="more-card-title">Certifications & Training</h3>
          <p className="more-card-description">
            • <strong>Odoo Functional & Technical Development</strong> — Practical / Self-Directed<br />
            • <strong>Python Programming</strong> — University Coursework & Projects<br />
            • <strong>Web Development Fundamentals</strong> — HTML, CSS & JavaScript<br />
            • <strong>ERP Business Workflows</strong> — Sales, Purchase, Accounting & Inventory<br />
            • <strong>Database Design & SQL</strong> — University Coursework
          </p>
        </div>

        <div className="more-card">
          <h3 className="more-card-title">Core Competencies & Skills</h3>
          <p className="more-card-description">
            Problem Solving • Business Requirement Analysis • Quick Learner • Team Collaboration • Analytical Thinking • Time Management • Adaptability
          </p>
        </div>
      </div>
    </div>
  )
}

export default More
