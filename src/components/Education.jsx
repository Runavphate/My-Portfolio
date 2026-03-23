import React from 'react';

function Education() {
  return (
    <section id="education">
      <h2>Academic Journey</h2>
      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-date">2024 - Present</div>
          <div className="timeline-content">
            <h3>Savitaibai Phule Pune University (SPPU)</h3>
            <p>Second Year Bachelor's student deeply engaged in Blockchain Technology under the Science Faculty, specializing in distributed ledgers and smart contract architecture.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-date">2023 - 2024</div>
          <div className="timeline-content">
            <h3>Senior Secondary (11th & 12th Grade)</h3>
            <p>Completed higher secondary education focusing on rigorous technical and analytical studies under the Science Faculty framework.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
