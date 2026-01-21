const express = require("express");
const router = express.Router();

const authRouter = require("./auth.routes");

/**
 * Starter endpoint to prove the API works.
 * Feature branch: feature/api-endpoints expands this structure:
 * - add route modules, controllers, and validation
 * - add at least one POST endpoint
 */

router.get("/health", (req, res) => {
  res.json({
    ok: true,
    data: { status: "ok", time: new Date().toISOString() },
    error: null,
  });
});


// NEW: mount auth routes under /api/auth
router.use("/auth", authRouter);

// NEW: simple info endpoint
router.get("/version", (req, res) => {
  res.json({
    app: "csp451-web-starter",
    version: "1.0.0",
    env: process.env.NODE_ENV || "dev",
  });
});

// POST /api/echo
// Body: { "message": "hello" }
router.post("/echo", (req, res) => {
  const message = req.body?.message;

  if (!message || typeof message !== "string" || message.trim().length < 2) {
    return res.status(400).json({
      ok: false,
      data: null,
      error: "message is required and must be at least 2 characters",
    });
  }

  return res.status(200).json({
    ok: true,
    data: { echoed: message.trim(), length: message.trim().length },
    error: null,
  });
});


module.exports = { router };
