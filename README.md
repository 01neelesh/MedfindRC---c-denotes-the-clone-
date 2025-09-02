<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

</head>
<body>
  <h1>React + Firebase Firestore CRUD Template</h1>
  <p>
    This project is a simple <strong>React + Firebase Firestore CRUD template</strong> to perform 
    Create, Read, Update, and Delete operations in Firestore.  
    It includes example code for adding data, retrieving data, running queries, 
    and working with sub-collections.
  </p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Add data to Firestore</li>
    <li>Create sub-collections</li>
    <li>Get a single document</li>
    <li>Run Firestore queries</li>
    <li>Update and Delete support</li>
    <li>Reusable template for future projects</li>
  </ul>

  <h2>📂 Project Setup</h2>
  <pre>
git clone https://github.com/01neelesh/MedfindRC---c-denotes-the-clone-.git
cd &lt;your-repo-name&gt;
npm install
npm start
  </pre>

  <h2>⚙️ Firebase Config</h2>
  <p>
    Inside <code>firebase.js</code>, replace the placeholders with your Firebase config details:
  </p>
  <pre>
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
  </pre>

  <h2>📜 Usage</h2>
  <ul>
    <li><strong>Put Data:</strong> Adds a document to the <code>users</code> collection.</li>
    <li><strong>Put SubData:</strong> Adds a document to a sub-collection.</li>
    <li><strong>Get Document:</strong> Fetches a single document from Firestore.</li>
    <li><strong>Get Query:</strong> Runs a Firestore query with conditions.</li>
  </ul>

  <h2>👨‍💻 Author</h2>
  <p>
    <a href="https://www.linkedin.com/in/01neelesh/" target="_blank">Neelesh Chaturvedi</a>
  </p>
  <p>Made with 💗 by Neelesh</p>
</body>
</html>
