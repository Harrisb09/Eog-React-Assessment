import React, { useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Grid, makeStyles } from '@material-ui/core';
import { getMetrics, selectMetrics } from './actions';
import { IReduxState } from '../../redux/root-reducer';

const useStyles = makeStyles(() => ({
  filters: {
    marginTop: 10,
    marginBottom: 30,
  },
}));

const Filters = () => {
  const dispatch = useDispatch();
  const { metrics } = useSelector((state: IReduxState) => state.filters);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getMetrics());
  }, []);

  // Using AutoComplete from @material-ui for rendering the Dropdown component
  // This is required for rendering the metrics selection dropdown
  return (
    <Grid container className={classes.filters}>
      <Grid item xs={12}>
        {metrics && (
          <Autocomplete
            multiple
            renderInput={(params: any) => <TextField {...params} variant="outlined" placeholder="Select metrics..." />}
            options={metrics}
            onChange={(_, values) => dispatch(selectMetrics(values))}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Filters;
