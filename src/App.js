import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Axis from './components/Axis';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('About');

  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Experience':
        return <Experience />;
      case 'Axis':
        return <Axis />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Header />
      <nav className="navbar">
        {['About', 'Skills', 'Experience', 'Axis', 'Contact'].map((section) => (
          <button
            key={section}
            className={`nav-button ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </nav>
      <main>{renderSection()}</main>
    </div>
  );
}

export default App;
