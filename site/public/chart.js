
const ctx = document.getElementById('myChart');
Chart.defaults.color = '#fff';

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
      data: [22, 24, 27, 23, 20, 18],
      backgroundColor: 'rgba(255,255,255, 0.7)',
      borderWidth: 1
      

    }
     ,
]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


