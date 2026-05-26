import React, { useState } from "react";

function AuthModal({ isOpen, mode, onModeChange, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  if (!isOpen) {
    return null;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(mode, formData);
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" onClick={onClose} aria-label="Close">
          x
        </button>

        <div className="auth-logo">amazon</div>
        <div className="auth-tabs">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => onModeChange("login")}
          >
            Login
          </button>
          <button
            className={mode === "register" ? "active" : ""}
            onClick={() => onModeChange("register")}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <h2 id="auth-title">
            {mode === "login" ? "Sign in to your account" : "Create account"}
          </h2>

          {mode === "register" && (
            <label>
              Full name
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          )}

          <label>
            Email address
            <input
              type="email"
              name="email"
              placeholder="student@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <button className="amazon-button wide" type="submit">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default AuthModal;
