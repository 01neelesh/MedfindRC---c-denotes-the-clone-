import {
  addDoc,
  collection,
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc
} from "firebase/firestore";
import { app } from "./firebase";
import "./App.css";

const firestoreDB = getFirestore(app);

function App() {
  //  Add user document here you can see user is a collection
  // ✅ Create document
  const writeData = async () => {
    try {
      const result = await addDoc(collection(firestoreDB, "users"), {
        name: "Tushar",
        age: 25,
        address: "city street Vice city",
        pin: 500012,
      });
      window.alert(`User added successfully! Document ID: ${result.id}`);
    } catch (error) {
      window.alert("Error adding user: " + error.message);
    }
  };

  // ✅ Add sub-collection document
  const makeSubCollection = async () => {
    try {
      await addDoc(
        collection(firestoreDB, "users/BOssgghIyNQVvNV6FaWI/Pharmacy"),//Pharmacy is sub-collection
        {
          StoreName: "Tushar Pharmacy",
          Area: "Tiloniya",
          PharmacyType: "Generic Medicine Store",
          License: "Authorized",
        }
      );
      window.alert("Pharmacy added inside user's sub-collection!");
    } catch (error) {
      window.alert("Error adding pharmacy: " + error.message);
    }
  };

  // ✅ Get single document
  const getDocument = async () => {
    try {
      const ref = doc(firestoreDB, "Inventory", "ciYQYY5yKF4JmG4cK75n");
      const snap = await getDoc(ref);
      if (snap.exists()) {
        window.alert("Document Data: " + JSON.stringify(snap.data(), null, 2));
      } else {
        window.alert("No such document found!");
      }
    } catch (error) {
      window.alert("Error fetching document: " + error.message);
    }
  };

  // ✅ Query users by pin
  const getQuery = async () => {
    try {
      const queryRef = query(
        collection(firestoreDB, "users"),
        where("pin", "==", 500012)
      );
      const querySnapshot = await getDocs(queryRef);

      if (querySnapshot.empty) {
        window.alert("No users found with pin 500012");
        return;
      }

      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });

      window.alert("Query Result:\n" + JSON.stringify(result, null, 2));
    } catch (error) {
      window.alert("Error running query: " + error.message);
    }
  };
 
  const update = async () => {
    try {
      const docRef = doc(firestoreDB, "users", "BOssgghIyNQVvNV6FaWI");
      await updateDoc(docRef, {
        name: 'Anirban'
     
      });
      window.alert("User updated successfully!");
    } catch (error) {
      window.alert("Error updating user: " + error.message);
    }
  }
  
  return (
    <div className="App" style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>⚡ Firebase Firestore CRUD</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "250px", margin: "auto" }}>
        <button onClick={writeData}>➕ Add User</button>
        <button onClick={makeSubCollection}>🏥 Add Pharmacy (SubCollection)</button>
        <button onClick={getDocument}>📄 Get Inventory Document</button>
        <button onClick={getQuery}>🔍 Query Users by Pin</button>
        <button onClick={update}>⬆️ Update</button>
      </div>
    </div>
  );
}

export default App;
