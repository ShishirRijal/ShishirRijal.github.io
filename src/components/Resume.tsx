import { School, Trophy, BookOpen, Briefcase, ExternalLink, FileDown } from 'lucide-react';

export default function Resume() {
  return (
    <article className="resume">
      <header>
        <h2 className="article-title">Resume</h2>
        
        {/* Resume Download Button */}
        <a 
          href="/assets/files/Shishir Rijal.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="resume-download-btn"
        >
          <div className="btn-content">
            <FileDown className="w-5 h-5" />
            <span>Download Resume</span>
          </div>
          <div className="btn-decoration"></div>
        </a>
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
              <p>Led the development of the Merkos Central Project using Flutter for cross-platform mobile and web applications.</p>
            <p>Translated Figma designs into responsive, pixel-perfect UI components.</p>

            <p>Integrated RESTful APIs, implementing robust error handling and data validation.</p>

            <p>Wrote unit and integration tests to ensure code quality and reliability.</p>

            <p>Collaborated with cross-functional teams to optimize user experience and application performance.</p>

            <p>Set up CI/CD pipelines for automated testing and deployment.</p>
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
    
    <p><strong>Major Subjects:</strong> 
      Data Structures & Algorithms, Operating Systems, Computer Networks, Digital Logic, Microprocessors, Software Engineering 
    </p>

    <p><strong>Advanced Courses:</strong> 
      Artificial Intelligence, Database Management Systems, Distributed Systems, Simulation & Modeling 
    </p>

    <p><strong>Electives:</strong> 
      Enterprise Computing, Big Data, Multimedia Technologies
    </p>
    <p>
    <strong>Software Engineering Project:</strong>  
    Zero Waste Kitchen – A Flutter app promoting food sustainability and waste reduction
    </p>

    <p>
    <strong>Minor Project:</strong>  
    Blood Donation Management Application
    </p>

    <p>
    <strong>Major Project:</strong>  
    NepaliVision+ – Enhancing accessibility of visual content through AI-generated Nepali captions and natural speech synthesis.
    </p>

    <p><strong>Extracurricular Activities:</strong>  
      Lead the Computer Club(i-CES) under the Department of Computer Engineering.<br></br>Organized and participated in tech-related workshops, hackathons, and coding competitions. <br></br> Lead the Volunteers and assisted the Technical team of college in organizing the <strong>15th IOE Graduate Conference at IOE Pashchimancal Campus. </strong>
    </p>
  </div>
</li>


          <li className="timeline-item">
            <h4 className="timeline-title">Gorkha Secondary School</h4>
            <span className="timeline-period">2018 - 2020 | Tulsipur Dang, Nepal</span>
            <div className="timeline-text">
              <p><strong>GPA:</strong> 3.85/4.0</p>
              <p><strong>Subjects Studied:</strong> Mathematics, Physics, Chemistry, Biology, and English</p>
              <p><strong>Achievements:</strong> Excelled in STEM subjects with a strong foundation in analytical and problem-solving skills.</p>
              <p><strong>Extracurricular Activities:</strong> Supported in the organization of the Annual Festival of School</p>
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
              <p>As the <strong>President</strong> of the club, I led a team of 20+ members in organizing technical events and workshops.</p>
              <p>Organized and conducted multiple coding workshops, competitions, and hackathons.</p>
              <p>Led <strong>Call For Enthusiast</strong> - a month-long technical training program teaching popular tech stacks to college students, for 3 years.</p>
              <p>Initiated and led <strong>AI Bootcamp</strong> - a year-long machine learning and deep learning mentorship program.</p>
              <p>Increased student participation in technical activities by 123%.</p>
              <p>Successfully organized <strong>EthosHack</strong>, a 24-hour regional cultural hackathon.</p>
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





