import React from 'react';

function Certifications() {
  const openImage = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <section id="certification">
      <h2>Certifications</h2>
      <div className="certs-grid">
        <div className="cert-card">
          <div className="cert-cover-wrapper">
            <img src="/Images/Frontend.JPG" alt="Front End Certificate" className="cert-cover" />
          </div>
          <div className="cert-content">
            <h3>Front End Development</h3>
            <p>Certified in front-end development by FreeCodeCamp, Skilled in HTML, CSS, and JavaScript.</p>
            <button onClick={() => openImage('/Images/Frontend.JPG')} className="button2" type="button">View Certificate</button>
          </div>
        </div>
        
        <div className="cert-card">
          <div className="cert-cover-wrapper">
            <img src="/Images/Web.JPG" alt="Responsive Design Certificate" className="cert-cover" />
          </div>
          <div className="cert-content">
            <h3>Responsive Web Design</h3>
            <p>Certified in responsive web design by FreeCodeCamp, ensuring web accessibility across all devices.</p>
            <button onClick={() => openImage('/Images/Web.JPG')} className="button2" type="button">View Certificate</button>
          </div>
        </div>

        <div className="cert-card">
          <div className="cert-cover-wrapper">
            <img src="/Images/Python.JPG" alt="Python Certificate" className="cert-cover" />
          </div>
          <div className="cert-content">
            <h3>Python</h3>
            <p>Certified in Python by GeeksofGeeks, capable to creating Software and Web pages.</p>
            <button onClick={() => openImage('/Images/Python.JPG')} className="button2" type="button">View Certificate</button>
          </div>
        </div>

        <div className="cert-card">
          <div className="cert-cover-wrapper">
            <img src="/Images/java.jpg" alt="Java Certificate" className="cert-cover" />
          </div>
          <div className="cert-content">
            <h3>Java</h3>
            <p>Certified in Java by Mindluster, showcasing proficiency in mobile and web application development.</p>
            <button onClick={() => openImage('/Images/java.jpg')} className="button2" type="button">View Certificate</button>
          </div>
        </div>

        <div className="cert-card">
          <div className="cert-cover-wrapper">
            <img src="/Images/Autocad.jpeg" alt="AutoCAD Certificate" className="cert-cover" />
          </div>
          <div className="cert-content">
            <h3>AutoCAD</h3>
            <p>Certified in AutoCAD by Disha Computer Institute, capable of creating detailed 2D and 3D engineering drawings.</p>
            <button onClick={() => openImage('/Images/Autocad.jpeg')} className="button2" type="button">View Certificate</button>
          </div>
        </div>

        <div className="cert-card">
          <div className="cert-cover-wrapper">
            <img src="/Images/Blockchain.jpg" alt="Blockchain Certificate" className="cert-cover" />
          </div>
          <div className="cert-content">
            <h3>Blockchain</h3>
            <p>Certified in Blockchain 101 by Infosys Springboard, capable to do tasks related to blockchain.</p>
            <button onClick={() => openImage('/Images/Blockchain.jpg')} className="button2" type="button">View Certificate</button>
          </div>
        </div>

        <div className="cert-card">
          <div className="cert-cover-wrapper">
            <img src="/Images/Full Stack.png" alt="Full-Stack Certificate" className="cert-cover" />
          </div>
          <div className="cert-content">
            <h3>Full-Stack Web-Development</h3>
            <p>Certified in Full-Stack Web-Development by Udemy, Dr. Angela Yu, capable to Make Websites/Apps.</p>
            <button onClick={() => openImage('/Images/Full Stack.png')} className="button2" type="button">View Certificate</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
