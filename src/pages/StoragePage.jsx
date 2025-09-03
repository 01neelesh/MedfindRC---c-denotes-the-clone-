// Storage upload + list + delete + write metadata to Firestore
import React, { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { storage, firestoreDB } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


export default function StoragePage() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [list, setList] = useState([]);


    const handleUpload = () => {
        if (!file) return alert("Pick a file first");


        const storageRef = ref(storage, `uploads/${Date.now()}-${file.name}`);
        const task = uploadBytesResumable(storageRef, file);


        task.on(
            "state_changed",
            (snap) => {
                const pct = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
                setProgress(pct);
            },
            (err) => alert(err.message),
            async () => {
                const url = await getDownloadURL(task.snapshot.ref);
                // Save metadata to Firestore
                await addDoc(collection(firestoreDB, "uploads"), {
                    name: file.name,
                    path: task.snapshot.ref.fullPath,
                    url,
                    size: file.size,
                    createdAt: serverTimestamp(),
                });
                alert("Uploaded and metadata saved!");
                setFile(null);
                setProgress(0);
                fetchList();
            }
        );
    };
    const fetchList = async () => {
        const root = ref(storage, "uploads");
        try {
            const res = await listAll(root);
            const items = await Promise.all(
                res.items.map(async (it) => ({
                    fullPath: it.fullPath,
                    name: it.name,
                    url: await getDownloadURL(it),
                }))
            );
            setList(items);
        } catch (e) {
            console.error(e);
        }
    };


    const removeFile = async (path) => {
        if (!confirm("Delete this file from storage?")) return;
        const toDelete = ref(storage, path);
        await deleteObject(toDelete);
        alert("Deleted from storage. Note: metadata in Firestore not deleted automatically.");
        fetchList();
    };


    useEffect(() => {
        fetchList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div style={{ padding: 20 }}>
            <h2>Storage — Upload & List</h2>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            <button onClick={handleUpload} disabled={!file}>Upload</button>
            <div>Progress: {progress}%</div>


            <h3>Files in /uploads</h3>
            <ul>
                {list.map((f) => (
                    <li key={f.fullPath} style={{ marginBottom: 8 }}>
                        <a href={f.url} target="_blank" rel="noreferrer">{f.name}</a>
                        <button onClick={() => removeFile(f.fullPath)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}