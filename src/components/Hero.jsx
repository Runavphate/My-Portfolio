import React from 'react';

function Hero() {
  return (
    <section id="learn-more">
      <h2 className="myinfo">Hello, I am <span className="name">Runav Phate</span></h2>
      <h3 className="myinfo2">Blockchain Technology Student</h3>
      <a href="#about">
        <button className="button" type="button">
          <span className="button-content">Learn More</span>
        </button>
      </a>
    </section>
  );
}

export default Hero;
