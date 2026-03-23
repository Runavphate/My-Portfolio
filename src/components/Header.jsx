import React from 'react';

function Header() {
  return (
    <div className="sidebar">
      <img className="photo" src="/Images/My Photo.jpg" alt="My Photo" />
      <header>
        <h1>Runav Phate</h1>
        <p>Blockchain Technology Student</p>
      </header>
      <nav>
        <ul>
          <li><a className="active" href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certification">Certifications</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
