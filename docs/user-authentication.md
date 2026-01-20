# User Authentication Feature (UI Enhancements)

Branch: `feature/user-authentication`  
Related Issue: #1

## What was added
This branch improves the login page user experience by adding:

- Inline validation for email and password fields
- Clear error messages shown under each input
- Submit button disabled until inputs are valid
- Show/Hide password toggle button
- Simple “Signing in…” loading state when the form is submitted (demo)

## Validation rules
- Email must include `@` and `.`
- Password must be at least 6 characters

## Notes
This is a front-end demo enhancement only.
Backend authentication will be implemented later in API work.

## Password toggle
The password field includes a Show/Hide toggle button so the user can temporarily view their password while typing.

