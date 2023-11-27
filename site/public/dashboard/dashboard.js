function abrirAula(card){
    var idVideo = card.getAttribute("data-id");
    var video = "";

    if(idVideo == 1){  
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/4cXb-JYLPXA" title="How I Practice Drawing the Body" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;       
    }
    else if(idVideo == 2){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/X3P7_VlAMIc" title="How to draw Bodies / Tutorial and Practice ✍✍" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 3){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/VeCOApoLuT8" title="How to draw a Girl, Clothes Step by Step / Drawing Practice with me" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 4){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/G7LAROdJ8I4" title="How to Draw a Body (Clothed) for Beginners (Tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 5){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/Jx7uqgIExTc" title="How to Draw Body with Simple Anatomy /Drawing Class for Beginners / Figure Drawing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 6){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/WZBhkLyVtTM" title="How to Draw a Girl 3/4 Angle (001) / Face Practice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 7){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/h7CwyvlQfH0" title="How to Draw an Attractive Boy (002) / Face Practice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 8){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/tn_7opSs9vk" title="How to Draw a Girl with an Attractive Angle (003) / Face Practice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 9){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/FXNcH6EIG9s" title="Como Desenhar uma Garota em Ângulo Baixo (012) / Prática de Desenho de Rosto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 10){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/hayrR-Xf7V8" title="How to draw face - Face Proportions Drawing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 11){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/eO5-rd5TNig" title="iPad Watercolor Painting with Procreate / Custom Brush / How to paint a girl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 12){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/eAhHgPZASYQ" title="How to draw Hands / Useful Tips!! / Tutorials (Easy way) / (Part 1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 13){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/eabPsiWaimE" title="How to draw Hands / Useful Tips!! / Tutorials (Part 2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 14){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/iMuxgdCO2gM" title="Como desenhar mãos / Dicas úteis!!! / Tutoriais (Parte 3)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else if(idVideo == 15){
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/9rkYCG2jQvA" title="How to draw legs / Tutorial &amp; Practice (Sitting pose)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }
    else{
        boxes.innerHTML = `
        <iframe width="887" height="499" src="https://www.youtube.com/embed/hf9THaviPvM" title="Como desenhar pés / Dicas úteis e tutoriais !!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="videoAula">
                <input type="checkbox" id="test" onclick="alterarProgresso()"><p>Após assistir o video, marque a caixa para sabermos quantos porcentos você está avançando no curso</p>
        </div>`;
    }

}

var progresso = document.querySelector(".barraPorcentagem")
var vetorProgresso = [];
var porcentagemProgresso = 0;

function alterarProgresso() {
        var aulaVista = test.checked
        var porcentagemCadaVideo = 6.25;
        if(aulaVista){
                vetorProgresso.push(porcentagemCadaVideo);
                porcentagemProgresso = 0;
                for(var progressoAtual = 0; progressoAtual < vetorProgresso.length; progressoAtual++){
                        porcentagemProgresso += vetorProgresso[progressoAtual];     
                        porcentagem.innerHTML = `${porcentagemProgresso}%`;
                        progresso.setAttribute("style", "width:" + porcentagemProgresso  + "%");
                }
        }
        else{
                porcentagemProgresso -= porcentagemCadaVideo;
                porcentagem.innerHTML = `${porcentagemProgresso}%`;
                progresso.setAttribute("style", "width:" + porcentagemProgresso  + "%");
        
                vetorProgresso.pop();
        }
}

function inicio(){
        boxes.innerHTML = `<div class="box">
        <div data-id="1" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto1.webp" alt="">
            <p>Aula 01 - Parte 1</p>
        </div>
        <div data-id="2" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto2.jpg" alt="">
            <p>Aula 02 - Parte 2</p>
        </div>
        <div data-id="3" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto3.webp" alt="">
            <p>Aula 03 - Parte 3</p>
        </div>
        <div data-id="4" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/Foto4.jpg" alt="">
            <p>Aula 04 - Parte 4</p>
        </div>
    </div>
    <!-- Aulas de 5 á 8 -->
    <div class="box">
        <div data-id="5" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto5.jpg" alt="">
            <p>Aula 05 - Parte 5</p>
        </div>
        <div data-id="6" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto6.jpg" alt="">
            <p>Aula 06 - Parte 1 </p>
        </div>
        <div data-id="7" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto7.jpg" alt="">
            <p>Aula 07 - Parte 2</p>
        </div>
        <div data-id="8" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto8.jpg" alt="">
            <p>Aula 08 - Parte 3</p>
        </div>
    </div>
    <!-- Aulas de 9 á 12 -->
    <div class="box">
        <div data-id="9" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto9.jpg" alt="">
            <p>Aula 09 - Parte 4</p>
        </div>
        <div data-id="10" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto10.jpg" alt="">
            <p>Aula 10</p>
        </div>
        <div data-id="11" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto11.jpg" alt="">
            <p>Aula 11</p>
        </div>
        <div data-id="12" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto12.jpg" alt="">
            <p>Aula 12 - Parte 1</p>
        </div>
    </div>
    <!-- Aulas de 13 á 16 -->
    <div class="box">
        <div data-id="13" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto13.jpg" alt="">
            <p>Aula 13 - Parte 2</p>
        </div>
        <div data-id="14" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto14.webp" alt="">
            <p>Aula 14 - Parte 3</p>
        </div>
        <div data-id="15" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto15.jpg" alt="">
            <p>Aula 15</p>
        </div>
        <div data-id="16" onclick="abrirAula(this)" class="cards">
            <img src="../assets/imgs/Fotos_de_Videos/foto16.webp" alt="">
            <p>Aula 16</p>
        </div>
    </div>
</div>
</div>`
}

