import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: `https://api-sa-east-1.graphcms.com/v2/cl4u6fg8h0lyh01ui648i1ljm/master`,
	cache: new InMemoryCache()
});