"use client"
import { FaGraduationCap } from "react-icons/fa"
import "./Education.css"

const Education = ({ theme }) => {
  return (
    <div className={`education-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaGraduationCap className="label-icon" />
          <span>Education</span>
        </div>
        <h1 className="section-title">My Education</h1>
        <div className="line"></div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2023 – 2027</div>
          <div className="timeline-line">
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-content">
            <h2 className="timeline-title">
              Bachelor of Science in Computer Science
              <br />
              University of Swabi
            </h2>
            <p className="timeline-description">
              Currently in 6th Semester. Specializing in Software Development, Database Design, Python Programming, and Odoo ERP Systems.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Completed 2023</div>
          <div className="timeline-line">
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-content">
            <h2 className="timeline-title">
              Intermediate (FSc / ICS)
              <br />
              Peshawar Model Degree College
            </h2>
            <p className="timeline-description">
              Completed Higher Secondary School Certificate with focus on Computer Science and Mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
