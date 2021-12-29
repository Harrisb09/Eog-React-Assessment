import { makeStyles } from '@material-ui/core';
import React from 'react';
import ApexChart from 'react-apexcharts';
import { chartConfig } from '../constants/chart';
import { metricColors } from '../constants/misc';

interface IChartProps {
  selectedMetrics: string[];
  chartId: string;
}

const useStyles = makeStyles({
  wrapper: {
    marginTop: '20px',
    border: '1px solid #eeeeee',
  },
});

// Using React.memo for memoization here so the component doesn't reload itself unless required
// Reason: parent component is subscribed to the redux with live data
const Chart = React.memo(({ selectedMetrics, chartId }: IChartProps) => {
  const classes = useStyles();
  const series = selectedMetrics.map((metric) => ({
    name: metric,
    data: [],
  }));
  const config = { ...chartConfig };
  // Generating config for y-axis here from the list of selected metrics
  const yaxis = selectedMetrics.map((metric, index) => {
    const color = metricColors[index];
    return {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color,
      },
      labels: {
        style: {
          colors: color,
        },
      },
      title: {
        text: metric,
        style: {
          color,
        },
      },
    };
  });

  if (config.chart) {
    config.chart.id = chartId;
  }
  config.yaxis = yaxis;
  return <ApexChart className={classes.wrapper} options={config} series={series} />;
});

export default Chart;
