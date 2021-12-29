import { apolloClient } from '../constants/socket';
import { subscriptionQuery as query } from '../constants/queries';

export const actionTypes = {
  GET_METRICS_DATA_INIT: 'GET_METRICS_DATA_INIT',
  GET_METRICS_DATA_SUCCESS: 'GET_METRICS_DATA_SUCCESS',
};

// Metric data handled via Apollo's client subscription
export const getMetricsData = () => async (dispatch: any) => {
  dispatch({ type: actionTypes.GET_METRICS_DATA_INIT });
  const request = apolloClient.subscribe({ query });
  request.subscribe({
    next({ data }) {
      dispatch({ type: actionTypes.GET_METRICS_DATA_SUCCESS, payload: data.metricInfo });
    },
  });
};
