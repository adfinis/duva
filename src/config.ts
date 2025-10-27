/* OIDC CONFIG */
const KEYCLOAK_URL = import.meta.env.KEYCLOAK_URL || 'http://localhost:8080';
const KEYCLOAK_REALM = import.meta.env.KEYCLOAK_REALM || 'duva';
const KEYCLOAK_CLIENT_ID = import.meta.env.KEYCLOAK_CLIENT_ID || 'frontend';
const APP_URL = import.meta.env.APP_URL || 'http://localhost:3000';

export const OidcConfig = {
  authority: `${KEYCLOAK_URL}/realms/${KEYCLOAK_REALM}`,
  client_id: KEYCLOAK_CLIENT_ID,
  redirect_uri: APP_URL,
  post_logout_redirect_uri: APP_URL,
  response_type: 'code',
  scope: 'openid profile email',
  automaticSilentRenew: true,
  loadUserInfo: true,
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

/* API CONFIG */
export const GRAPHQL_URL =
  import.meta.env.GRAPHQL_URL || 'http://localhost:8000/graphql';
