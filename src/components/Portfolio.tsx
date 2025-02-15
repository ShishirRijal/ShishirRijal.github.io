import { useState } from 'react';
import { Eye } from 'lucide-react';

const projects = [
  {
    title: "Hack And Hunt | Treasure Hunt for Coders",
    category: "flutter",
    image: "./src/assets/images/projects/hackandhunt_app.png",
    link: "https://github.com/ShishirRijal/treasurehunt-app"
  },
  {
    title: "Netflix Clone",
    category: "ios",
    image: "./src/assets/images/projects/netflix-clone-swiftui.png",
    link: "https://github.com/ShishirRijal/Netflix-Clone-SwiftUI"
  },
  {
    title: "Katha | A Medium clone with SwiftUI",
    category: "ios",
    image: "./src/assets/images/projects/katha.png",
    link: "https://github.com/ShishirRijal/katha"
  },
  {
    title: "Resume Parser",
    category: "machine learning",
    image: "./src/assets/images/projects/resume-parser.png",
    link: "https://github.com/ShishirRijal/Resume-Parser"
  },
  {
    title: "Budget Tracker",
    category: "flutter",
    image: "./src/assets/images/projects/budget-tracker.png", 
    link: "https://github.com/ShishirRijal/expense_tracker"
  },
  {
    title: "Quiz App",
    category: "flutter",
    image: "./src/assets/images/projects/quiz_app.png",
    link: "https://github.com/ShishirRijal/Quiz-App"
  },
  {
    title: "ShopSphere",
    category: "flutter",
    image: "./src/assets/images/projects/shopsphere.png",
    link: "https://github.com/ShishirRijal/ShopSphere"
  },
  {
    title: "InBrowser Proctoring System",
    category: "machine learning",
    image: "./src/assets/images/projects/inbrowser_proctoring.png",
    link: "https://github.com/ShishirRijal/In-Browser-Proctoring-System"
  },
  {
    title: "Hack And Hunt - Backend",
    category: "python",
    image: "./src/assets/images/projects/hackandhunt_backend.png",
    link: "https://github.com/ShishirRijal/hackandhunt-api"
  },
  {
    title: "Emotion Detection",
    category: "machine learning",
    image: "./src/assets/images/projects/emotion_detection.png",
    link: "https://github.com/ShishirRijal/Emotion_Detection"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Flutter', 'iOS', 'Machine Learning', 'Python'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.category.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <article className="portfolio">
      <header>
        <h2 className="article-title">Portfolio</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {categories.map((category) => (
          <li key={category} className="filter-item">
            <button
              className={activeFilter === category ? 'active' : ''}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0)  + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      
      {/* Project Grid */}
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div key={project.title} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Eye className="w-8 h-8" />
                </div>
                <img src={project.image} alt={project.title} loading="lazy" />
              </figure>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </a>
          </div>
        ))}
      </div>
    </article>
  );
}