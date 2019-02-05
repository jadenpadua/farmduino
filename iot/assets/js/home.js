setActivePage('nav_home');
document.getElementById('stats-generator').click();

if (document.querySelector('.jscolor').value == '000000') {
  document.getElementById('off-button').classList.add('disabled');
  document.getElementById('set-default-button').classList.add('disabled');
} else {
  document.getElementById('off-button').classList.remove('disabled');
  document.getElementById('set-default-button').classList.remove('disabled');
}

function submitSettings(setDefault=false, useDefault=false, turnOff=false) {
  if (setDefault) {
    document.getElementById('set-as-default').checked = true;    
  }

  if (useDefault) {
    document.getElementById('change-to-default').checked = true; 
  }

  if (turnOff) {
    document.getElementById('turn-off').checked = true;
  }

  document.getElementById('color-form').submit();
}

function renderChart(ctx, data) {
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        display: false
      }
    }
  });
}

function analyse(temperatureData, humidityData, onData) {
  var temperatureRenderData = {
    datasets: [{
      data: temperatureData,
      backgroundColor: ['#13763f', '#54a06b', '#b3d264']
    }],

    labels: ['Hot', 'Comfortable', 'Cold']
  };

  var humidityRenderData = {
    datasets: [{
      data: humidityData,
      backgroundColor: ['#13763f', '#54a06b', '#b3d264']
    }],

    labels: ['Humid', 'Comfortable', 'Dry']
  };

  var onRenderData = {
    datasets: [{
      data: onData,
      backgroundColor: ['#13763f', '#54a06b']
    }],

    labels: ['On','Off']
  };
  

  renderChart(document.getElementById('temperature-chart'), temperatureRenderData);
  renderChart(document.getElementById('humidity-chart'), humidityRenderData);
  renderChart(document.getElementById('on-chart'), onRenderData);
}