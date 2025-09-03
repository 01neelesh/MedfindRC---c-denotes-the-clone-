const { onRequest, onCall } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { onObjectFinalized } = require("firebase-functions/v2/storage");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();
const dbAdmin = getFirestore();


// 1. Simple HTTP Function (public endpoint)
exports.ping = onRequest((req, res) => {
  res.json({ ok: true, at: new Date().toISOString() });
});


// 2. Callable Function (frontend calls it like API)
//    Will return name + whether user is authenticated
exports.helloUser = onCall((context) => {
  const name = (context?.data?.name) || "friend";
  const uid = context?.auth?.uid || null;

  return {
    message: `👋 Hello, ${name}!`,
    authed: !!uid,
    uid: uid,
  };
});


// 3. Firestore Trigger: runs when new user doc is created
exports.onUserCreated = onDocumentCreated("users/{userId}", async (event) => {
  const userId = event.params.userId;
  const data = event.data?.data();

  await dbAdmin.collection("audit").add({
    type: "userCreated",
    userId,
    data,
    ts: Date.now(),
  });

  console.log(`✅ User created logged: ${userId}`);
});


// 4. Storage Trigger: runs when a file is uploaded
exports.onFileUploaded = onObjectFinalized(async (event) => {
  const path = event.data?.name || "";

  await dbAdmin.collection("uploads").add({
    path,
    ts: Date.now(),
  });

  console.log(`📦 File uploaded logged: ${path}`);
});
