// Bubble comparison data
const bubbleData = {
  "chart_data": [{"Days": 0, "Dotcom_1995_2000": 100.0, "AI_2022_2028": 100.0}, {"Days": 25, "Dotcom_1995_2000": 103.0, "AI_2022_2028": 108.5}, {"Days": 50, "Dotcom_1995_2000": 106.0, "AI_2022_2028": 117.0}, {"Days": 75, "Dotcom_1995_2000": 109.0, "AI_2022_2028": 125.5}, {"Days": 100, "Dotcom_1995_2000": 112.0, "AI_2022_2028": 134.0}, {"Days": 125, "Dotcom_1995_2000": 115.4, "AI_2022_2028": 138.1}, {"Days": 150, "Dotcom_1995_2000": 118.9, "AI_2022_2028": 142.2}, {"Days": 175, "Dotcom_1995_2000": 122.3, "AI_2022_2028": 146.4}, {"Days": 200, "Dotcom_1995_2000": 125.8, "AI_2022_2028": 150.5}, {"Days": 225, "Dotcom_1995_2000": 129.2, "AI_2022_2028": 154.6}, {"Days": 250, "Dotcom_1995_2000": 132.6, "AI_2022_2028": 158.8}, {"Days": 275, "Dotcom_1995_2000": 136.1, "AI_2022_2028": 162.9}, {"Days": 300, "Dotcom_1995_2000": 139.5, "AI_2022_2028": 167.0}, {"Days": 325, "Dotcom_1995_2000": 142.9, "AI_2022_2028": 171.1}, {"Days": 350, "Dotcom_1995_2000": 146.4, "AI_2022_2028": 175.3}, {"Days": 375, "Dotcom_1995_2000": 149.8, "AI_2022_2028": 179.4}, {"Days": 400, "Dotcom_1995_2000": 153.3, "AI_2022_2028": 183.5}, {"Days": 425, "Dotcom_1995_2000": 156.7, "AI_2022_2028": 187.6}, {"Days": 450, "Dotcom_1995_2000": 160.1, "AI_2022_2028": 191.8}, {"Days": 475, "Dotcom_1995_2000": 163.6, "AI_2022_2028": 195.9}, {"Days": 500, "Dotcom_1995_2000": 167.0, "AI_2022_2028": 200.0}, {"Days": 525, "Dotcom_1995_2000": 165.6, "AI_2022_2028": 202.1}, {"Days": 550, "Dotcom_1995_2000": 164.2, "AI_2022_2028": 204.2}, {"Days": 575, "Dotcom_1995_2000": 162.8, "AI_2022_2028": 206.3}, {"Days": 600, "Dotcom_1995_2000": 161.4, "AI_2022_2028": 208.4}, {"Days": 625, "Dotcom_1995_2000": 160.0, "AI_2022_2028": 210.5}, {"Days": 650, "Dotcom_1995_2000": 162.3, "AI_2022_2028": 212.6}, {"Days": 675, "Dotcom_1995_2000": 164.5, "AI_2022_2028": 214.7}, {"Days": 700, "Dotcom_1995_2000": 166.8, "AI_2022_2028": 216.8}, {"Days": 725, "Dotcom_1995_2000": 169.0, "AI_2022_2028": 218.9}, {"Days": 750, "Dotcom_1995_2000": 171.3, "AI_2022_2028": 221.0}, {"Days": 775, "Dotcom_1995_2000": 173.5, "AI_2022_2028": 221.0}, {"Days": 800, "Dotcom_1995_2000": 175.8, "AI_2022_2028": 221.0}, {"Days": 825, "Dotcom_1995_2000": 178.0, "AI_2022_2028": 221.0}, {"Days": 850, "Dotcom_1995_2000": 180.3, "AI_2022_2028": 221.0}, {"Days": 875, "Dotcom_1995_2000": 182.5, "AI_2022_2028": 221.0}, {"Days": 900, "Dotcom_1995_2000": 184.8, "AI_2022_2028": 221.0}, {"Days": 925, "Dotcom_1995_2000": 187.0, "AI_2022_2028": 221.0}, {"Days": 950, "Dotcom_1995_2000": 189.3, "AI_2022_2028": 221.0}, {"Days": 975, "Dotcom_1995_2000": 191.5, "AI_2022_2028": 221.0}, {"Days": 1000, "Dotcom_1995_2000": 193.8, "AI_2022_2028": 221.0}, {"Days": 1025, "Dotcom_1995_2000": 193.4, "AI_2022_2028": 225.4}, {"Days": 1050, "Dotcom_1995_2000": 193.0, "AI_2022_2028": 229.8}, {"Days": 1075, "Dotcom_1995_2000": 192.6, "AI_2022_2028": 234.2}, {"Days": 1100, "Dotcom_1995_2000": 192.3, "AI_2022_2028": 238.6}, {"Days": 1125, "Dotcom_1995_2000": 205.6, "AI_2022_2028": 243.0}, {"Days": 1150, "Dotcom_1995_2000": 218.9, "AI_2022_2028": 247.4}, {"Days": 1175, "Dotcom_1995_2000": 232.3, "AI_2022_2028": 251.8}, {"Days": 1200, "Dotcom_1995_2000": 245.6, "AI_2022_2028": 256.2}, {"Days": 1225, "Dotcom_1995_2000": 258.9, "AI_2022_2028": 260.6}, {"Days": 1250, "Dotcom_1995_2000": 272.3, "AI_2022_2028": 265.0}, {"Days": 1275, "Dotcom_1995_2000": 285.6, "AI_2022_2028": 269.4}, {"Days": 1300, "Dotcom_1995_2000": 298.9, "AI_2022_2028": 273.8}, {"Days": 1325, "Dotcom_1995_2000": 312.3, "AI_2022_2028": 278.2}, {"Days": 1350, "Dotcom_1995_2000": 325.6, "AI_2022_2028": 282.6}, {"Days": 1375, "Dotcom_1995_2000": 338.9, "AI_2022_2028": 287.0}, {"Days": 1400, "Dotcom_1995_2000": 352.3, "AI_2022_2028": 291.4}, {"Days": 1425, "Dotcom_1995_2000": 365.6, "AI_2022_2028": 295.8}, {"Days": 1450, "Dotcom_1995_2000": 378.9, "AI_2022_2028": 300.2}, {"Days": 1475, "Dotcom_1995_2000": 392.3, "AI_2022_2028": 304.6}, {"Days": 1500, "Dotcom_1995_2000": 405.6, "AI_2022_2028": 309.0}, {"Days": 1525, "Dotcom_1995_2000": 457.1, "AI_2022_2028": 313.4}, {"Days": 1550, "Dotcom_1995_2000": 508.5, "AI_2022_2028": 317.8}, {"Days": 1575, "Dotcom_1995_2000": 560.0, "AI_2022_2028": 322.2}, {"Days": 1600, "Dotcom_1995_2000": 611.5, "AI_2022_2028": 326.6}, {"Days": 1625, "Dotcom_1995_2000": 663.0, "AI_2022_2028": 331.0}, {"Days": 1650, "Dotcom_1995_2000": 714.4, "AI_2022_2028": 335.4}, {"Days": 1675, "Dotcom_1995_2000": 765.9, "AI_2022_2028": 339.8}, {"Days": 1700, "Dotcom_1995_2000": null, "AI_2022_2028": 344.2}, {"Days": 1725, "Dotcom_1995_2000": null, "AI_2022_2028": 348.6}, {"Days": 1750, "Dotcom_1995_2000": null, "AI_2022_2028": 353.0}, {"Days": 1775, "Dotcom_1995_2000": null, "AI_2022_2028": 357.4}, {"Days": 1800, "Dotcom_1995_2000": null, "AI_2022_2028": 361.8}, {"Days": 1825, "Dotcom_1995_2000": null, "AI_2022_2028": 366.2}, {"Days": 1850, "Dotcom_1995_2000": null, "AI_2022_2028": 370.6}, {"Days": 1875, "Dotcom_1995_2000": null, "AI_2022_2028": 375.0}, {"Days": 1900, "Dotcom_1995_2000": null, "AI_2022_2028": null}, {"Days": 1925, "Dotcom_1995_2000": null, "AI_2022_2028": null}],
  "key_events": [{"day": 1013, "label": "You Are Here (Oct 2025)", "ai_value": 270, "calendar_date": "2025-10-06"}, {"day": 1698, "label": "Dotcom Peak Equivalent (Jul 2027)", "ai_value": 450, "dotcom_value": 679, "calendar_date": "2027-07-25"}, {"day": 1893, "label": "Extended AI Peak (Mar 2028)", "ai_value": 500, "calendar_date": "2028-03-04"}]
};

