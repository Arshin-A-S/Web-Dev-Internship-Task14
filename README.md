# Task 14: Client-Side Authentication Flow Using LocalStorage
In this task, I developed a functional login and registration system entirely on the frontend. By leveraging the Web Storage API, I simulated a complete user authentication lifecycle—from account creation and credential validation to session persistence and protected route redirection.

## Key Accomplishments
* State-Based UI Management: Engineered a dynamic interface that toggles between registration, login, and dashboard views. I used JavaScript to manipulate the DOM, ensuring that protected content is only rendered once a valid "session" is detected.

* Mock Database Implementation: Utilized localStorage to persist user credentials as key-value pairs. This allowed me to simulate a database environment where user data remains intact even after a browser refresh, providing a seamless "remember me" experience.

* Authentication Logic & Validation: Developed a validation script that captures form input, retrieves stored data, and performs a comparison check. I implemented conditional logic to handle success and error states, providing real-time feedback to the user via dynamic alerts and UI changes.

* Session Persistence & Security Simulation: Created a "session key" mechanism to track the user's logged-in status. I integrated a window.onload check to verify this status immediately, preventing unauthorized access to the dashboard and ensuring a persistent authenticated state.

* Secure Logout Architecture: Implemented a logout function that explicitly clears session data from the client's storage. This ensures the authentication token is destroyed, effectively restricting access until the next valid login.

* Frontend-Only Documentation: Maintained clear documentation within the codebase highlighting that this is a client-side-only implementation. This serves as a reminder that while this flow mimics real-world logic, production systems require backend hashing and server-side verification for actual security.
