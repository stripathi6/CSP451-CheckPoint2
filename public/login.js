/**
 * Enhanced login behavior (feature/user-authentication)
 * Adds:
 *  - Inline validation (email + password)
 *  - UI feedback (errors + submit enabled/disabled)
 *  - Basic loading state on submit
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("message");

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Validation helpers
  function isValidEmail(value) {
    // simple check for this assignment (functional, not perfect)
    return value.includes("@") && value.includes(".");
  }

  function isValidPassword(value) {
    return value.trim().length >= 6;
  }

  function setText(el, text) {
    if (!el) return;
    el.textContent = text;
  }

  function clearMessage() {
    setText(message, "");
  }

  function validate() {
    const email = (emailInput?.value || "").trim();
    const password = passwordInput?.value || "";

    let ok = true;

    // Email checks
    if (!email) {
      setText(emailError, "Email is required.");
      ok = false;
    } else if (!isValidEmail(email)) {
      setText(emailError, "Please enter a valid email address.");
      ok = false;
    } else {
      setText(emailError, "");
    }

    // Password checks
    if (!password) {
      setText(passwordError, "Password is required.");
      ok = false;
    } else if (!isValidPassword(password)) {
      setText(passwordError, "Password must be at least 6 characters.");
      ok = false;
    } else {
      setText(passwordError, "");
    }

    // Disable submit if invalid
    if (loginBtn) loginBtn.disabled = !ok;

    return ok;
  }

  // Live validation on typing
  emailInput?.addEventListener("input", () => {
    clearMessage();
    validate();
  });

  passwordInput?.addEventListener("input", () => {
    clearMessage();
    validate();
  });

  // Initial state
  validate();

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    clearMessage();

    const ok = validate();
    if (!ok) {
      setText(message, "Please fix the errors above.");
      return;
    }

    // Basic loading state (demo)
    const originalText = loginBtn?.textContent || "Sign in";
    if (loginBtn) {
      loginBtn.disabled = true;
      loginBtn.textContent = "Signing in...";
    }

    // Simulate a login request
    setTimeout(() => {
      setText(message, "Login submitted (demo). Authentication will be implemented later.");
      if (loginBtn) {
        loginBtn.textContent = originalText;
      }
      // Re-validate to enable button again if still valid
      validate();
    }, 900);
  });
});