let chart;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeChart();
  initializeControls();
  updateCountdown();
  setInterval(updateCountdown, 60000); // Update every minute
});

function initializeChart() {
  const ctx = document.getElementById('bubbleChart').getContext('2d');
  
  // Prepare datasets
  const dotcomData = bubbleData.chart_data
    .filter(item => item.Dotcom_1995_2000 !== null)
    .map(item => ({x: item.Days, y: item.Dotcom_1995_2000}));
  
  const aiData = bubbleData.chart_data
    .filter(item => item.AI_2022_2028 !== null)
    .map(item => ({x: item.Days, y: item.AI_2022_2028}));

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Dotcom Bubble (1995-2000)',
        data: dotcomData,
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.2,
        pointRadius: 1,
        pointHoverRadius: 6,
        pointBackgroundColor: '#1FB8CD',
        pointBorderColor: '#1FB8CD'
      }, {
        label: 'AI Bubble (2022-2028)',
        data: aiData,
        borderColor: '#FFC185',
        backgroundColor: 'rgba(255, 193, 133, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.2,
        pointRadius: 1,
        pointHoverRadius: 6,
        pointBackgroundColor: '#FFC185',
        pointBorderColor: '#FFC185'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'nearest',
        intersect: false
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            font: {
              size: 14,
              weight: '500'
            },
            color: '#134252',
            usePointStyle: true,
            padding: 20
          }
        },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          titleColor: '#134252',
          bodyColor: '#134252',
          borderColor: '#5E8240',
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            title: function(context) {
              const day = context[0].parsed.x;
              const startDate = new Date('2022-11-30');
              const currentDate = new Date(startDate);
              currentDate.setDate(currentDate.getDate() + day);
              return `Day ${day} (${currentDate.toLocaleDateString('en-US', {month: 'short', year: 'numeric'})})`;
            },
            label: function(context) {
              const value = context.parsed.y.toFixed(1);
              return `${context.dataset.label}: ${value}`;
            }
          }
        }
      },
      scales: {
        x: {
          type: 'linear',
          title: {
            display: true,
            text: 'Days from Bubble Start',
            font: {
              size: 14,
              weight: '600'
            },
            color: '#134252'
          },
          min: 0,
          max: 2000,
          grid: {
            color: 'rgba(94, 130, 64, 0.1)',
            drawBorder: false
          },
          ticks: {
            color: '#626c71',
            font: {
              size: 12
            }
          }
        },
        y: {
          title: {
            display: true,
            text: 'Index Value (Base: 100)',
            font: {
              size: 14,
              weight: '600'
            },
            color: '#134252'
          },
          min: 90,
          max: 800,
          grid: {
            color: 'rgba(94, 130, 64, 0.1)',
            drawBorder: false
          },
          ticks: {
            color: '#626c71',
            font: {
              size: 12
            },
            callback: function(value) {
              return value.toFixed(0);
            }
          }
        }
      },
      onHover: (event, activeElements) => {
        event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
      }
    }
  });

  // Add milestone markers after chart is created
  addMilestoneMarkers();
  
  // Add zoom and pan functionality
  addZoomPanFunctionality();
}

