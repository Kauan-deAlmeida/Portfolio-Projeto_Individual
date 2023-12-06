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


    