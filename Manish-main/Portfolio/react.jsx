import React, { useState } from 'react';
import React from 'eact';
import { FaFacebook, FaTwitter, FaInstagram } from 'eact-icons/fa';
//navbar 

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkHover = (index) => {
    setActiveLink(index);
  };

  const handleLinkLeave = () => {
    setActiveLink(null);
  };
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="Images/logo1.png" alt="IT Wallah"></img></div>
      <div className="toggle-button">
        <span className="bar"></span>
      </div>
      <ul className="nav-links">
        {['HOME', 'QUALIFICATION', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'CERTIFICATIONS', 'AWARDS', 'CONTACT ME'].map((link, index) => (
          <li key={index}>
            <a
              href="#"
              onMouseEnter={() => handleLinkHover(index)}
              onMouseLeave={handleLinkLeave}
              className={activeLink === index ? 'active' : ''}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// home page 

const Portfolio = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <div>
      <h2>I'm a passionate Video Maker</h2>
      <p>Highly motivated and dedicated MCA student. Proficient in Java and SQL 
				with a hunger to learn and contribute. Ready to embark on a successful
				journey in Software Development. I am an adaptable and responsible person
				seeking a position in an IT position. Looking forward an opportunities
				to work in a progressive and challenging environment,where I   enhance
				my skill and knowledge. The ability to achieve perfection in one’s work
				through hard-work. To work in a good organization, utilize my potential,
				knowledge and skills there in the way that satisfactory result may be achieved.</p>
      <button onClick={downloadCV}>Download CV</button>
    </div>
  );
};

function ResponsiveImageText() {
  return (
    <div id="container">
      <div id="image">
        <img src="Images/manish1.png" alt="An image" />
      </div>
    </div>
  );
}

// awards















//footer

const Footer = () => {
  return (
    <footer>
      &copy; 2023 My Company | <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a> <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </footer>
  );
};

