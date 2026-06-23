import { initializeApp, getApps, getApp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';
const firebaseConfig={apiKey:'AIzaSyDTStQ25aX1e-sgzOtmcKZPmdJM0NkEaH4',authDomain:'unibeatzproduction-7ae31.firebaseapp.com',projectId:'unibeatzproduction-7ae31',storageBucket:'unibeatzproduction-7ae31.firebasestorage.app',messagingSenderId:'70667820609',appId:'1:70667820609:web:57762df5510e6b4000b0c0'};
const app=getApps().length?getApp():initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const form=document.getElementById('djApplyForm');
const notice=document.getElementById('djApplyNotice');
form.addEventListener('submit',async e=>{
  e.preventDefault();
  notice.textContent='Submitting DJ application...';notice.style.color='
#40D0FF';
  try{
    if(!auth.currentUser) await signInAnonymously(auth);
    const fd=new FormData(form);
    await addDoc(collection(db,'radio_dj_applications'),{
