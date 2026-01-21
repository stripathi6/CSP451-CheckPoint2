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
