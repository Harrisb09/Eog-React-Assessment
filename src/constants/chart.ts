import { metricColors } from './misc';

// Generic Configuration for the ApexCharts
export const chartConfig: ApexCharts.ApexOptions = {
  chart: {
    type: 'line',
    stacked: false,
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 2000,
      },
    },
  },
  stroke: {
    width: 1,
  },
  colors: metricColors,
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [],
    range: 8,
  },
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false,
    },
  },
};
