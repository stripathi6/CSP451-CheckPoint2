/**
 * Database module (Checkpoint demo).
 *
 * Why: Centralize DB "connection" logic so routes/controllers don't duplicate it.
 * Note: This is a simulated DB connection (no real DB server required).
 */

let isConnected = false;
let lastConnectedAt = null;
let lastError = null;

function getDbUrl() {
  // Use env var if set, otherwise safe demo value
  return process.env.DB_URL || "demo://local-db";
}

function redactUrl(url = "") {
  // Avoid leaking credentials in logs/responses
  return url.replace(/:\/\/([^@]+)@/, "://***@");
}

function getStatus() {
  return {
    connected: isConnected,
    lastConnectedAt,
    lastError,
    url: redactUrl(getDbUrl()),
  };
}

async function connect(options = {}) {
  const { retries = 2, delayMs = 200 } = options;
  const url = getDbUrl();

  if (!url || typeof url !== "string") {
    lastError = "DB_URL is missing or invalid";
    isConnected = false;
    return { ok: false, error: lastError };
  }

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      // simulate async connection time
      await new Promise((r) => setTimeout(r, delayMs));

      // allow testing failure path
      if (url.includes("fail")) {
        throw new Error("Simulated DB connection failure");
      }

      isConnected = true;
      lastConnectedAt = new Date().toISOString();
      lastError = null;

      return { ok: true, attempt, lastConnectedAt, url: redactUrl(url) };
    } catch (err) {
      isConnected = false;
      lastError = err.message || String(err);

      if (attempt === retries + 1) {
        return { ok: false, attempt, error: lastError, url: redactUrl(url) };
      }
    }
  }
}

function disconnect() {
  isConnected = false;
  return { ok: true };
}

module.exports = {
  connect,
  disconnect,
  getStatus,
};
