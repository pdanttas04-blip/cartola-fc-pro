import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "cartola-fc-pro.firebaseapp.com",
  projectId: "cartola-fc-pro",
  storageBucket: "cartola-fc-pro.appspot.com",
  messagingSenderId: "1041176031687",
  appId: "1:1041176031687:web:SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.registrar = async function(email, senha) {
  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    alert("Conta criada com sucesso!");
    window.location.href = "premium.html";
  } catch (error) {
    alert(error.message);
  }
}

window.login = async function(email, senha) {
  try {
    await signInWithEmailAndPassword(auth, email, senha);
    alert("Login realizado!");
    window.location.href = "premium.html";
  } catch (error) {
    alert(error.message);
  }
}