<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 900px; margin: auto;">

  <h1>⚡ Firebase Sci-Fi Demo App</h1>
  <p>
    A <strong>futuristic React + Firebase emulator playground</strong> where you can test 
    <strong>Firestore, Storage, Functions, and Authentication</strong> — all locally with the Firebase Emulator Suite.<br>
    Styled with a <strong>sci-fi neon UI</strong> for a dashing dashboard look 🚀
  </p>

  <hr>

  <h2>🎥 Demo Video</h2>
  <p>
    ▶️ <a href="https://drive.google.com/file/d/1TzG_L3CSJF5Ulc_-4kjegLB5wTZPeDmn/view?usp=sharing" target="_blank">
      Watch Demo
    </a>
  </p>

  <hr>

  <h2>✨ Features</h2>
  <ul>
    <li>🔥 <strong>Authentication (Email/Password)</strong> – Register & login users locally</li>
    <li>📖 <strong>Firestore Integration</strong> – Add, list, and manage structured data</li>
    <li>📦 <strong>Storage Integration</strong> – Upload & view files</li>
    <li>⚙️ <strong>Cloud Functions</strong> – Call local Firebase functions via <code>httpsCallable</code></li>
    <li>🧪 <strong>Full Emulator Support</strong> – No paid Firebase plan needed</li>
    <li>🎨 <strong>Sci-Fi UI</strong> – Neon glowing responsive dashboard with smooth hover animations</li>
    <li>📱 <strong>Responsive Design</strong> – Works on desktop and mobile</li>
  </ul>

  <hr>

  <h2>🚀 Tech Stack</h2>
  <ul>
    <li>React (with React Router v6 for navigation)</li>
    <li>Firebase SDK (Firestore, Storage, Functions, Auth)</li>
    <li>Firebase Emulator Suite</li>
    <li>Custom CSS (Neon sci-fi design)</li>
  </ul>

  <hr>

  <h2>📂 Project Structure</h2>
  <pre>
src/
│── App.jsx            # Main UI & Router
│── App.css            # Sci-Fi styling
│── firebase.js        # Firebase initialization & emulator connections
│── pages/
│    ├── FirestorePage.jsx
│    ├── StoragePage.jsx
│    ├── FunctionsPage.jsx
│    └── Auth.jsx
  </pre>

  <hr>

  <h2>⚙️ Setup & Run Locally</h2>
  <ol>
    <li><strong>Clone Repo</strong>
      <pre>git clone https://github.com/yourusername/firebase-sci-fi-demo.git
cd firebase-sci-fi-demo</pre>
    </li>
    <li><strong>Install Dependencies</strong>
      <pre>npm install</pre>
    </li>
    <li><strong>Add Firebase Config</strong><br>
      In <code>firebase.js</code>, replace with your Firebase config from console.
    </li>
    <li><strong>Start Firebase Emulators</strong>
      <pre>firebase emulators:start</pre>
    </li>
    <li><strong>Run React App</strong>
      <pre>npm start</pre>
    </li>
  </ol>

  <hr>

  <h2>📸 Screenshots</h2>
  <p><strong>🔑 Auth Page</strong><br>Register & login with email/password.</p>
  <p><strong>🏠 Firestore Page</strong><br>List & manage demo records.</p>
  <p><strong>📦 Storage Page</strong><br>Upload & preview files locally.</p>
  <p><strong>⚙️ Functions Page</strong><br>Call local <code>helloUser</code> function.</p>

  <hr>

  <h2>🤝 Author</h2>
  <p>
    👨‍💻 <a href="https://www.linkedin.com/in/01neelesh/" target="_blank">Neelesh Chaturvedi</a><br>
    ✨ Made with 💗 by Neelesh
  </p>

</body>
</html>
