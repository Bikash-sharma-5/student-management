# Student Management System

A web-based Student Management System built using **React** for the frontend and **Firebase** for the backend. This project allows administrators, teachers, and students to manage academic records efficiently.
![Screenshot 2025-01-25 104952](https://github.com/user-attachments/assets/6592600d-ee2e-410c-b604-862c7704d483)
![Screenshot 2025-01-25 105031](https://github.com/user-attachments/assets/efaecb5d-1711-4e16-8e86-c86459166d65)

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Student Records Management**: CRUD (Create, Read, Update, Delete) operations for student data.
- **Role-based Access**: Different views and permissions for Admins, Teachers, and Students.
- **Real-time Database**: Firebase Firestore for storing and retrieving data in real time.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Demo

[Live Demo](#) (Add link to your deployed project here.)

## Technologies Used

### Frontend
- **React**: UI development.
- **Tailwind CSS**: Styling.
- **React Router**: Navigation.
- **Axios**: HTTP requests.

### Backend
- **Firebase**: Authentication, Firestore database, and hosting.

## Installation

Follow these steps to run the project locally:

### Prerequisites
- Node.js and npm installed.
- Firebase project configured (see [Firebase Setup](#firebase-setup)).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/student-management-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd student-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up Firebase configuration in `.env`:
   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```
5. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable **Authentication**:
   - Go to **Authentication** > **Sign-in Method**.
   - Enable the desired sign-in providers (e.g., Email/Password).
4. Set up **Firestore Database**:
   - Go to **Firestore Database** > **Create Database**.
   - Choose a security rule that fits your use case.
5. Obtain Firebase config credentials from the **Project Settings**.

## Project Structure
```
student-management-system/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   └── Shared/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── utils/
├── .env
├── package.json
└── README.md
```

## Features Overview

### Admin Dashboard
- View all registered students and teachers.
- Add, update, or delete student/teacher records.
- Assign roles to users.

### Teacher Dashboard
- View assigned students.
- Update student grades and attendance.

### Student Dashboard
- View personal academic records and attendance.
- Update profile information.

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

Ensure Firebase Hosting is enabled in your Firebase project.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

