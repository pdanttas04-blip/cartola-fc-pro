import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "cartola-fc-pro.firebaseapp.com",
  projectId: "cartola-fc-pro",
  storageBucket: "cartola-fc-pro.appspot.com",
  messagingSenderId: "1041176031687",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRAR
window.registrar = function(email, senha) {
  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      alert("Conta criada!");
      window.location.href = "premium.html";
    })
    .catch(error => alert(error.message));
}

// LOGIN
window.login = function(email, senha) {
  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      alert("Login realizado!");
      window.location.href = "premium.html";
    })
    .catch(error => alert(error.message));
}

// PROTEGER PÁGINA PREMIUM
if (window.location.pathname.includes("premium.html")) {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
}

// LOGOUT
window.logout = function() {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
}