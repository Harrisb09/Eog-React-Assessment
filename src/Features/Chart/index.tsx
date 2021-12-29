import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../redux/root-reducer';
import Chart from '../../components/Chart';

// This component is generating the content to be consuemd by the Chart component
// Additionally we are passing a id - "realtime" which can be used by ApexCharts.exec
const ChartContainer = () => {
  const selectedMetrics = useSelector((state: IReduxState) => state.filters.selectedMetrics);
  const metricsSet = useSelector((state: IReduxState) => state.metrics.metricsSet);

  useEffect(() => {
    const tickKeys = Array.from(metricsSet.entries());
    const chartData = selectedMetrics.map((metric: string) => {
      const row: Array<{ x: any; y: any }> = [];
      tickKeys.forEach(([time, data]) => {
        // Don't include the row entry that isn't there
        if (data[metric] !== undefined) {
          row.push({
            y: data[metric],
            x: time,
          });
        }
      });
      return {
        data: row,
      };
    });
    ApexCharts.exec('realtime', 'updateSeries', chartData, true);
  }, [metricsSet, selectedMetrics]);

  return <Chart selectedMetrics={selectedMetrics} chartId="realtime" />;
};

export default ChartContainer;
