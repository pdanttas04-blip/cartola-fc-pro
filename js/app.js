import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Registrar usuário
window.registrar = function(email, senha) {
  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      alert("Conta criada com sucesso 🔥");
      window.location.href = "premium.html";
    })
    .catch(error => {
      alert("Erro: " + error.message);
    });
};

// Login usuário
window.login = function(email, senha) {
  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      alert("Login feito com sucesso 🚀");
      window.location.href = "premium.html";
    })
    .catch(error => {
      alert("Erro: " + error.message);
    });
};