"use client"
import {
  FaLightbulb,
  FaLayerGroup,
  FaShoppingCart,
  FaChartLine,
  FaUsers,
  FaCode,
} from "react-icons/fa"
import "./Skills.css"

// Import skill images
import jsImg from "../assets/js.png"
import htmlImg from "../assets/html5.png"
import cssImg from "../assets/css.png"
import gitImg from "../assets/git.svg"
import githubImg from "../assets/gitHub.png"
import vscodeImg from "../assets/vscode.png"
import sqlServerImg from "../assets/sql-server.png"

const PythonIcon = () => (
  <svg width="42" height="42" viewBox="0 0 128 128">
    <path
      fill="#3776AB"
      d="M63.7 5c-15.6 0-29.2 1.4-29.2 11.2v11.7h29.8v4.2H22.7c-9.6 0-17.7 5.9-17.7 17.5v20.4c0 9.8 7.1 17.5 17.7 17.5h7.3V76.1c0-10.4 9-19.1 19.4-19.1h29.7V42.2c0-11.4-9.8-21.7-22.3-21.7z"
    />
    <path
      fill="#FFD43B"
      d="M64.3 123c15.6 0 29.2-1.4 29.2-11.2V100.1H63.7v-4.2h41.6c9.6 0 17.7-5.9 17.7-17.5V58c0-9.8-7.1-17.5-17.7-17.5h-7.3v11.4c0 10.4-9 19.1-19.4 19.1H48.9v14.8c0 11.4 9.8 21.7 22.3 21.7z"
    />
    <circle cx="45" cy="19" r="4" fill="#FFF" />
    <circle cx="83" cy="109" r="4" fill="#FFF" />
  </svg>
)

const OdooIcon = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    <span style={{ fontSize: "16px", fontWeight: "900", letterSpacing: "-0.5px", color: "#FFF" }}>odoo</span>
    <span style={{ fontSize: "11px", fontWeight: "800", color: "#E2E8F0", marginTop: "-3px" }}>19</span>
  </div>
)

const Skills = ({ theme }) => {
  const skills = [
    {
      name: "Odoo 19 ERP",
      icon: <OdooIcon />,
      bgColor: "#714B67",
    },
    {
      name: "ERP Solutions",
      icon: <FaLayerGroup style={{ fontSize: "28px", color: "#FFF" }} />,
      bgColor: "#4F46E5",
    },
    {
      name: "Sales & Purchase",
      icon: <FaShoppingCart style={{ fontSize: "26px", color: "#FFF" }} />,
      bgColor: "#059669",
    },
    {
      name: "Accounting & Inventory",
      icon: <FaChartLine style={{ fontSize: "26px", color: "#FFF" }} />,
      bgColor: "#0284C7",
    },
    {
      name: "Employee Module",
      icon: <FaUsers style={{ fontSize: "28px", color: "#FFF" }} />,
      bgColor: "#7C3AED",
    },
    {
      name: "Python",
      icon: <PythonIcon />,
      bgColor: "#1E293B",
    },
    { name: "PostgreSQL / SQL", image: sqlServerImg },
    { name: "HTML5", image: htmlImg },
    { name: "CSS3", image: cssImg },
    { name: "JavaScript", image: jsImg },
    { name: "Git", image: gitImg },
    { name: "GitHub", image: githubImg },
    { name: "VS Code", image: vscodeImg },
    {
      name: "QWeb & XML",
      icon: <FaCode style={{ fontSize: "28px", color: "#FFF" }} />,
      bgColor: "#E11D48",
    },
  ]

  return (
    <div className={`skills-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaLightbulb className="label-icon" />
          <span>My Skills</span>
        </div>
        <h1 className="section-title">My Technical Experience & Skills</h1>
        <div className="line"></div>
      </div>

      <p className="section-description">
        Hands-on expertise in Odoo 19 ERP customization, core functional modules (Sales, Purchase, Accounting, Inventory, Employee), Python programming, OOP principles, PostgreSQL database design, and modern web development.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-image-container">
              {skill.icon ? (
                <div className="circular-skill-badge" style={{ backgroundColor: skill.bgColor }}>
                  {skill.icon}
                </div>
              ) : (
                <img src={skill.image} alt={skill.name} className="skill-image" />
              )}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
