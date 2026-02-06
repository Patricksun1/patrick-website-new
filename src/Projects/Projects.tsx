import { Link } from "react-router-dom";
import "./Projects.css";
import keyword from "../assets/Keyword.png"
import unemployed from "../assets/unemployed.png"
import portfolio from "../assets/firstyearwebsite.png"
import scriptimage from "../assets/peermentoringscript.png"
const projects = [
  {
    title: "Keyword",
    description: "A browser-based word game built during DevSoc Warden training.",
    live: "https://warden-games.vercel.app/keyword",
    github: "https://github.com/devsoc-unsw/trainee-warden-24t2",
    image: keyword,
  }, {
    title: "unemployed.",
    description: "A satirical job-search themed website with a backend component.",
    live: "https://unemployed-delta.vercel.app/",
    github: "https://github.com/makeen05/unemployed/tree/main/server",
    image: unemployed,
  },
  {
    title: "Personal Portfolio (Archived)",
    description: "My first-year personal website, rebuilt into the current portfolio.",
    live: "https://patricksun1.github.io/PatrickWebsite/",
    github: "https://github.com/Patricksun1/PatrickWebsite",
    image: portfolio,
  },
  {
    title: "Group Sorting Script",
    description:
      "A custom sorting script created at CSESoc to automatically assign 340+ mentees into 30+ constrained groups.",
    live: "https://script.google.com/d/1v2adzjPphvRmLSbWr5KltDCGRwpeZtEMaC8el6_P3bJ8VsLjqz3zXrCo/edit?usp=sharing",
    image: scriptimage,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <header className="projects-header">
        <Link to="/" className="back-arrow">← Back</Link>
        <h1>Projects</h1>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <img className ="project-image" src = {project.image} alt="" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="project-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Link →
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;