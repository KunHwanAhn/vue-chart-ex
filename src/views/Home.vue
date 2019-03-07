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
// TODO: Chart 내부의 Grid ON/OFF 옵션 확인
// TODO: Custom Tooltip
// TODO: type 없는 상태로 작업할 경우 어떻게 되는가?
// TODO: vue-chartjs의 Customized Tooltip 확인
// TODO: 확장한 변수들 call-by-reference인지 call-by-value 인지 확인 필요 or immutable인지?
// TODO: Component에 데이터 전달 되기 전에 내부 Method 사용 가능한지?
// TODO: 확장의 확장의 확장....같은 경우도 고민?
// TODO: ChartID 관리하는 방법은?

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
            label: '원금',
            data: range(10, 130, 10),
            backgroundColor: '#828282'
          },
          {
            label: '이자',
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
