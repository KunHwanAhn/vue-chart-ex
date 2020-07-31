<template>
  <div class="chart-container">
    <canvas :id="$options.CHART_ID"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import { data, options } from './barChart'

const CHART_ID = 'my-chart'

export default {
  CHART_ID,
  data() {
    return {
    }
  },
  mounted() {
    const ctx = document.getElementById('my-chart').getContext('2d')

    new Chart(ctx, {
      type: 'bar',
      data,
      options,
    })
  },
}
</script>

<style lang="scss" scoped>
.chart-container {
  min-height: 500px;
}
</style>
