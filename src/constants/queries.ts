import { gql } from '@apollo/client';

// Query for GraphQL subscription
export const subscriptionQuery = gql`
  subscription {
    metricInfo: newMeasurement {
      metric
      value
      at
      unit
    }
  }
`;

// Query for getting metrics list from EOG server
export const metricsQuery = gql`
  {
    metrics: getMetrics
  }
`;