function addMilestoneMarkers() {
  // Add current position marker
  const currentDay = 1013;
  const currentValue = 270;
  
  chart.data.datasets.push({
    label: 'Current Position',
    data: [{x: currentDay, y: currentValue}],
    pointRadius: 8,
    pointHoverRadius: 10,
    pointBackgroundColor: '#DB4545',
    pointBorderColor: '#fff',
    pointBorderWidth: 3,
    showLine: false,
    order: 0
  });

  chart.update();
}

function addZoomPanFunctionality() {
  const canvas = document.getElementById('bubbleChart');
  let isMouseDown = false;
  let startX = 0;
  let startY = 0;
  let initialScales = null;

  // Mouse wheel zoom
  canvas.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
    const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
    const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
    
    const zoom = e.deltaY < 0 ? 1.1 : 0.9;
    
    const xRange = chart.scales.x.max - chart.scales.x.min;
    const yRange = chart.scales.y.max - chart.scales.y.min;
    
    const newXRange = xRange / zoom;
    const newYRange = yRange / zoom;
    
    chart.options.scales.x.min = Math.max(0, dataX - (dataX - chart.scales.x.min) / zoom);
    chart.options.scales.x.max = Math.min(2000, dataX + (chart.scales.x.max - dataX) / zoom);
    chart.options.scales.y.min = Math.max(90, dataY - (dataY - chart.scales.y.min) / zoom);
    chart.options.scales.y.max = Math.min(800, dataY + (chart.scales.y.max - dataY) / zoom);
    
    chart.update('none');
  });

  // Mouse drag pan
  canvas.addEventListener('mousedown', function(e) {
    if (e.shiftKey) { // Only pan when Shift is held
      isMouseDown = true;
      startX = e.clientX;
      startY = e.clientY;
      canvas.style.cursor = 'grabbing';
      
      initialScales = {
        xMin: chart.scales.x.min,
        xMax: chart.scales.x.max,
        yMin: chart.scales.y.min,
        yMax: chart.scales.y.max
      };
    }
  });

  canvas.addEventListener('mousemove', function(e) {
    if (isMouseDown && initialScales) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      const xRange = initialScales.xMax - initialScales.xMin;
      const yRange = initialScales.yMax - initialScales.yMin;
      
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      const xMove = -(deltaX / canvasWidth) * xRange;
      const yMove = (deltaY / canvasHeight) * yRange;
      
      chart.options.scales.x.min = Math.max(0, initialScales.xMin + xMove);
      chart.options.scales.x.max = Math.min(2000, initialScales.xMax + xMove);
      chart.options.scales.y.min = Math.max(90, initialScales.yMin + yMove);
      chart.options.scales.y.max = Math.min(800, initialScales.yMax + yMove);
      
      chart.update('none');
    } else if (!isMouseDown && e.shiftKey) {
      canvas.style.cursor = 'grab';
    } else {
      canvas.style.cursor = 'default';
    }
  });

  canvas.addEventListener('mouseup', function() {
    isMouseDown = false;
    initialScales = null;
    canvas.style.cursor = e.shiftKey ? 'grab' : 'default';
  });

  canvas.addEventListener('mouseleave', function() {
    isMouseDown = false;
    initialScales = null;
    canvas.style.cursor = 'default';
  });

  // Keyboard shortcuts for zoom
  document.addEventListener('keydown', function(e) {
    if (e.target.closest('.chart-container')) {
      switch(e.key) {
        case '+':
        case '=':
          e.preventDefault();
          zoomChart(1.1);
          break;
        case '-':
          e.preventDefault();
          zoomChart(0.9);
          break;
      }
    }
  });
}

