// Close Popup
function closePopup() {
  document.getElementById('intro-popup').style.display = 'none';
}

// Visualization Data
const visualizations = [
  'bubbleChart',      // Placeholder for the bubble chart
  'scatterPlot',      // Placeholder for the scatter plot
  'heatmap'           // Placeholder for the heatmap
];

let currentVizIndex = 0;

// Load Visualization
function loadVisualization() {
  // Replace content in #map based on the currentVizIndex
  const map = document.getElementById('map');
  const currentViz = visualizations[currentVizIndex];
  
  if (currentViz === 'bubbleChart') {
    map.innerHTML = '<h2>Bubble Chart</h2>'; // Replace with actual chart rendering
  } else if (currentViz === 'scatterPlot') {
    map.innerHTML = '<h2>Scatter Plot</h2>'; // Replace with actual chart rendering
  } else if (currentViz === 'heatmap') {
    map.innerHTML = '<h2>Heatmap</h2>'; // Replace with actual map rendering
  }
}

// Load Previous Visualization
function previousVisualization() {
  currentVizIndex = (currentVizIndex > 0) ? currentVizIndex - 1 : visualizations.length - 1;
  loadVisualization();
}

// Load Next Visualization
function nextVisualization() {
  currentVizIndex = (currentVizIndex < visualizations.length - 1) ? currentVizIndex + 1 : 0;
  loadVisualization();
}

// Initial load of visualization
window.onload = () => {
  loadVisualization();
};

