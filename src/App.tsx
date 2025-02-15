import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [activePage, setActivePage] = useState('about');

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} onPageChange={setActivePage} />
        {activePage === 'about' && <About />}
        {activePage === 'portfolio' && <Portfolio />}
        {activePage === 'resume' && <Resume />}
      </div>
    </main>
  );
}

export default App;