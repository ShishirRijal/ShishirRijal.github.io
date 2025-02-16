import { useState } from 'react';
import { Eye, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
  description?: string;
  technologies?: string[];
  images?: ProjectImage[];
  features?: string[];
  startDate?: string;
  endDate?: string;
  publishedAt?: string;
  summary?: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    title: "Hack and Hunt",
    category: "flutter",
    image: "./src/assets/images/projects/hackandhunt_app.png",  // replace with actual URL for the image
    link: "https://github.com/ShishirRijal/treasurehunt-app",  // replace with actual URL
    description: "Hack and Hunt is a Flutter-based platform for organizing and participating in treasure hunts combined with coding competitions. It offers a unique blend of adventure and coding challenges, making learning and competition fun and engaging.",
    technologies: ["Flutter", "Dart", "Firebase"],  // add any technologies used
    images: [
      { url: "./src/assets/images/projects/hackandhunt_app.png", alt: "UI Preview 1" },  // replace with actual image URLs
     ],
    features: [
      "Gamified coding challenges",
      "Real-time leaderboards",
      "Customizable treasure hunts"
    ],
    
    startDate: "2024-03-01",  // replace with actual start date
    endDate: "2024-03-15",  // replace with actual end date
    publishedAt: "2024-03-05",  // replace with actual publish date
    summary: "Hack and Hunt combines coding with adventure through treasure hunts, offering a fun and educational experience.",
    tags: ["Flutter", "Coding", "Gamification", "i-CES"]
  },
  {
    title: "ShopSphere",
    category: "flutter",
    image: "./src/assets/images/projects/shopsphere.png",
    link: "https://github.com/ShishirRijal/ShopSphere",
    description: "A feature-rich e-commerce application built with Flutter and Firebase, implementing Clean Architecture principles.",
    technologies: ["Flutter", "Firebase", "Provider", "Clean Architecture"],
    startDate: "2023-09-01",
    endDate: "2024-01-31",
    publishedAt: "2024-01-31",
    summary: "A feature-rich e-commerce application built with Flutter and Firebase, implementing Clean Architecture principles. This project demonstrates modern app development patterns, SOLID principles, and best practices in mobile development.",
    tags: ["Flutter", "Firebase", "Clean Architecture", "Provider", "Mobile Development"],
    images: [
      { url: "./src/assets/images/projects/shopsphere.png", alt: "ShopSphere" }, 
    ],
    features: [
      "Dual role support (Admin/Customer)",
      "Product browsing with infinite scroll",
      "Cart Management",
      "Checkout & Orders",
      "Admin Panel"
    ]
  }, 
  {
    title: "Budget Tracker",
    category: "flutter",
    image: "./src/assets/images/projects/budget-tracker.png",
    link: "https://github.com/ShishirRijal/expense_tracker",
    description: "Budget Tracker is a mobile application built using Flutter that enables users to record their daily financial transactions, whether income or expense. The app allows for categorization of transactions, including custom categories, and stores data locally on the device using Hive.",
    technologies: ["Flutter", "Dart", "Hive", "Provider"],
    startDate: "2024-01-01",
    endDate: "2024-02-10",
    publishedAt: "2024-02-10",
    summary: "Budget Tracker is a Flutter-based app that allows users to record, track, and categorize daily transactions, helping them manage their finances effectively. With features like customizable categories, local data storage, and visual charts, the app provides a complete solution for personal budgeting.",
    tags: ["Flutter", "Finance", "Expense Tracker", "Hive", "Provider"],
    images: [
      { url: "./src/assets/images/projects/budget-tracker.png", alt: "Budget Tracker" }, 
    ],
    features: [
      "Money Card with user's financial overview",
      "Add/Customize Categories",
      "Edit/Delete Categories",
      "Add Profile Picture & Name",
      "Data Persistence with Hive",
      "Transaction Chart",
      "Transaction List",
      "Edit Transactions",
      "Category-wise Transaction Breakdown",
      "Dark Mode"
    ]
  },
  {
    title: "Katha | A Medium clone with SwiftUI",
    category: "ios",
    image: "./src/assets/images/projects/katha.png",
    link: "https://github.com/ShishirRijal/katha",
    description: "A beautifully designed blog platform inspired by Medium, built entirely in SwiftUI for iOS.",
    technologies: ["SwiftUI", "Firebase", "CoreData", "iOS"],
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    publishedAt: "2024-01-31",
    summary: "A beautifully designed blog platform inspired by Medium, built entirely in SwiftUI for iOS. Features offline support, seamless article management, and a modern user interface powered by Firebase and CoreData.",
    tags: ["SwiftUI", "Firebase", "CoreData", "iOS", "Blog Platform"],
    images: [
      { url: "./src/assets/images/projects/katha.png", alt: "Katha" }, 
    ],

    features: [
      "Authentication with social media integration",
      "Article Management with rich text editing",
      "Bookmarking for offline reading",
      "Advanced search functionality",
      "Profile customization",
      "Dark mode support"
    ]
  },
  
  {
    title: "Netflix Clone",
    category: "ios",
    image: "./src/assets/images/projects/netflix-clone-swiftui.png",
    link: "https://github.com/ShishirRijal/Netflix-Clone-SwiftUI",
    description: "A sleek and modern Netflix clone built with SwiftUI, implementing core features of the Netflix mobile app while following best practices in iOS development.",
    technologies: ["SwiftUI", "TMDB API", "MVVM"],
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    publishedAt: "2024-02-15",
    summary: "A sleek and modern Netflix clone built with SwiftUI, implementing core features of the Netflix mobile app while following best practices in iOS development.",
    tags: ["SwiftUI", "TMDB API", "iOS Development", "MVVM"],
    images: [
      { url: "./src/assets/images/projects/netflix-clone-swiftui.png", alt: "Netflix Clone" }, 
    ],
    features: [
      "Home Screen with trending content",
      "Search functionality",
      "Detail View for content",
      "New & Hot section",
      "Downloads management",
      "TMDB Integration"
    ]
  },
  {
    title: "Resume Parser",
    category: "machine learning",
    image: "./src/assets/images/projects/resume-parser.png",
    link: "https://github.com/ShishirRijal/Resume-Parser",
    description: "Resume Parser is an NLP tool designed to extract key information from resumes in PDF and DOCX formats.",
    technologies: ["Python", "NLP", "Streamlit", "pdfminer", "python-docx"],
    startDate: "2024-01-01",
    endDate: "2024-02-10",
    publishedAt: "2024-02-10",
    summary: "Resume Parser is an NLP tool designed to extract key information from resumes in PDF and DOCX formats. It offers both a command-line interface for batch processing and a user-friendly web interface built with Streamlit for interactive use.",
    tags: ["NLP", "Python", "Streamlit", "pdfminer", "python-docx", "pandas"],
    images: [
      { url: "./src/assets/images/projects/resume-parser.png", alt: "Resume Parser" }, 
    ],
    features: [
      "Parse PDF and DOCX formats",
      "Extract essential information",
      "Command-line Interface",
      "Streamlit Web Interface",
      "Customizable databases"
    ]
  },
  {
    title: "Zero Waste Kitchen",
    category: "flutter",
    image: "./src/assets/images/projects/zero-waste-kitchen.png",  // replace with actual URL for the image
    link: "https://github.com/ShishirRijal/Zero-Waste-Kitchen-Flutter",  // replace with actual URL
    description: "Zero Waste Kitchen is a Flutter-based mobile application that helps reduce kitchen food waste by allowing users to share excess food items with NGOs, INGOs, orphanages, and old age homes. The app aims to promote sustainability and social responsibility.",
    technologies: ["Flutter", "Dart", "Firebase"],
    images: [
      { url: "./src/assets/images/projects/zero-waste-kitchen.png", alt: "App UI Preview 1" },  // replace with actual image URLs
     ],
    features: [
      "User authentication and registration",
      "Browse and post available food items",
      "Search and filter food listings",
      "Direct messaging between users and organizations",
      "Notifications for new food listings and messages",
      "User profiles and preferences",
      "Admin dashboard to manage organizations and listings"
    ],
    
    startDate: "2025-01-01",  // replace with actual start date
    endDate: "2025-02-01",  // replace with actual end date
    publishedAt: "2025-02-10",  // replace with actual publish date
    summary: "A mobile app to reduce food wastage by facilitating food sharing with those in need.",
    tags: ["Flutter", "Sustainability", "Social Good", "Firebase", "Food Waste"]
  },
  {
    title: "Quiz App",
    category: "flutter",
    image: "./src/assets/images/projects/quiz_app.png",
    link: "https://github.com/ShishirRijal/Quiz-App",
    description: "A stunning cross-platform quiz application built with Flutter and Firebase, designed to test your knowledge and track your progress.",
    technologies: ["Flutter", "Firebase", "Provider"],
    startDate: "2024-01-01",
    endDate: "2024-02-01",
    publishedAt: "2024-02-01",
    summary: "A stunning cross-platform quiz application built with Flutter and Firebase, designed to test your knowledge and track your progress.",
    tags: ["Flutter", "Firebase", "Google", "Mobile Development"],
    images: [
      { url: "./src/assets/images/projects/quiz_app.png", alt: "Quiz App" }, 
    ],
    features: [
      "Cross-platform support",
      "Firebase Authentication",
      "Track Scores",
      "Real-time Quiz",
      "Exception Handling"
    ]
  },

  {
    title: "Hack and Hunt Backend",
    category: "python",
    image: "./src/assets/images/projects/hackandhunt_backend.png",  
    link: "https://github.com/ShishirRijal/hackandhunt-api",
    description: "Hack and Hunt API is a Django-based web application that provides APIs for managing user accounts and game-related functionalities like leaderboards, levels, and riddles. It powers the Hack and Hunt platform, enabling seamless gameplay.",
    technologies: ["Django", "Django REST Framework", "PostgreSQL"],
    features: [
      "User authentication and management",
      "Game level and riddle management",
      "Leaderboard tracking",
      "RESTful API endpoints for game functionalities",
      "Token-based authentication"
    ],
    images: [
      { url: "./src/assets/images/projects/hackandhunt_backend.png", alt: "Hack and Hunt Backend" }, 
    ],
    startDate: "2024-03-10",
    endDate: "2024-03-30",
    publishedAt: "2024-04-01",
    summary: "A Django-based API backend for the Hack and Hunt gamified coding platform.",
    tags: ["Django", "Django REST Framework", "PostgreSQL"]
  },
  {
    title: "Emotion Detection",
    category: "machine learning",
    image: "./src/assets/images/projects/emotion_detection.png",
    link: "https://github.com/ShishirRijal/Emotion_Detection",
    description: "Facial emotion detection using deep learning architectures, trained on the FER-2013 dataset. The project explores CNN-based models and transfer learning for classifying emotions.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Deep Learning"],
    features: [
      "Custom CNN model trained from scratch",
      "Data augmentation techniques for better generalization",
      "Transfer learning with VGG16 and ResNet50",
      "Facial emotion classification into seven categories"
    ],
    images: [
      { url: "./src/assets/images/projects/emotion_detection.png", alt: "Emotion Detection" }, 
    ],
    startDate: "2024-09-10",
    endDate: "2024-09-30",
    publishedAt: "2024-10-01",
    summary: "A deep learning-based approach for detecting facial emotions using the FER-2013 dataset.",
    tags: ["Deep Learning", "Computer Vision", "CNN", "Emotion Recognition"]
  },

  {
    title: "In-Browser Proctoring System",
    category: "machine learning",
    image: "./src/assets/images/projects/inbrowser_proctoring.png",
    link: "https://github.com/ShishirRijal/In-Browser-Proctoring-System",
    description: "An advanced web-based proctoring system for secure online examinations, integrating face recognition, object detection, head pose estimation, and background audio monitoring.",
    technologies: ["Python", "Django", "PyTorch", "OpenCV", "dlib", "NumPy", "Matplotlib", "Seaborn"],
    features: [
      "Face recognition login",
      "Real-time object detection",
      "Head pose estimation",
      "Background audio monitoring",
      "Comprehensive exam activity logging",
      "Detailed cheating detection reports",
      "Institution-specific exam creation"
    ],
    images: [
      { url: "./src/assets/images/projects/inbrowser_proctoring.png", alt: "In-Browser Proctoring" }, 
    ],  

    startDate: "2024-10-05",
    endDate: "2024-10-30",
    publishedAt: "2024-11-01",
    summary: "A real-time proctoring system to ensure academic integrity in online examinations through AI-powered monitoring.",
    tags: ["Proctoring", "AI", "Computer Vision", "Face Recognition", "Django", "Deep Learning"]
  },

  {
    title: "iWrite",
    category: "flutter",
    image: "./src/assets/images/projects/iwrite.png",
    link: "https://github.com/ShishirRijal/iWrite",
    description: "A Flutter-based blog application implementing Clean Architecture, featuring user authentication, blog creation, offline support, and local data caching.",
    technologies: ["Flutter", "Supabase", "Hive", "GetIt"],
    features: [
      "User authentication (Login/Signup)",
      "Create and read blog posts",
      "Online/offline support with caching",
      "Functional programming with Either",
      "Exception handling with Clean Architecture principles",
    ],
    images: [
      { url: "./src/assets/images/projects/iwrite.png", alt: "iWrite" }, 
    ],
    tags: ["Flutter", "Clean Architecture", "Supabase"],
  },

  {
    title: "Tic-Tac-Toe",
    category: "iOS",
    image: "./src/assets/images/projects/tictactoe.png",
    link: "https://github.com/ShishirRijal/TicTacToe-SwiftUI",
    description: "A modern SwiftUI-based Tic-Tac-Toe game featuring MVVM architecture, stunning UI, confetti celebration, and responsive design for iOS devices.",
    technologies: ["Swift", "SwiftUI", "MVVM"],
    features: [
      "Two-player mode (X vs. O)",
      "Confetti celebration for the winner",
      "Sleek and responsive UI",
      "MVVM architecture for clean code structure",
      "Compatible with iPhones and iPads",
    ],
    images: [
      { url: "./src/assets/images/projects/tictactoe.png", alt: "Tic-Tac-Toe" }, 
    ],
    tags: ["SwiftUI", "Game Development", "MVVM", "iOS"],
  },

  {
    title: "BloodBond Backend",
    category: "python",
    image: "./src/assets/images/projects/bloodbond-backend.png",
    link: "https://github.com/ShishirRijal/BloodBond-Backend",
    description: "A FastAPI-powered backend for BloodBond, a revolutionary blood donation platform that connects donors with those in need through real-time alerts, location-based matching, and gamified engagement.",
    technologies: ["FastAPI", "Python", "PostgreSQL", "OAuth2", "Alembic"],
    images: [
      { url: "./src/assets/images/projects/bloodbond-backend.png", alt: "BloodBond Backend" }, 
    ],
    features: [
      "Donor registration and search",
      "Location-based donor matching",
      "Real-time push notifications for urgent needs",
      "Gamified donation system with redeemable points",
      "Real-time alerts on viral diseases",
      "OAuth2 authentication and security",
      "RESTful API with Swagger documentation",
    ],
    tags: ["FastAPI", "Backend", "Blood Donation", "OAuth2", "PostgreSQL"],
  },

  {
    "title": "YatraSathi",
    "category": "iOS",
    "image": "./src/assets/images/projects/yatrasathi.png",
    "link": "https://github.com/ShishirRijal/YatraSathi",
    "description": "YatraSathi is a SwiftUI-based application that allows users to explore various destinations across a map interface. The app provides a rich experience by integrating a list of popular locations, offering detailed information and an interactive map for location exploration.",
    "technologies": ["Swift", "SwiftUI", "Xcode", "iOS"],
    "images": [
      { "url": "./src/assets/images/projects/yatrasathi.png", "alt": "YatraSathi Logo" }
    ],
    "features": [
      "Map Integration with interactive location markers",
      "Location Preview with descriptions and images",
      "Detailed location view with extended information",
      "Seamless and responsive UI with SwiftUI",
      "Clean and organized MVVM architecture"
    ],
    "tags": ["SwiftUI", "iOS", "Map", "Location", "MVVM"]
  },
  
  


];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const categories = ['All', 'Flutter', 'iOS', 'Machine Learning', 'Python'];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.category.toLowerCase() === activeFilter.toLowerCase()
  );

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === (selectedProject.images?.length || 0) - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? (selectedProject.images?.length || 0) - 1 : prev - 1
      );
    }
  };

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
              {category}
            </button>
          </li>
        ))}
      </ul>
      
      {/* Project Grid */}
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.title} 
            className="project-card"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0);
            }}
          >
            <figure className="project-img">
              <div className="project-item-icon-box">
                <Eye className="w-8 h-8" />
              </div>
              <img src={project.image} alt={project.title} loading="lazy" />
            </figure>
            <h3 className="project-title">{project.title}</h3>
            {/* <p className="project-category">{project.category}</p> */}
             {project.tags && project.tags.length > 0 && (
              <div className="project-tags">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="project-tag-item">
                    {tag}
                    {project.tags && index < project.tags.slice(0, 3).length - 1 && <span className="dot-separator"> &middot; </span>}
                  </span>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Carousel */}
            <div className="project-carousel">
              <img 
                src={selectedProject.images?.[currentImageIndex]?.url || ''} 
                alt={selectedProject.images?.[currentImageIndex]?.alt || ''}
                className="carousel-image"
              />
              
              {selectedProject.images?.length && selectedProject.images.length > 1 && (
                <>
                  <button className="carousel-btn prev" onClick={handlePrevImage}>
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button className="carousel-btn next" onClick={handleNextImage}>
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  <div className="carousel-indicators">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="project-details">
              {/* Header Section */}
              <div className="project-header">
                <h3 className="project-modal-title">{selectedProject.title}</h3>
                <div className="project-meta">
                  {selectedProject.startDate && (
                    <span className="project-date">
                      {new Date(selectedProject.startDate).toLocaleDateString('en-US', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                      {selectedProject.endDate && ' - '}
                      {selectedProject.endDate && new Date(selectedProject.endDate).toLocaleDateString('en-US', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  )}
                </div>
              </div>

              {/* Summary Section */}
              {selectedProject.summary && (
                <div className="project-summary">
                  <h4>Overview</h4>
                  <p>{selectedProject.summary}</p>
                </div>
              )}

              {/* Detailed Description */}
              <div className="project-description">
                <h4>Description</h4>
                <p>{selectedProject.description}</p>
              </div>

              {/* Features Section */}
              {selectedProject.features && (
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Section */}
              <div className="project-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {selectedProject.technologies?.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Tags Section */}
              {/* {selectedProject.tags && (
                <div className="project-tags">
                  <h4>Tags</h4>
                  <div className="tag-list">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="tag-item">{tag}</span>
                    ))}
                  </div>
                </div>
              )} */}

              {/* Action Button */}
              <a 
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="source-code-btn"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
