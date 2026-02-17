// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuração do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyCuxohEgAldsWE5N-WDkRcY1lJ0I3CBgFw",
  authDomain: "cartola-fc-pro.firebaseapp.com",
  projectId: "cartola-fc-pro",
  storageBucket: "cartola-fc-pro.firebasestorage.app",
  messagingSenderId: "1041176031687",
  appId: "1:1041176031687:web:5c37488402cb9be5eb29e2"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };