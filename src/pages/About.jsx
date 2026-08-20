"use client";
import { FaUser, FaGlobe, FaUserCircle, FaHeart } from "react-icons/fa";
import "./About.css";

const About = ({ theme }) => {
  return (
    <div className={`about-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaUser className="label-icon" />
          <span>About me</span>
        </div>
        <h1 className="section-title">
          Odoo Functional & Technical Developer | Python Developer
          <br />
          Based in Swabi, Khyber Pakhtunkhwa, Pakistan.
        </h1>
        <div className="line"></div>
      </div>

      <p className="about-description">
        I’m a motivated 6th-semester Computer Science student at University of Swabi with hands-on experience in
        <strong> Odoo 19 ERP</strong> functional and technical development, Python programming, and web technologies. Proficient in configuring core Odoo modules including Sales, Purchase, Accounting, Inventory, and Employee. Built a complete <strong>Car Workshop ERP mini-project</strong> on Odoo 19 and developed multiple Python applications covering OOP, file handling, and data structures. Passionate about converting business requirements into practical ERP and software solutions.
      </p>

      <div className="info-cards">
        <div className="info-card">
          <div className="info-card-header">
            <FaGlobe className="info-icon" />
            <h3>Language</h3>
          </div>
          <div className="info-line"></div>
          <div className="info-content">
            <span className="info-dot"></span>
            <span>English, Urdu, Pashto</span>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-header">
            <FaGlobe className="info-icon" />
            <h3>Nationality</h3>
          </div>
          <div className="info-line"></div>
          <div className="info-content">
            <span className="info-dot"></span>
            <span>Pakistani</span>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-header">
            <FaUserCircle className="info-icon" />
            <h3>Gender</h3>
          </div>
          <div className="info-line"></div>
          <div className="info-content">
            <span className="info-dot"></span>
            <span>Female</span>
          </div>
        </div>
      </div>

      <div className="hobbies-section">
        <div className="hobbies-header">
          <FaHeart className="hobbies-icon" />
          <h3>Core Passions & Hobbies</h3>
        </div>
        <div className="hobbies-line"></div>
        <div className="hobbies-list">
          <span className="hobby-item">Odoo Customization</span>
          <span className="hobby-item">Python Coding & OOP</span>
          <span className="hobby-item">ERP Workflow Design</span>
          <span className="hobby-item">Problem Solving</span>
        </div>
      </div>
    </div>
  );
};

export default About;
