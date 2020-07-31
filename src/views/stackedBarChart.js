const finishedData = [4, 5, 6, 7, 8, 9];
const allData = [10, 10, 10, 10, 10, 10];

export function generateData(barColor = '#B8E0FF') {
  return {
  labels: ['6/1', '6/2', '6/3', '6/4', '6/5', '6/6'],
  datasets: [
    {
      label: '완료 주문',
      data: finishedData,
      backgroundColor: barColor,
      borderColor: '#00A7FF',
      borderWidth: 1,
      categoryPercentage: 0.5,
    },
    {
      label: '전체 주문',
      data: allData,
      backgroundColor: '#FFE0B2',
      borderColor: '#FB8C00',
      borderWidth: 1,
      categoryPercentage: 0.5,
    },
  ]
}}

const fontFamily = `'Roboto', 'Noto Sans KR', sans-serif`;
const fontColor = 'rgba(0, 0, 0, 0.87)';
const lineHeight = '20px';
const gridLineColor = '#EEEEEE';

const suggestedMax = Math.max(...finishedData, ...allData) * 1.1;

export const options = {
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    itemSort: () => -1,
    titleFontFamily: fontFamily,
    titleFontSize: 14,
    bodyFontFamily: fontFamily,
    bodyFontSize: 14,
    bodySpacing: 4,
    multiKeyBackground: '#ffffff00',
  },
  legend: {
    reverse: true,
    position: 'top',
    align: 'end',
    labels: {
      fontFamily,
      fontColor,
      fontSize: 14,
      lineHeight,
    },
  },
  scales: {
    xAxes: [{
      stacked: true,
      ticks: {
        padding: 8,
        fontFamily,
        fontColor,
        lineHeight,
      },
      gridLines: {
        borderDash: [5, 2],
        color: gridLineColor,
        drawTicks: false,
        // zeroLineColor: '#ff0000',
      },
    }],
    yAxes: [{
      stacked: false,
      ticks: {
        beginAtZero: true,
        padding: 8,
        fontFamily,
        fontColor,
        lineHeight,
        suggestedMax,
      },
      gridLines: {
        color: gridLineColor,
        drawTicks: false,
        // zeroLineColor: '#ff0000',
      },
    }]
  }
}
