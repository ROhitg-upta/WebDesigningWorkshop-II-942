import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to top
      </button>

      <div className="footer-grid">
        <div>
          <h3>Get to Know Us</h3>
          <a href="#products">About this project</a>
          <a href="#products">Careers demo</a>
          <a href="#products">Student showcase</a>
        </div>
        <div>
          <h3>Connect With Us</h3>
          <a href="#products">Instagram</a>
          <a href="#products">LinkedIn</a>
          <a href="#products">GitHub</a>
        </div>
        <div>
          <h3>Make Money With Us</h3>
          <a href="#products">Sell on Amazon Clone</a>
          <a href="#products">Advertise products</a>
          <a href="#products">Affiliate demo</a>
        </div>
        <div>
          <h3>Let Us Help You</h3>
          <a href="#products">Your Account</a>
          <a href="#products">Returns Centre</a>
          <a href="#products">Help</a>
        </div>
      </div>

      <p className="footer-note">
        Built for educational use as a React frontend mini project. Images are
        loaded from royalty-free Unsplash URLs.
      </p>
    </footer>
  );
}

export default Footer;
