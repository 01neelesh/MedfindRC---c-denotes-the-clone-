import React, { useState } from "react";
import { functions } from "../firebase";
import { httpsCallable } from "firebase/functions";


export default function FunctionsPage() {
    const [name, setName] = useState("Neelesh");
    const [callableRes, setCallableRes] = useState(null);
    const [httpRes, setHttpRes] = useState(null);


    const callHello = async () => {
        try {
            const fn = httpsCallable(functions, "helloUser");
            const r = await fn({ name });
            setCallableRes(r.data);
        } catch (e) {
            alert(e.message);
        }
    };
    const hitHttp = async () => {
        try {
            const projectId = ("medfindrc"); // replace with your project id or env var
            const url = `http://localhost:5001/${projectId}/us-central1/ping`;
            const res = await fetch(url);
            setHttpRes(await res.json());
        } catch (e) {
            alert(e.message);
        }
    };


    return (
        <div style={{ padding: 20 }}>
            <h2>Cloud Functions — Client</h2>


            <div style={{ marginBottom: 12 }}>
                <h4>Callable</h4>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={callHello}>Call helloUser</button>
                <pre>{callableRes ? JSON.stringify(callableRes, null, 2) : "-"}</pre>
            </div>


            <div>
                <h4>HTTP</h4>
                <button onClick={hitHttp}>GET /ping</button>
                <pre>{httpRes ? JSON.stringify(httpRes, null, 2) : "-"}</pre>
            </div>
        </div>
    );
}