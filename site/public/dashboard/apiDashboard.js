var corFundoBarra = document.querySelector(".container")
var corFundoBanner = document.querySelector(".boxes")
var corLetra = document.querySelector("body")
var positionBottom = document.querySelector(".mudarCor")
var corBottom = document.querySelector(".corFundo")
var clique = 0

function tema(){
        if(clique == 0){
            clique += 1
            corFundoBarra.setAttribute("style", "background-color: #505050");
            corFundoBanner.setAttribute("style", "background-color: #505050");
            corLetra.setAttribute("style", "color: #fff");
            positionBottom.setAttribute("style", "flex-direction: row-reverse");
            corBottom.setAttribute("style", "background-color: #fff");
            // corBottom.style.backgroundColor = "#fff"
        }
        else{
            clique -= 1
            corFundoBarra.setAttribute("style", "background-color: #dfdfdf");
            corFundoBanner.setAttribute("style", "background-color: #dfdfdf");
            corLetra.setAttribute("style", "color: #000");
            positionBottom.setAttribute("style", "flex-direction: row");
            corBottom.setAttribute("style", "background-color: #505050");
        }
}
  
var nome_usuario_span = document.getElementById("nome_usuario_span");
var progresso = document.querySelector(".barraPorcentagem")
var porcentagemProgresso = Number(sessionStorage.PORCENTAGEM)

function barraProgresso() {
    var aulaVista = porcentagem_input.checked

    valor = 1
    if(aulaVista){
            porcentagemProgresso += 6.25
            porcentagemBarra.innerHTML = `${porcentagemProgresso}%`;
            progresso.setAttribute("style", "width:" + porcentagemProgresso  + "%");
    }
    else{
            porcentagemProgresso -= 6.25;
            porcentagemBarra.innerHTML = `${porcentagemProgresso}%`;
            progresso.setAttribute("style", "width:" + porcentagemProgresso  + "%");
    }    

    fetch(`/progresso/atualizarProgresso/${sessionStorage.ID_USUARIO}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/aluno.js
            progressoServer: porcentagemProgresso,
        })
    })
}

function mostrarBarra(){
    var idAlunoVar = Number(sessionStorage.ID_USUARIO)

    fetch(`/progresso/mostrar-barra/${idAlunoVar}`)
        .then(res => {
            res.json().then(res => {
                console.log(res);
                porcentagemBarra.innerHTML = res[0].progresso + `%`;
                progresso.setAttribute("style", "width:" + res[0].progresso + "%");
            })
        })    
}

// O usuário irá dar avaliação do curso
var notaAvaliacao = 0 
var estrelaDourada = ``
function atualizarAvaliacao(card){
    var idEstrelas = card.getAttribute("star-id");
    var estrelaDourada = `<img src="../assets/imgs/avaliacao.webp">`
    var estrelaPrata = `<img src="../assets/imgs/avaliacao_N_Marcada.png">`
    if(idEstrelas == 1){
        avaliacao.innerHTML = `
                ${estrelaDourada}
                ${estrelaPrata}
                ${estrelaPrata}
                ${estrelaPrata}
                ${estrelaPrata}
            `;
            notaAvaliacao = 1
    } else if(idEstrelas == 2){
        avaliacao.innerHTML = `
                ${estrelaDourada}
                ${estrelaDourada}
                ${estrelaPrata}
                ${estrelaPrata}
                ${estrelaPrata}
            `;
            notaAvaliacao = 2
    } else if(idEstrelas == 3){
        avaliacao.innerHTML = `
                ${estrelaDourada}
                ${estrelaDourada}
                ${estrelaDourada}
                ${estrelaPrata}
                ${estrelaPrata}
            `;
            notaAvaliacao = 3
    } else if(idEstrelas == 4){
        avaliacao.innerHTML = `
                ${estrelaDourada}
                ${estrelaDourada}
                ${estrelaDourada}
                ${estrelaDourada}
                ${estrelaPrata}
            `;
            notaAvaliacao = 4
    } else{
        avaliacao.innerHTML = `
                ${estrelaDourada}
                ${estrelaDourada}
                ${estrelaDourada}
                ${estrelaDourada}
                ${estrelaDourada}
            `;     
            notaAvaliacao = 5           
    }

    fetch(`/avaliar/atualizarAvaliacao/${sessionStorage.ID_USUARIO}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/aluno.js
            notaServer: notaAvaliacao,
        })
    })
}

// Exibir na tela a avaliação que o usuário deu para o curso
function mostrarAvaliacao(){
    var idAlunoVar = Number(sessionStorage.ID_USUARIO)

    fetch(`/avaliar/mostrar-avaliacao/${idAlunoVar}`)
        .then(res => {
            res.json().then(res => {
                console.log(res);
                if(res[0].nota == 0){
                    avaliacao.innerHTML = `
                        <img src="../assets/imgs/avaliacao_N_Marcada.png" star-id="1" onclick="atualizarAvaliacao(this)">
                        <img src="../assets/imgs/avaliacao_N_Marcada.png" star-id="2" onclick="atualizarAvaliacao(this)">
                        <img src="../assets/imgs/avaliacao_N_Marcada.png" star-id="3" onclick="atualizarAvaliacao(this)">
                        <img src="../assets/imgs/avaliacao_N_Marcada.png" star-id="4" onclick="atualizarAvaliacao(this)">
                        <img src="../assets/imgs/avaliacao_N_Marcada.png" star-id="5" onclick="atualizarAvaliacao(this)">
                    `;
                }
                else{
                    for(var estrela = 0; estrela < 5; estrela++){
                        if(estrela < res[0].nota){
                            avaliacao.innerHTML += `<img src="../assets/imgs/avaliacao.webp" star-id="${estrela}" onclick="atualizarAvaliacao(this)">`;
                        }
                        else{
                            avaliacao.innerHTML += '<img src="../assets/imgs/avaliacao_N_Marcada.png" star-id="5" onclick="atualizarAvaliacao(this)">'
                        }
                    }
                }
                
            })
        })       
}

// Postagem das fotos dos usuários
function cadastrarPost(){
    var idAlunoVar = sessionStorage.ID_USUARIO
    var tituloVar = input_titulo.value;
    var imgVar = input_img.value;
    
    // Enviando o valor da nova input
    if(imgVar == ``){
        mensagemErro = "URL não encontrada";
            erroCadastrar();
    }
    fetch("/post/cadastrarPost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/aluno.js
            idAlunoServer: idAlunoVar,
            tituloServer: tituloVar,
            imgServer: imgVar
        })
    })
    .then(function (resposta){
        console.log("resposta: ", resposta);
        if (resposta.ok) {
            cardErro.style.display = "flex";
            mensagem_erro.innerHTML =
                "Postagem finalizada...";
            setInterval(sumirMensagem, 3500);
        }
    })
    .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });    
}

function sumirMensagem() {
    cardErro.style.display = "none";
}

function erroCadastrar(){
    cardErro.style.display = "block";
    mensagem_erro.innerHTML = mensagemErro;
    setInterval(sumirMensagem, 3500);
    finalizarAguardar();
    return false;
}


    