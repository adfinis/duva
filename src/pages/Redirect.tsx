import { DuvaLogo } from '@icons';
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
        <DuvaLogo style={{ height: '8rem', width: 'auto' }} aria-label="DUVA" />
        <h5>Please sign in to continue</h5>
        <Button variant="success" onClick={() => auth.signinRedirect()}>
          Login
        </Button>
      </div>
    </div>
  );
}
