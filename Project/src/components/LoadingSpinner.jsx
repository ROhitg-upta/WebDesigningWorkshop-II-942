import React from "react";

function LoadingSpinner() {
  return (
    <div className="loading-wrap">
      <div className="spinner" aria-label="Loading products"></div>
      <p>Loading today's best deals...</p>
    </div>
  );
}

export default LoadingSpinner;
