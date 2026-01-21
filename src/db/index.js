/**
 * Database module (fake in-memory DB for checkpoint).
 *
 * Why this exists:
 * - We need a predictable "connection" that works locally without installing a real DB.
 * - It tracks connection state so routes can report status and simulate queries.
 */

let state = {
  connected: false,
  url: "demo://local-db",
  lastConnectedAt: null,
  lastError: null,
};

/**
 * Connect to the database.
 * For this checkpoint, we simulate a connection. If DB_URL is set, we use it.
 */
function connect(url = process.env.DB_URL || state.url) {
  try {
    // Simulate success connection (in real life, you'd connect to Mongo/Postgres/etc.)
    state.connected = true;
    state.url = url;
    state.lastConnectedAt = new Date().toISOString();
    state.lastError = null;

    return { connected: state.connected, url: state.url };
  } catch (err) {
    state.connected = false;
    state.lastError = err?.message || "Unknown error";
    return { connected: state.connected, error: state.lastError };
  }
}

/**
 * Disconnect (simulated).
 */
function disconnect() {
  state.connected = false;
  return { connected: state.connected };
}

/**
 * Get current status (used by /api/db/status).
 */
function getStatus() {
  return { ...state };
}

/**
 * Example "query" so this module is more than just status flags.
 * This simulates a real DB call and returns predictable data.
 */
function query(sql = "SELECT 1") {
  if (!state.connected) {
    const msg = "Not connected. Call connect() first.";
    state.lastError = msg;
    return { ok: false, error: msg };
  }

  return {
    ok: true,
    query: sql,
    rows: [{ result: 1, time: new Date().toISOString() }],
  };
}

module.exports = {
  connect,
  disconnect,
  getStatus,
  query,
};
