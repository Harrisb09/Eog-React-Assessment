import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { IReduxState } from '../../redux/root-reducer';
import { metricColors } from '../../constants/misc';

const useStyles = makeStyles({
  container: {
    padding: '16px',
    fontSize: '0.8em',
  },
  value: {
    margin: 0,
    fontSize: '1.8em',
  },
});

export default () => {
  const metrics = useSelector((state: IReduxState) => state.metrics.latestMetricsSet);
  const selectedMetrics = useSelector((state: IReduxState) => state.filters.selectedMetrics);
  const classes = useStyles();

  return selectedMetrics.length ? (
    <Grid container spacing={2}>
      {selectedMetrics.map((metric, index) => (
        <Grid key={metric} item xs={4}>
          <Box
            className={classes.container}
            style={{
              backgroundColor: metricColors[index],
            }}
          >
            {metric} (in {metrics.get(metric)?.unit})
            <div className={classes.value}>{metrics.get(metric)?.value || '--'}</div>
          </Box>
        </Grid>
      ))}
    </Grid>
  ) : null;
};
