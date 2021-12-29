import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import END_POINTS from './end-points';

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  new WebSocketLink({
    uri: END_POINTS.GRAPHQL,
    options: {
      reconnect: true,
    },
  }),
  new HttpLink({
    uri: END_POINTS.API,
  }),
);

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
