interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <button
            className={`navbar-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => onPageChange('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={`navbar-link ${activePage === 'resume' ? 'active' : ''}`}
            onClick={() => onPageChange('resume')}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            className={`navbar-link ${activePage === 'portfolio' ? 'active' : ''}`}
            onClick={() => onPageChange('portfolio')}
          >
            Portfolio
          </button>
        </li>
      </ul>
    </nav>
  );
}