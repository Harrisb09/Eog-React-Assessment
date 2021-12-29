import { apolloClient } from '../../constants/socket';
import { metricsQuery as query } from '../../constants/queries';

export const actionTypes = {
  SELECT_METRIC_FILTER: 'SELECT_METRIC_FILTER',
  GET_METRICS_INIT: 'GET_METRICS_INIT',
  GET_METRICS_SUCCESS: 'GET_METRICS_SUCCESS',
  GET_METRICS_FAILURE: 'GET_METRICS_FAILURE',
};

export const getMetrics = () => async (dispatch: any) => {
  dispatch({ type: actionTypes.GET_METRICS_INIT });
  try {
    const { data } = await apolloClient.query({ query });
    dispatch({ type: actionTypes.GET_METRICS_SUCCESS, payload: data.metrics });
  } catch (e) {
    // In case of errors, dispatch the failure action
    // TODO: May be integrate a toast here?
    dispatch({ type: actionTypes.GET_METRICS_FAILURE, payload: e });
  }
};

export const selectMetrics = (payload: string[]) => ({
  type: actionTypes.SELECT_METRIC_FILTER,
  payload,
});
