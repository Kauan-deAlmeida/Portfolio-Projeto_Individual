// sessão
function validarSessao() {
    var nome = sessionStorage.NOME_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var ra = sessionStorage.ID_USUARIO;

    var nome_usuario_span = document.getElementById("nome_usuario_span");
    var email_usuario = document.getElementById("email_usuario");
    var ra_usuario_span = document.getElementById("ra_usuario_span");
    if (email != null && nome != null) {
        nome_usuario_span.innerHTML = nome;
        email_usuario.innerHTML = email
        ra_usuario_span.innerHTML = ra;
        
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

