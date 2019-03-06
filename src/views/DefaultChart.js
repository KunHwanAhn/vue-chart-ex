import Chart from 'chart.js'
import { merge } from 'lodash'

export default {
  props: {
    chartId: {
      type: String,
      required: true,
    },
    chartData: {
      type: Object,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      type: 'line',
      customOptions: {},
      defaultOptions: {
        // Responsive
        responsive: true,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: true,
        aspectRatio: 2,
        // Interactions
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove', 'touchend'],
        // // Interactions - hover
        hover: {
          mode: 'nearest',
          intersect: true,
          axis: 'x',
          animationDuration: 400,
        },
        // Animations
        animation: {
          duration: 1000, // set 0 to disable
          easing: 'easeOutQuart', // https://easings.net/ko
        },
        // Tooltips
        tooltips: {
          enabled: true,
          custom: null,
          mode: 'nearest', // for genera usage
          intersect: true,  // default: true, if true, show tooltip when mouse pointer on the graph, bar, etc...
          position: 'average',
          backgroundColor: '#999999',
        },
        // Layouts
        layout: {
          padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }
        },
        // Legend
        legend: {
          display: true, // default: true
          position: 'top', // default: top
          fullWidth: true,
          labels: {
            boxWidth: 40,
            fontSize: 12,
            fontStyle: 'normal',
            fontColor: '#666',
            fontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            padding: 10
          },
        },
        // Title
        title: {
          display: false, // default: false
          text: 'Hello Chart.js',
          position: 'top',
          fontSize: 12,
          fontStyle: 'bold',
          fontColor: '#666',
          fontFamily: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
          padding: 10,
        },
        //
        scales: {
          xAxes: [{
            stacked: false,
          }],
          yAxes: [{
            stacked: false,
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    }
  },
  mounted() {
    const ctx = document.getElementById(this.chartId)

    this.chart = new Chart(ctx, {
      type: this.type,
      data: this.chartData,
      options: merge({}, this.defaultOptions, this.customOptions),
    })
  },
}
