import React from "react";

function Hero({ onShopNow }) {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">Great Indian Store</p>
        <h1>Everything you need, delivered in one smart mini project.</h1>
        <p>
          Explore electronics, fashion, books, beauty, and home essentials with
          a responsive Amazon-style shopping experience.
        </p>
        <button className="primary-button" onClick={onShopNow}>
          Shop Today's Deals
        </button>
      </div>

      <div className="hero-offer" aria-label="Special offer">
        <span>Deal of the day</span>
        <strong>Up to 60% off</strong>
        <small>on selected tech essentials</small>
      </div>
    </section>
  );
}

export default Hero;
