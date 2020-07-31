<template>
  <div>
    <div style="min-height: 1200px;"></div>
    <div class="chart-container">
      <canvas :id="$options.CHART_ID"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import 'chartjs-plugin-deferred';

import { generateData, options } from './stackedBarChart'

const CHART_ID = 'my-chart'

export default {
  CHART_ID,
  data() {
    return {
    }
  },
  mounted() {
    const ctx = document.getElementById('my-chart').getContext('2d')
    const barColor = ctx.createLinearGradient(0, 500, 0, 0);
    barColor.addColorStop(0, '#0072FF');
    barColor.addColorStop(1, '#3DB8FF');

    new Chart(ctx, {
      type: 'bar',
      data: generateData(barColor),
      options: {
        ...options,
        plugins: {
          deferred: {
            yOffset: '50%',
            delay: 500
          }
        }
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.chart-container {
  min-height: 500px;
}
</style>
