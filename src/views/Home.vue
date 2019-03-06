<template>
  <div>
    <div>
      HOME
    </div>
    <div>
      <stacked-bar :chart-data="stackedBarData" chart-id="my-stacked-bar" class="stacked-bar-container" />
    </div>
    <div>
      <donut :chart-data="donutData" chart-id="my-donut" class="donut-container" />
    </div>
  </div>
</template>

<script>
import { range } from 'lodash'
import StackedBar from './StackedBar'
import Donut from './Donut'

const CHART_COLOR_LIST = ['#17ccb4', '#66dacb', '#b6e9e2', '#def0ee']

export default {
  name: 'home',
  components: {
    StackedBar,
    Donut,
  },
  data() {
    return {
      stackedBarData: {
        labels: range(1, 13).map(v => `${v}월`),
        datasets: [
          {
            label: 'A',
            data: range(10, 130, 10),
            backgroundColor: '#828282'
          },
          {
            label: 'B',
            data: range(1, 13),
            backgroundColor: '#17ccb4'
          }
        ]
      },
      donutData: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [
          {
            data: [12, 19, 3, 5],
            backgroundColor: CHART_COLOR_LIST,
            hoverBackgroundColor: CHART_COLOR_LIST,
            hoverBorderColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
          },
        ],
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.stacked-bar-container {
  padding: 16px;
}

.donut-container {
  padding: 16px;
}

@media (min-width: 640px) {
  .stacked-bar-container {
    max-width: 1200px;
  }

  .donut-container {
    max-width: 400px;
  }
}
</style>
