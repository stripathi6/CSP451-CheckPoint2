# API Endpoints Feature

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
