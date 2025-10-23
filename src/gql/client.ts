import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { GRAPHQL_URL } from '@/config';

export function createApolloClient(getAccessToken: () => string | undefined) {
  const authLink = new SetContextLink((prevContext) => {
    const token = getAccessToken();
    return {
      ...prevContext,
      headers: {
        ...prevContext.headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(new HttpLink({ uri: GRAPHQL_URL })),
  });
}
