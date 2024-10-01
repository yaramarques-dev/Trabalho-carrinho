import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

// Configurações do Firebase
const configuracaoFirebase = {
    apiKey: "AIzaSyBePL-s9584Awcc0Eeih99UR4I70vJ2Nmo",
    authDomain: "carrinhocompras-b6af5.firebaseapp.com",
    projectId: "carrinhocompras-b6af5",
    storageBucket: "carrinhocompras-b6af5.appspot.com",
    messagingSenderId: "969767267613",
    appId: "1:969767267613:web:c427b5823214aae51805f4"
};

// Inicialize o Firebase
const app = initializeApp(configuracaoFirebase);
const auth = getAuth(app);

// Função de login
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "inicio.html";
    } catch (error) {
        document.getElementById('mensagemErro').innerText = "Erro ao fazer login: " + error.message;
    }
}

// Função de registro
async function registrar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registro bem-sucedido!");
        window.location.href = "inicio.html";
    } catch (error) {
        document.getElementById('mensagemErro').innerText = "Erro ao registrar: " + error.message;
    }
}

// Função de logout
async function logout() {
    try {
        await signOut(auth);
        window.location.href = "index.html";
    } catch (error) {
        console.error("Erro ao sair:", error);
    }
}

// Tornando as funções acessíveis globalmente
window.login = login;
window.registrar = registrar;
window.logout = logout;
