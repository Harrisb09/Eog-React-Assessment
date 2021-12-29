import { IAppAction } from '../../types/globals';
import { actionTypes } from './actions';

interface IReducerState {
  metrics: Array<string> | null;
  selectedMetrics: Array<string>;
}

const initialState = {
  metrics: null,
  selectedMetrics: [],
};

const FilterReducer = (state: IReducerState = initialState, action: IAppAction) => {
  switch (action.type) {
    case actionTypes.SELECT_METRIC_FILTER:
      state = { ...state };
      state.selectedMetrics = action.payload;
      break;
    case actionTypes.GET_METRICS_SUCCESS:
      state = { ...state };
      state.metrics = action.payload;
      break;
    default:
      break;
  }
  return state;
};

export default FilterReducer;
