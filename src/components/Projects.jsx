import React, { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      icon: "🖼️",
      title: "NFT Marketplace",
      desc: "Blockchain Based NFT Marketplace using react and vite where user can buy, sell and mint exclusive NFT's. Securely managed on-chain.",
      link: "https://nft-marketplace-three-rosy.vercel.app"
    },
    {
      id: 2,
      icon: "📈",
      title: "Crypto Portfolio Tracker",
      desc: "Comprehensive Blockchain Crypto Portfolio, keeping track of your crypto assets and computing their real-time values based on live market data APIs.",
      link: "https://mycryptoportfoliotracker.vercel.app/"
    },
    {
      id: 3,
      icon: "🏥",
      title: "Pay-As-You-Recover",
      desc: "Medical EMI Calculator with Grace Period & Flexible Repayment. Adjusting EMI based on income capacity with real-time risk assessment.",
      link: "https://medical-emi-calculator.vercel.app/"
    },
    {
      id: 4,
      icon: "🩺",
      title: "MedChain",
      desc: "Blockchain-powered medical record security. Encrypt and upload records to IPFS, managing specific doctor access via Sepolia smart contracts.",
      link: "https://medchain-kappa.vercel.app/"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map(proj => (
          <div className="project-card" key={proj.id}>
            <div className="project-icon">{proj.icon}</div>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <button 
              onClick={() => setSelectedProject(proj)} 
              className="button2" 
              type="button"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
            <div className="project-icon" style={{fontSize: '60px'}}>{selectedProject.icon}</div>
            <h3>{selectedProject.title}</h3>
            <p style={{color: '#e0e0e0', lineHeight: 1.6}}>{selectedProject.desc}</p>
            <button 
              className="button" 
              onClick={() => window.open(selectedProject.link, '_blank')}
            >
              Open Live Project
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
