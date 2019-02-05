var labels = [];
setActivePage('nav_details');
document.getElementById('convert-times').click();
document.getElementById('first-chart').click();

tableRows = document.querySelectorAll('.date');
tableRows.forEach(function(row, i) {
  row.innerHTML = labels[i];
});

function convertTimes(times_data) {
  for (i = 0; i < times_data.length; i++) {
    var date = new Date(times_data[i]);
    labels[i] = date.toLocaleString();
  }
}

function showLineChart(elem, data) {
  var oldCtx = document.querySelector('canvas');
  var parent = oldCtx.parentNode;
  parent.removeChild(oldCtx);
  var ctx = document.createElement('canvas');

  parent.appendChild(ctx);

  var items = elem.parentNode.children;
  for (i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }
  elem.classList.add('active');

  renderChart(ctx, data);
}

function renderChart(ctx,data) {
  var data = {
      datasets: [{
        data: data
      }],
      labels: labels 
  }

  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        legend: {
          display: false
        }
      }
  });
}