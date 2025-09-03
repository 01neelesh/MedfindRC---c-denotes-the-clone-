// Firestore CRUD page (create, list, update, delete)
import React, { useEffect, useState } from "react";
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    doc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
} from "firebase/firestore";
import { firestoreDB } from "../firebase";


export default function FirestorePage() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ name: "", age: "", address: "" });
    const [editingId, setEditingId] = useState(null);


    // realtime listener (live list)
    useEffect(() => {
        const q = query(collection(firestoreDB, "users"), orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (snap) => {
            setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        });
        return () => unsub();
    }, []);


    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


    // CREATE
    const createItem = async () => {
        if (!form.name.trim()) return alert("Provide name");
        await addDoc(collection(firestoreDB, "users"), {
            name: form.name,
            age: form.age ? Number(form.age) : null,
            address: form.address,
            createdAt: serverTimestamp(),
        });
        setForm({ name: "", age: "", address: "" });
    };

    // EDIT -> populate form
    const edit = (it) => {
        setEditingId(it.id);
        setForm({ name: it.name || "", age: it.age ? String(it.age) : "", address: it.address || "" });
    };


    // UPDATE
    const save = async () => {
        if (!editingId) return;
        await updateDoc(doc(firestoreDB, "users", editingId), {
            name: form.name,
            age: form.age ? Number(form.age) : null,
            address: form.address,
        });
        setEditingId(null);
        setForm({ name: "", age: "", address: "" });
    };


    // DELETE
    const remove = async (id) => {
        if (!confirm("Delete this user?")) return;
        await deleteDoc(doc(firestoreDB, "users", id));
    };


    return (
        <div style={{ padding: 20 }}>
            <h2>Firestore — Users</h2>
            <div style={{ marginBottom: 12 }}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                <input name="age" value={form.age} onChange={handleChange} placeholder="Age" style={{ width: 80 }} />
                <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
                {editingId ? (
                    <button onClick={save}>Save</button>
                ) : (
                    <button onClick={createItem}>Create</button>
                )}
            </div>


            <ul>
                {items.map((u) => (
                    <li key={u.id} style={{ marginBottom: 8 }}>
                        <strong>{u.name}</strong> {u.age ? `— ${u.age}` : ""} <br />
                        <small>{u.address}</small>
                        <div>
                            <button onClick={() => edit(u)}>Edit</button>
                            <button onClick={() => remove(u.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}