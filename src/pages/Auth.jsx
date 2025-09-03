import { auth, functions } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { httpsCallable } from "firebase/functions";

export default function AuthPage() {
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, "neeleshchaturvedi233@gmail.com", "password123");
      alert("Registered: " + user.user.uid);
    } catch (e) {
      alert("Register error: " + e.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, "neeleshchaturvedi233@gmail.com", "password123");
      alert("Logged in: " + user.user.uid);
    } catch (e) {
      alert("Login error: " + e.message);
    }
  };

  const callHelloUser = async () => {
    try {
      const helloUser = httpsCallable(functions, "helloUser");
      const res = await helloUser({ name: "Neelesh" });
      alert(JSON.stringify(res.data, null, 2));
    } catch (e) {
      alert("Function call failed: " + e.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔥 Auth + Cloud Function Test</h1>
      <button onClick={register}>Register User</button>
      <button onClick={login}>Login User</button>
      <button onClick={callHelloUser}>Call helloUser Function</button>
    </div>
  );
}
