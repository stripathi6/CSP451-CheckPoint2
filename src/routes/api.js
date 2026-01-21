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
  res.json({ status: "ok", time: new Date().toISOString() });
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

module.exports = { router };
