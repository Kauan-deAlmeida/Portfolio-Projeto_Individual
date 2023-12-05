function abrirAula(card){
    var idVideo = card.getAttribute("data-id");
    var aulaAtual = ``;
    var conteudo_box_aula = `        
            <div class="videoAula">
                <input type="checkbox" id="porcentagem_input" onclick="setTimeout(() => barraProgresso(), 200)"><p>Depois de assistir o vídeo marque como assistido para prosseguir para o próximo vídeo</p>
        </div>
    </div>


    <div class="cards_dos_videos">
            <div data-id="1" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto1.webp" alt="">
                <p>Aula 01 - Introdução</p>
            </div>
            <div data-id="2" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto2.jpg" alt="">
                <div><p>Aula 02 - </p>
                <p>Como fazer esbolço de corpo</p>
                </div>
            </div>
            <div data-id="3" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto3.webp" alt="">
                <p>Aula 03 - Parte 3</p>
            </div>
            <div data-id="4" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/Foto4.jpg" alt="">
                <p>Aula 04 - Parte 4</p>
            </div>
        <!-- Aulas de 5 á 8 -->
        
            <div data-id="5" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto5.jpg" alt="">
                <p>Aula 05 - Parte 5</p>
            </div>
            <div data-id="6" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto6.jpg" alt="">
                <p>Aula 06 - Parte 1 </p>
            </div>
            <div data-id="7" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto7.jpg" alt="">
                <p>Aula 07 - Parte 2</p>
            </div>
            <div data-id="8" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto8.jpg" alt="">
                <p>Aula 08 - Parte 3</p>
            </div>
        <!-- Aulas de 9 á 12 -->
        
            <div data-id="9" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto9.jpg" alt="">
                <p>Aula 09 - Parte 4</p>
            </div>
            <div data-id="10" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto10.jpg" alt="">
                <p>Aula 10</p>
            </div>
            <div data-id="11" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto11.jpg" alt="">
                <p>Aula 11</p>
            </div>
            <div data-id="12" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto12.jpg" alt="">
                <p>Aula 12 - Parte 1</p>
            </div>
        <!-- Aulas de 13 á 16 -->
        
            <div data-id="13" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto13.jpg" alt="">
                <p>Aula 13 - Parte 2</p>
            </div>
            <div data-id="14" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto14.webp" alt="">
                <p>Aula 14 - Parte 3</p>
            </div>
            <div data-id="15" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto15.jpg" alt="">
                <p>Aula 15</p>
            </div>
            <div data-id="16" onclick="abrirAula(this)" class="cardsLinkandoVideo">
                <img src="../assets/imgs/Fotos_de_Videos/foto16.webp" alt="">
                <p>Aula 16</p>
            </div>
        </div>
</div>`;   

    if(idVideo == 1){  
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/4cXb-JYLPXA" title="How I Practice Drawing the Body" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 2){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/X3P7_VlAMIc" title="How to draw Bodies / Tutorial and Practice ✍✍" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 3){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/VeCOApoLuT8" title="How to draw a Girl, Clothes Step by Step / Drawing Practice with me" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 4){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/G7LAROdJ8I4" title="How to Draw a Body (Clothed) for Beginners (Tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 5){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/Jx7uqgIExTc" title="How to Draw Body with Simple Anatomy /Drawing Class for Beginners / Figure Drawing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 6){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/WZBhkLyVtTM" title="How to Draw a Girl 3/4 Angle (001) / Face Practice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 7){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/h7CwyvlQfH0" title="How to Draw an Attractive Boy (002) / Face Practice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 8){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/tn_7opSs9vk" title="How to Draw a Girl with an Attractive Angle (003) / Face Practice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 9){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/FXNcH6EIG9s" title="Como Desenhar uma Garota em Ângulo Baixo (012) / Prática de Desenho de Rosto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 10){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/hayrR-Xf7V8" title="How to draw face - Face Proportions Drawing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 11){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/eO5-rd5TNig" title="iPad Watercolor Painting with Procreate / Custom Brush / How to paint a girl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 12){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/eAhHgPZASYQ" title="How to draw Hands / Useful Tips!! / Tutorials (Easy way) / (Part 1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 13){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/eabPsiWaimE" title="How to draw Hands / Useful Tips!! / Tutorials (Part 2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 14){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/iMuxgdCO2gM" title="Como desenhar mãos / Dicas úteis!!! / Tutoriais (Parte 3)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else if(idVideo == 15){
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/9rkYCG2jQvA" title="How to draw legs / Tutorial &amp; Practice (Sitting pose)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
    else{
        aulaAtual = `<iframe width="835" height="450" src="https://www.youtube.com/embed/hf9THaviPvM" title="Como desenhar pés / Dicas úteis e tutoriais !!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        boxes.innerHTML = `
        <div class="aulas">
            <div class="box_aula">
            ${aulaAtual} 
                ${conteudo_box_aula}`;
    }
}

function descricao(){
    boxes.innerHTML = ``   
}

function inicio(){
        boxes.innerHTML = `
        <div class="box">
            <div data-id="1" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto1.webp" alt="">
                <p>Aula 01 - Introdução</p>
            </div>
            <div data-id="2" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto2.jpg" alt="">
                <p>Aula 02 - Como fazer esbolço de corpo</p>
            </div>
            <div data-id="3" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto3.webp" alt="">
                <p>Aula 03 - Detalhando cabelo</p>
            </div>
            <div data-id="4" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/Foto4.jpg" alt="">
                <p>Aula 04 - Criando estilo de roupa</p>
            </div>
        </div>
        <!-- Aulas de 5 á 8 -->
        <div class="box">
            <div data-id="5" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto5.jpg" alt="">
                <p>Aula 05 - Observando posições</p>
            </div>
            <div data-id="6" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto6.jpg" alt="">
                <p>Aula 06 - Definindo rosto feminino Parte 1 </p>
            </div>
            <div data-id="7" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto7.jpg" alt="">
                <p>Aula 07 - Definindo rosto masculino Parte 2</p>
            </div>
            <div data-id="8" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto8.jpg" alt="">
                <p>Aula 08 - Criando acessorios para cabeça</p>
            </div>
        </div>
        <!-- Aulas de 9 á 12 -->
        <div class="box">
            <div data-id="9" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto9.jpg" alt="">
                <p>Aula 09 - Exercicio para treinar rosto</p>
            </div>
            <div data-id="10" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto10.jpg" alt="">
                <p>Aula 10 - Proporção de rosto</p>
            </div>
            <div data-id="11" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto11.jpg" alt="">
                <p>Aula 11 - Tecnicas de pintura</p>
            </div>
            <div data-id="12" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto12.jpg" alt="">
                <p>Aula 12 - Esbolço de mão Parte 1</p>
            </div>
        </div>
        <!-- Aulas de 13 á 16 -->
        <div class="box">
            <div data-id="13" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto13.jpg" alt="">
                <p>Aula 13 - Detalhando mão Parte 2</p>
            </div>
            <div data-id="14" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto14.webp" alt="">
                <p>Aula 14 - Implementando tecnicas Parte 3</p>
            </div>
            <div data-id="15" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto15.jpg" alt="">
                <p>Aula 15 - Posições de pernas</p>
            </div>
            <div data-id="16" onclick="abrirAula(this)" class="cards">
                <img src="../assets/imgs/Fotos_de_Videos/foto16.webp" alt="">
                <p>Aula 16 - Desenhando formados de pé</p>
            </div>
        </div>
    </div>
</div>`
}

function perfil(){ 
    boxes.innerHTML = `
    <div class="boxPerfil">
        <div class="bannerPerfil">
            <div class="fotoPerfil">
                <img src="../assets/imgs/Desenhos_do_Sobre_Mim/desenho09.jpeg">
            </div><br>
            <span>Nome: <span >${sessionStorage.NOME_USUARIO}</span></span><br>
            
            <span>Email: <span>${sessionStorage.EMAIL_USUARIO}</span></span><br>

            <span>RA: <span>${sessionStorage.ID_USUARIO}</span></span>
            <div class="uploadFoto">
                Titulo do post: <br><input type="text" id="input_titulo"><br>
                URL da imagem: <br><input type="text" id="input_img"><br>
                <button onclick="cadastrarImagem()">Enviar</button>
            </div>
            <div id="avaliacao">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela1" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela2" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela3" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela4" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela5" onclick="cadastrarAvaliacao()">
            </div>
        </div>

        <div class="bannerPostagem">
            <div class="fotoPostada">
                <img src="../assets/imgs/Desenhos_do_Sobre_Mim/desenho01.jpeg" alt="">
            </div>
            <div class="fotoPostada">
                <img src="../assets/imgs/Desenhos_do_Sobre_Mim/desenho01.jpeg" alt="">
            </div>
            <div class="fotoPostada">
                <img src="../assets/imgs/Desenhos_do_Sobre_Mim/desenho01.jpeg" alt="">
            </div>
            <div class="fotoPostada">
                <img src="../assets/imgs/Desenhos_do_Sobre_Mim/desenho01.jpeg" alt="">
            </div>
        </div>
    <div>
    `
}

clique = 0
function cadastrarAvaliacao(){
    var estrelaDourada = `<img src="../assets/imgs/avaliacao.webp"`
    if(clique == 0){
        avaliacao.innerHTML = `
                ${estrelaDourada}>
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela2" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela3" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela4" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela5" onclick="cadastrarAvaliacao()">
            `;
    } else if(clique = 1){
        avaliacao.innerHTML = `
                ${estrelaDourada}>
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela2" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela3" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela4" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela5" onclick="cadastrarAvaliacao()">
            `;
    } else if(clique = 1){
        avaliacao.innerHTML = `
                ${estrelaDourada}>
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela2" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela3" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela4" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela5" onclick="cadastrarAvaliacao()">
            `;
    } else if(clique = 1){
        avaliacao.innerHTML = `
                ${estrelaDourada}>
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela2" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela3" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela4" onclick="cadastrarAvaliacao()">
                <img src="../assets/imgs/avaliacao_N_Marcada.png" id="input_estrela5" onclick="cadastrarAvaliacao()">
            `;
    } else{

    }
}
