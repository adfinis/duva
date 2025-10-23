import { useAuth } from 'react-oidc-context';
import { Button } from '@/components/shared/Button';

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
        <Button variant="success" onClick={() => auth.signinRedirect()}>
          Login
        </Button>
      </div>
    </div>
  );
}
