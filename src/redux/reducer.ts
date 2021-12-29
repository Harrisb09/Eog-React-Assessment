import { IAppAction } from '../types/globals';
import { actionTypes } from './actions';

type MetricInfo = {
  at: number;
  unit: string;
  value: number;
};

interface IMetricReducerState {
  latestMetricsSet: Map<string, MetricInfo>;
  metricsSet: Map<string, { [key: string]: number }>;
}

const initialState: IMetricReducerState = {
  latestMetricsSet: new Map(),
  metricsSet: new Map(),
};

// Formatter for getting the time string for the chart
const getFormattedTime = (time: number): string => {
  const date: Date = new Date(time);
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const seconds: number = date.getSeconds();
  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const metricReducer = (state = initialState, action: IAppAction) => {
  switch (action.type) {
    case actionTypes.GET_METRICS_DATA_SUCCESS: {
      const { metric, ...rest } = action.payload;
      state = { ...state };
      state.latestMetricsSet = new Map(state.latestMetricsSet);
      state.metricsSet = new Map(state.metricsSet);

      state.latestMetricsSet.set(metric, rest);
      const at = getFormattedTime(Math.floor(rest.at));
      state.metricsSet.set(at, {
        ...state.metricsSet.get(at),
        name: at.toString(),
        [metric]: rest.value,
      } as { [key: string]: any });
      break;
    }
    default:
      break;
  }
  return state;
};

export default metricReducer;
