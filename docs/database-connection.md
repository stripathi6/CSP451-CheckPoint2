# Database Connection Feature (Fake In-Memory DB)

Branch: `feature/database-connection`  
Related Issue: #2

## What was added
This branch adds a fake in-memory database module so the app can simulate database behavior without installing MongoDB/Postgres.

### Included functionality
- Track connection state (`connected`, `url`, `lastConnectedAt`, `lastError`)
- Connect/disconnect functions
- Status endpoint
- Demo query endpoint

## API endpoints
- `GET /api/db/status`
- `POST /api/db/connect`
- `POST /api/db/disconnect`
- `GET /api/db/query?sql=SELECT%201`

## Notes
This is only a local demo implementation for the checkpoint.
A real DB driver can replace this module later.
