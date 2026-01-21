// src/services/auth.service.js
function authenticate(email, password) {
  // demo auth rule for checkpoint (no real DB)
  const okEmail = typeof email === "string" && email.includes("@") && email.includes(".");
  const okPassword = typeof password === "string" && password.length >= 6;

  if (!okEmail || !okPassword) {
    return { ok: false, error: "Email must contain @ and . and password must be 6+ characters." };

  }

  // stub “token” (do NOT use in real apps)
  const token = Buffer.from(`${email}:${Date.now()}`).toString("base64");

  return {
    ok: true,
    user: { email },
    token,
  };
}

module.exports = { authenticate };
