<template>
  <div>
    <div class="stacked-bar">
      <canvas key="stackedBarContainer" :id="chartId"></canvas>
    </div>
  </div>
</template>

<script>
import DefaultChart from './DefaultChart'

export default {
  name: 'StackedBar',
  extends: DefaultChart,
  data() {
    return {
      type: 'bar',
      customOptions: {
        aspectRatio: 1.5,
        legend: {
          position: 'bottom',
        },
        tooltips: {
          enabled: true,
          custom: this.handleCustomTooltip,
          mode: 'index',
          intersect: true,
        },
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,
          }]
        }
      }
    }
  },
  methods: {
    handleCustomTooltip(tooltipModel) {
      // Tooltip Element
      var tooltipEl = document.getElementById('chartjs-tooltip');

      // Create element on first render
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'chartjs-tooltip';
        tooltipEl.classList.add('custom-tooltip')
        document.body.appendChild(tooltipEl);
      }

      // Hide if no tooltip
      if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return
      }


      // Set caret Position
      tooltipEl.classList.remove('above', 'below', 'no-transform');
      if (tooltipModel.yAlign) {
        tooltipEl.classList.add(tooltipModel.yAlign);
      } else {
        tooltipEl.classList.add('no-transform');
      }

      tooltipEl.textContent = 'HELLO_TOOLTIP'

      // `this` will be the overall tooltip
      var chartPosition = this.chart.canvas.getBoundingClientRect();

      console.log(JSON.stringify(chartPosition))
      console.log(JSON.stringify(tooltipModel))

      // Display, position, and set styles for font
      tooltipEl.style.opacity = 1;
      tooltipEl.style.position = 'absolute';
      // tooltipEl.style.top = `${chartPosition.height - 200}px`
      // tooltipEl.style.left = '272px'
      tooltipEl.style.left = chartPosition.left + window.pageXOffset + tooltipModel.caretX + 'px';
      tooltipEl.style.top = chartPosition.y - chartPosition.top + window.pageYOffset + tooltipModel.caretY + 'px';
      tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
      tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
      tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
      tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
      tooltipEl.style.pointerEvents = 'none';
    }
  }
}
</script>

<style lang="scss">
.custom-tooltip {
  background-color: #999999;
  border-radius: 6px;
}
</style>


<style lang="scss" scoped>
.stacked-bar {
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
