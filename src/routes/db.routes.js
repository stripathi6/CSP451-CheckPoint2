const express = require("express");
const router = express.Router();

const db = require("../db");

// demo auto-connect so /status shows connected: true
db.connect();

// GET /api/db/status
router.get("/status", (req, res) => {
  res.json(db.getStatus());
});

// POST /api/db/connect
// Body optional: { "url": "demo://something" }
router.post("/connect", (req, res) => {
  const url = req.body?.url; // optional
  const result = db.connect(url);
  res.status(200).json({ ok: true, result, status: db.getStatus() });
});

// POST /api/db/disconnect
router.post("/disconnect", (req, res) => {
  const result = db.disconnect();
  res.status(200).json({ ok: true, result, status: db.getStatus() });
});

// GET /api/db/query?sql=SELECT%201
router.get("/query", (req, res) => {
  const sql = req.query.sql || "SELECT 1";
  res.json(db.query(sql));
});

module.exports = router;
