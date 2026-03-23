import React from 'react';

function Contact() {
  const submitForm = (e) => {
    e.preventDefault();
    alert("Response Recorded");
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
      <a href="mailto:phaterunav@gmail.com" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-label="Email">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"/>
        </svg>
      </a>
      <a href="https://github.com/Runavphate" target="_blank" rel="noopener noreferrer">
        <img src="/Sources/Github.svg" alt="GitHub" width="85" />
      </a>
      <a href="https://www.linkedin.com/in/runav-phate-221147322" target="_blank" rel="noopener noreferrer">
        <img src="/Sources/Linkedin.png" alt="LinkedIn" width="50" />
      </a>

      <div className="container">
        <form onSubmit={submitForm}>
          <input type="text" id="fname" name="fname" placeholder="Your name" required />
          <textarea id="subject" name="subject" placeholder="Message" required></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
