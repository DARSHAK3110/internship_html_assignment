 
const ctx = document.getElementById('sale_country').getContext('2d'); 
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["India", "Canada", "Russia", "United State of America"],
    datasets: [{
      backgroundColor: [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
      ],
      data: [7000, 2000, 3000, 11,278]
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Sale"
    }
  }
});