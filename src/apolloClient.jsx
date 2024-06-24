import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

import PropTypes from 'prop-types';

const ApolloWrapper = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

ApolloWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ApolloWrapper;
