import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

// Configurações do Firebase
const configuracaoFirebase = {
    apiKey: "AIzaSyBljk_XJ3rgraY1UEghU2hbY5_8IIoXs6M",
    authDomain: "prototipos-616cd.firebaseapp.com",
    projectId: "prototipos-616cd",
    storageBucket: "prototipos-616cd.appspot.com",
    messagingSenderId: "560560329785",
    appId: "1:560560329785:web:e988c41d00af48b90be9e8"
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
        
        // Armazenar o e-mail no localStorage
        localStorage.setItem('usuarioEmail', email);
        
        window.location.href = "financas.html";
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
        window.location.href = "financas.html";
    } catch (error) {
        document.getElementById('mensagemErro').innerText = "Erro ao registrar: " + error.message;
    }
}

// Função de logout
async function logout() {
    try {
        await signOut(auth);
        // Remover o e-mail do localStorage
        localStorage.removeItem('usuarioEmail');
        window.location.href = "index.html";
    } catch (error) {
        console.error("Erro ao sair:", error);
    }
}

// Tornando as funções acessíveis globalmente
window.login = login;
window.registrar = registrar;
window.logout = logout;
