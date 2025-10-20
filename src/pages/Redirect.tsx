import { useAuth } from 'react-oidc-context';

export function RedirectPage() {
  const auth = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to DUVA</h1>
        <p>Please sign in to continue</p>
        <button type="button" onClick={() => auth.signinRedirect()}>
          Login
        </button>
      </div>
    </div>
  );
}
