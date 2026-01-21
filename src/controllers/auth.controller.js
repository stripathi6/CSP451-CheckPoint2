// src/controllers/auth.controller.js
const { authenticate } = require("../services/auth.service");

function login(req, res) {
  const { email, password } = req.body || {};

  const result = authenticate(email, password);

  if (!result.ok) {
    return res.status(400).json({
      ok: false,
      error: result.error,
      hint: "Email must contain @ and . and password must be 6+ chars",
    });
  }

  return res.status(200).json({
    ok: true,
    message: "Login success (stub). Backend auth will be added later.",
    ...result,
  });
}

module.exports = { login };