function zoomChart(factor) {
  const xRange = chart.scales.x.max - chart.scales.x.min;
  const yRange = chart.scales.y.max - chart.scales.y.min;
  const centerX = (chart.scales.x.max + chart.scales.x.min) / 2;
  const centerY = (chart.scales.y.max + chart.scales.y.min) / 2;
  
  const newXRange = xRange / factor;
  const newYRange = yRange / factor;
  
  chart.options.scales.x.min = Math.max(0, centerX - newXRange / 2);
  chart.options.scales.x.max = Math.min(2000, centerX + newXRange / 2);
  chart.options.scales.y.min = Math.max(90, centerY - newYRange / 2);
  chart.options.scales.y.max = Math.min(800, centerY + newYRange / 2);
  
  chart.update('none');
}

function initializeControls() {
  // Toggle Dotcom line
  document.getElementById('toggleDotcom').addEventListener('click', function() {
    const dataset = chart.data.datasets[0];
    dataset.hidden = !dataset.hidden;
    chart.update();
    this.textContent = dataset.hidden ? 'Show Dotcom' : 'Hide Dotcom';
  });

  // Toggle AI line  
  document.getElementById('toggleAI').addEventListener('click', function() {
    const dataset = chart.data.datasets[1];
    dataset.hidden = !dataset.hidden;
    chart.update();
    this.textContent = dataset.hidden ? 'Show AI' : 'Hide AI';
  });

  // Reset zoom
  document.getElementById('resetZoom').addEventListener('click', function() {
    chart.options.scales.x.min = 0;
    chart.options.scales.x.max = 2000;
    chart.options.scales.y.min = 90;
    chart.options.scales.y.max = 800;
    chart.update();
  });
}

function updateCountdown() {
  const targetDate = new Date('2027-07-25');
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;
  
  if (timeDifference > 0) {
    const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const countdownElement = document.querySelector('.countdown');
    if (countdownElement) {
      countdownElement.textContent = days.toLocaleString();
    }
  }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  
  switch(e.key) {
    case 'r':
    case 'R':
      document.getElementById('resetZoom').click();
      break;
    case '1':
      document.getElementById('toggleDotcom').click();
      break;
    case '2':
      document.getElementById('toggleAI').click();
      break;
  }
});

// Update progress bars animation
document.addEventListener('DOMContentLoaded', function() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  setTimeout(() => {
    progressBars.forEach(bar => {
      bar.style.width = bar.style.width;
    });
  }, 500);
});

// Add instructions for zoom/pan
document.addEventListener('DOMContentLoaded', function() {
  const chartSection = document.querySelector('.chart-section');
  const instructions = document.createElement('div');
  instructions.className = 'chart-instructions';
  instructions.style.cssText = `
    font-size: 12px;
    color: #626c71;
    margin-top: 10px;
    text-align: center;
  `;
  instructions.innerHTML = 'Mouse wheel: zoom • Shift + drag: pan • +/- keys: zoom • R: reset • 1/2: toggle lines';
  chartSection.appendChild(instructions);
});