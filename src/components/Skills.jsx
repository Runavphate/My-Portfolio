import React from 'react';

function Skills() {
  const renderSkills = () => (
    <>
      <div className="skill">
        <img src="/Sources/C++.png" alt="C and C++" />
        <h3>C & C++</h3>
      </div>
      <div className="skill">
        <img src="/Sources/PowerBI.png" alt="Power BI" />
        <h3>Power BI</h3>
      </div>
      <div className="skill">
        <img src="/Sources/HTML.png" alt="HTML/CSS" />
        <h3>HTML & CSS</h3>
      </div>
      <div className="skill">
        <img src="/Sources/Dapps.png" alt="DApps" />
        <h3>Web3 DApps</h3>
      </div>
      <div className="skill">
        <img src="/Sources/Solidity.png" alt="Solidity" />
        <h3>Solidity</h3>
      </div>
      <div className="skill">
        <img src="/Sources/React.png" alt="React" />
        <h3>React.js</h3>
      </div>
      <div className="skill">
        <img src="/Sources/Java.png" alt="Java" />
        <h3>Java</h3>
      </div>
      <div className="skill">
        <img src="/Sources/JavaScript.png" alt="JavaScript" />
        <h3>JavaScript</h3>
      </div>
    </>
  );

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="marquee">
        <div className="marquee-content">
          {renderSkills()}
          {renderSkills()}
        </div>
      </div>
    </section>
  );
}

export default Skills;
