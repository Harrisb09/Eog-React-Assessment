import { combineReducers } from '@reduxjs/toolkit';
import filters from '../Features/Filters/reducer';
import metrics from './reducer';

const reducer = combineReducers({
  filters,
  metrics,
});

export default reducer;

export type IReduxState = ReturnType<typeof reducer>;
