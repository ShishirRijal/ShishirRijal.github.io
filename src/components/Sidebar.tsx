import { useState } from 'react';
import { ChevronDown, Mail, MapPin, Linkedin, Github, Facebook } from 'lucide-react';

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img 
            src="/assets/images/shishir/shishir.png" 
            alt="Shishir Rijal" 
          />
        </figure>

        <div className="info-content">
          <h1 className="name">Shishir Rijal</h1>
          <p className="title">Mobile App Developer</p>
        </div>

        <button 
          className="toggle-btn"
          onClick={() => setIsActive(!isActive)}
          aria-label="Toggle Sidebar Content"
        >
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ${
              isActive ? 'rotate-180' : ''
            }`} 
          />
        </button>
      </div>

      <div className={`collapsible-content ${isActive ? 'active' : ''}`}>
        <div className="contacts-list">
          <a href="mailto:ccrrizal@gmail.com" className="contact-item group hover:bg-red-500/10 transition-colors">
            <div className="icon-box group-hover:bg-red-500">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-400 group-hover:text-red-400">Email</p>
              <p className="text-sm font-medium group-hover:text-red-500">ccrrizal@gmail.com</p>
            </div>
          </a>

          <div className="contact-item group hover:bg-purple-500/10">
            <div className="icon-box group-hover:bg-purple-500">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-400 group-hover:text-purple-400">Location</p>
              <p className="text-sm font-medium group-hover:text-purple-500">Tulsipur, Nepal 🇳🇵</p>
            </div>
          </div>

          <a href="https://www.linkedin.com/in/ShishirRijal" target="_blank" rel="noopener noreferrer" 
            className="contact-item group hover:bg-blue-600/10">
            <div className="icon-box group-hover:bg-blue-600">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-400 group-hover:text-blue-500">LinkedIn</p>
              <p className="text-sm font-medium group-hover:text-blue-600">ShishirRijal</p>
            </div>
          </a>

          <a href="https://github.com/ShishirRijal" target="_blank" rel="noopener noreferrer" 
            className="contact-item group hover:bg-gray-700/10">
            <div className="icon-box group-hover:bg-gray-700">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-400 group-hover:text-gray-400">GitHub</p>
              <p className="text-sm font-medium group-hover:text-gray-500">ShishirRijal</p>
            </div>
          </a>

          <a href="https://facebook.com/iShishirRijal" target="_blank" rel="noopener noreferrer" 
            className="contact-item group hover:bg-blue-500/10">
            <div className="icon-box group-hover:bg-blue-500">
              <Facebook className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-400 group-hover:text-blue-400">Facebook</p>
              <p className="text-sm font-medium group-hover:text-blue-500">Shishir Rijal</p>
            </div>
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © 2025 Shishir Rijal
        </div>
      </div>
    </aside>
  );
}