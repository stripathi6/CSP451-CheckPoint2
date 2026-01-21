# API Endpoints Feature

Branch: `feature/api-endpoints`  
Related Issue: #3

## What was added
This branch expands the API structure by adding:

- Modular routing under `/api`
- A version/info endpoint
- A stub authentication endpoint (POST)
- Controller + service structure for cleaner organization

## Endpoints

### GET /api/health
Returns a basic health response.

### GET /api/version
Returns app version and environment info.

### POST /api/auth/login
Stub login endpoint for checkpoint testing.

**Body (JSON):**
```json
{ "email": "test@example.com", "password": "secret12" }
Branch: `feature/api-endpoints-fix`  
Related Issue: #3

## What was added
This branch expands the Express API structure by adding:

- `/api/health` (GET) to confirm API is running
- `/api/version` (GET) to display basic app/version info
- Modular route support using `auth.routes.js`

## How to test

### Test /api/health in browser
Open:

http://localhost:3000/api/health

### Test /api/version using curl
```bash
curl http://localhost:3000/api/version
