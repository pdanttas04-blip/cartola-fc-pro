// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuração do seu projeto
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "cartola-fc-pro.firebaseapp.com",
  projectId: "cartola-fc-pro",
  storageBucket: "cartola-fc-pro.appspot.com",
  messagingSenderId: "1041176031687",
  appId: "SEU_APP_ID"
};

// Inicializa
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };