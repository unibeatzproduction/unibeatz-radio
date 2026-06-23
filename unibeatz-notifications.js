  // unibeatz-notifications.js
// Shared UniBeatz loader: account bridge + search + notification center + admin broadcast.
import "/unibeatz-auth.js";
import "/unibeatz-search.js";
import "/unipack-stems.js";
import "/unipack-mobile-upload-fix.js";
// import "/unifreestyle-cypher-fix.js";          // disabled — replaced by unifreestyle-cypher.js
// import "/unifreestyle-cypher-engine.js";       // disabled — replaced by unifreestyle-cypher.js
import "/unifreestyle-cypher.js";
import "/unifreestyle-cypher-camera-center.js";
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore, collection, addDoc, getDocs, query, orderBy, limit,
  serverTimestamp, doc, setDoc
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getMessaging, getToken, onMessage, isSupported } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";                                                                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="
#050507"/>
  <text x="138" y="268" text-anchor="middle" dominant-baseline="middle" font-family="Impact, Arial Black, sans-serif" font-size="44" font-weight="900" fill="
#C9A84C" letter-spacing="1">UNIBEATZ</text>
  <text x="371" y="268" text-anchor="middle" dominant-baseline="middle" font-family="Impact, Arial Black, sans-serif" font-size="44" font-weight="900" fill="
#40D0FF" letter-spacing="3">RADIO</text>
</svg>                                                                                                                                                                                                                                                                                                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="
#050507"/>
  <text
    x="256"
    y="270"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="Arial Black, Impact, sans-serif"
    font-size="58"
    font-weight="900">
    <tspan fill="
#C9A84C">UNIBEATZ</tspan>
    <tspan fill="
#40D0FF"> RADIO</tspan>
  </text>
</svg>
