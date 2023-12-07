
const ctx = document.getElementById('myChart');
Chart.defaults.color = '#fff';

var qtdUmaEstrela = 0
var qtdDuasEstrelas = 0
var qtdTresEstrelas = 0
var qtdQuatroEstrelas = 0
var qtdCincoEstrelas = 0
function mostrarChartEstrela(){
  fetch("/avaliar/mostrarChart", {
    method: "GET",
})
  .then(function (resposta){
      resposta.json()
    .then((avaliacao) => {
        avaliacao.forEach((avaliacao) => {
          qtdUmaEstrela = avaliacao.e1;
          qtdDuasEstrelas = avaliacao.e2;
          qtdTresEstrelas = avaliacao.e3;
          qtdQuatroEstrelas = avaliacao.e4;
          qtdCincoEstrelas = avaliacao.e5;
        });
    })    
  })
.catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
    finalizarAguardar();
});   
}

mostrarChartEstrela();
setTimeout(() => {
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Uma estrela',
             'Duas estrelas', 
             'Três estrelas',
             'Quatro estrelas',
             'Cinco estrelas', ],
    datasets: [{
      label: "Avaliações",
      data: [qtdUmaEstrela, qtdDuasEstrelas, qtdTresEstrelas, qtdQuatroEstrelas, qtdCincoEstrelas],
      backgroundColor: ['rgba(255,255,255, 0.7)'],
      borderWidth: 1
    }
     ,
]
  },
  options: {
    scales: {
      y: {
          ticks: {
              precision: 0
          }
      }
    }
  }
})},2000)


