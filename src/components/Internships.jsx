import React from 'react';

function Internships() {
  const openImage = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <section id="internships">
      <h2>Internships</h2>
      <div className="certs-grid">
        <div className="cert-card">
          <div className="cert-cover-wrapper">
            <img 
              src="https://media.licdn.com/dms/image/v2/D562DAQE36Y7kNkZDQw/profile-treasury-image-shrink_800_800/B56Zfpu2LOHEAY-/0/1751973062123?e=1774890000&v=beta&t=XRhQHnIJ1gJsB53QFHJFytu1YCN_fCsYyXWySslJKkY" 
              alt="Internship Certificate" 
              className="cert-cover" 
            />
          </div>
          <div className="cert-content">
            <h3>Professional Internship</h3>
            <p>Completed an enriching internship program, successfully applying academic knowledge to real-world environments.</p>
            <button 
              onClick={() => openImage('https://media.licdn.com/dms/image/v2/D562DAQE36Y7kNkZDQw/profile-treasury-image-shrink_800_800/B56Zfpu2LOHEAY-/0/1751973062123?e=1774890000&v=beta&t=XRhQHnIJ1gJsB53QFHJFytu1YCN_fCsYyXWySslJKkY')} 
              className="button2" 
              type="button"
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Internships;
