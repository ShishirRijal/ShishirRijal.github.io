import { School, Trophy, BookOpen, Briefcase, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <article className="resume">
      <header>
        <h2 className="article-title">Resume</h2>
      </header>


       {/* Professional Experience Section */}
       <section className="timeline-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase className="w-6 h-6" />
          </div>
          <h3 className="section-title">Professional Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-title">MarginTop Solutions</h4>
            <span className="timeline-period">November 2023 - February 2024 | Chitwan, Nepal</span>
            <div className="timeline-text">
              <p>Engineered 3+ IoT healthcare applications implementing SOLID principles and clean architecture.</p>
              <p>Developed real-time patient monitoring systems with Bluetooth integration.</p>
              <p>Implemented secure data handling and storage solutions for sensitive healthcare information.</p>
              <p>Utilized Flutter and Firebase for scalable backend infrastructure.</p>
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-title">Merkos302</h4>
            <span className="timeline-period">November 2022 – March 2023 | New York, NY</span>
            <div className="timeline-text">
              <p>Spearheaded the development of Merkos Central Project using Flutter for web and mobile platforms.</p>
              <p>Transformed Figma designs into pixel-perfect, responsive applications.</p>
              <p>Implemented RESTful API integration with robust error handling.</p>
              <p>Collaborated with cross-functional teams to optimize user experience.</p>
            </div>
          </li>
        </ol>
      </section>
      

      {/* Education Section */}
      <section className="timeline-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <School className="w-6 h-6" />
          </div>
          <h3 className="section-title">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-title">Pashchimanchal Campus, Tribhuvan University</h4>
            <span className="timeline-period">2021 - 2025 | Pokhara, Nepal</span>
            <div className="timeline-text">
              <p><strong>Key Subjects:</strong> Data Structures and Algorithms, Computer Networks, Digital Logic, Operating Systems, Software Engineering, Microprocessors</p>
              <p><strong>Advance Courses:</strong> Database Management System, Computer Organization & Architecture, Artificial Intelligence</p>
              <p><strong>Extracurricular Activities:</strong> Participated in tech-related workshops and hackathons, worked on multiple team-based projects.</p>
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-title">Gorkha Secondary School</h4>
            <span className="timeline-period">2018 - 2020 | Tulsipur Dang, Nepal</span>
            <div className="timeline-text">
              <p><strong>GPA:</strong> 3.85/4.0</p>
              <p><strong>Subjects Studied:</strong> Mathematics, Physics, Chemistry, Computer Science, and English</p>
              <p><strong>Achievements:</strong> Excelled in STEM subjects with a strong foundation in analytical and problem-solving skills.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* Leadership Section */}
      <section className="timeline-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <Trophy className="w-6 h-6" />
          </div>
          <h3 className="section-title">Leaderships</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-title">Innovative Computer Engineering Students' Society</h4>
            <span className="timeline-period">March 2022 - February 2025 | Pashchimanchal Campus, Pokhara, Nepal</span>
            <div className="timeline-text">
              <p>Led a team of 20+ members in organizing technical events and workshops.</p>
              <p>Organized and conducted multiple coding workshops, competitions, and hackathons.</p>
              <p>Led 'Call For Enthusiast' - a month-long technical training program teaching popular tech stacks to college students, for 3 years.</p>
              <p>Initiated and led 'AI Bootcamp' - a year-long machine learning and deep learning mentorship program.</p>
              <p>Increased student participation in technical activities by 123%.</p>
              <p>Successfully organized EthosHack, a 24-hour regional cultural hackathon.</p>
              <p>Mentored around 100 students in Flutter development through structured training programs.</p>
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-title">Microsoft</h4>
            <span className="timeline-period">2022 - 2025 | Remote</span>
            <div className="timeline-text">
              <p>Represented Microsoft's student developer community.</p>
              <p>Organized workshops and training sessions on Microsoft technologies.</p>
              <p>Facilitated student learning in cloud computing and development tools.</p>
            </div>
          </li>
        </ol>
      </section>

      {/* Teaching Section */}
      <section className="timeline-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="section-title">Teaching</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-title">Innovative Computer Engineering Students' Society (i-CES)</h4>
            <span className="timeline-period">March 2022 - February 2025 | Pashchimanchal Campus, Pokhara, Nepal</span>
            <div className="timeline-text">
              <p><strong>Program: </strong> Call for Enthusiast - A month-long mentorship program by i-CES.</p>
              <p><strong>Teaching Experience: </strong> Conducted Flutter training for 3 years, 1 month each year, mentoring students in mobile app development.</p>
              <p><strong>Responsibilities: </strong> Designed structured course materials, delivered hands-on coding sessions, guided students through real-world projects, and provided one-on-one mentorship to help them build production-ready Flutter applications.</p>
              <p><strong>Syllabus: </strong> <a href="https://brainy-skunk-8be.notion.site/Call-For-Enthusiast-FLUTTER-955d04606aea45fe976c76f44873daa3" 
                  className="syllabus-link" target="_blank" rel="noopener noreferrer">
                    View Syllabus <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
              </p>
            </div>
          </li>
        </ol>
      </section>

     
    </article>
  );
} 