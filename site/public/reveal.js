
window.revelar = ScrollReveal({reset:true})

// Pagina HOME
// Topo do site
revelar.reveal('.efeitoScrollReveal',
{
    duration: 1500,
    distance: '30px'
})

// Cards do site, vindo um apos o outro
revelar.reveal('.scrollCard1',
{
    duration: 1500,
    distance: '30px',
    delay: 500
})

revelar.reveal('.scrollCard2',
{
    duration: 1500,
    distance: '30px',
    delay: 1000,
})

revelar.reveal('.scrollCard3',
{
    duration: 1500,
    distance: '30px',
    delay: 1500
})

// Imagens que vão da esquerda para direita
revelar.reveal('.scrollRightForLeft',
{
    duration: 2000,
    distance: '30px',
    origin: 'rigth'
})

// Imagens que vão da direita para esquerda
revelar.reveal('.scrollLeftForRigth',
{
    duration: 2000,
    distance: '30px',
    origin: 'left'
})

// Pagina Cadastro e Login
// Tela de Cadastro e Login
revelar.reveal('.cadastroLogi_ScrollReveal',
{
    origin: 'rigth',
    distance: '70px',
    duration: 1500,
    delay: 200
})


