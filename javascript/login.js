// script do seu login
document.querySelector('.button-box button').addEventListener('click', (e) => {
    e.preventDefault();
    const usuario = document.querySelector('input[name="usuario"]').value;
    const senha = document.querySelector('input[name="senha"]').value;

    auth.signInWithEmailAndPassword(usuario, senha)
        .then(userCredential => {
            // Usuário logado com sucesso
            const user = userCredential.user;

            // Carregar o carrinho do banco de dados
            loadCart(user.uid);

            // Redirecionar para a página de início
            window.location.href = "inicio.html";
        })
        .catch(error => {
            console.error("Erro ao autenticar:", error);
        });
});

function loadCart(userId) {
    const cartRef = database.ref(`carrinhos/${userId}`);
    cartRef.once('value', snapshot => {
        const cartData = snapshot.val();
        if (cartData) {
            // Preencha o carrinho de compras com os dados do banco
            cart = cartData.itens; // Supondo que você armazene os itens no formato adequado
            updateCart();
        }
    });
}