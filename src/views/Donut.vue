<template>
  <div class="donut">
    <div class="chart-container">
      <canvas key="donutContainer" :id="chartId"></canvas>
      <div v-if="centerText" class="pie-text">{{ centerText }}</div>
    </div>
  </div>
</template>

<script>
import DefaultChart from './DefaultChart'

export default {
  name: 'Donut',
  extends: DefaultChart,
  props: {
    centerText: String,
  },
  data() {
    return {
      type: 'doughnut',
      customOptions: {
        responsive: true,
        aspectRatio: 1,
        animation: {
          duration: 0,
        },
        legend: {
          display: false,
          position: 'right',
          labels: {
            boxWidth: 15,
            fontSize: 12,
            fontStyle: 'normal',
            fontColor: '#666',
            fontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            padding: 10
          },
        },
        tooltips: {
          enabled: false,
        },
        scales: null,
        cutoutPercentage: 60,
        rotation: -0.5 * Math.PI,
        circumference: 2 * Math.PI,
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.donut {
  position: relative;
  overflow: auto;
}

.chart-container {
  canvas {
    width: 100%;
    height: 100%;
  }
}

.pie-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
