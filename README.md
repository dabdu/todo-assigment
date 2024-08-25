# Todo List Application with Firebase Authentication

This project is a web application built using Next.js, styled with Tailwind CSS, and integrated with Firebase for authentication and real-time data management. The application features a user-friendly interface for managing a to-do list, aligned with the design provided in the Figma file.

# Key Features

1. Login and Signup Pages:

   - The pages are styled according to the Figma design, ensuring a cohesive user experience.
   - The signup form includes fields for Name, Email, Password, and Confirm Password.
   - Firebase Authentication handles secure user registration and login.

2. Todo List CRUD Operations:

   - Create: Users can add new todo items.
   - Read: The application retrieves and displays the user's todo items in real-time from Firebase Firestore.
   - Update: Users can edit and update existing todo items and toggle their completion status.
   - Delete: Users can remove todo items from their list.

3. Firebase Integration:

   - Firebase Firestore is used for real-time data storage and retrieval of todo items.
   - Firebase Authentication manages user authentication and sessions.

4. Optimized Performance:
   - The app is built with performance optimization in mind, ensuring fast load times and a smooth user experience.

# Technology Stack

- Next.js: A React framework for building fast, scalable web applications with server-side rendering and static site generation.
- Tailwind CSS: A utility-first CSS framework for styling.
- Firebase: A comprehensive backend platform for web and mobile applications, providing real-time databases and authentication.

# Environment Variables

To run this project locally, you'll need a `.env` file with Firebase configuration details.

You can use your own Firebase configuration values or the ones provided in the `.env` file attached to the submission email. The `.env` file should contain the following environment variables:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

Ensure you replace these values with your Firebase project credentials if you're using your own setup.

# Getting Started

To run this project locally:

1. Clone the repository from GitHub.
2. Install dependencies using:
   `npm install`
3. Add the provided `.env` file to the root directory of your project.
4. Start the development server:
   `npm run dev`

# Conclusion

This project showcases the integration of Next.js with Firebase to create a functional to-do list application, demonstrating effective use of modern web technologies for a seamless user experience.
