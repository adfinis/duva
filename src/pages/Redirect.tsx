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
        <h1 style={{ color: 'var(--color-white)' }}>Welcome to DUVA</h1>
        <p style={{ color: 'var(--color-anthracite-light)' }}>Please sign in to continue</p>
        <Button tone="success" onClick={() => auth.signinRedirect()}>
          Login
        </Button>
      </div>
    </div>
  );
}
