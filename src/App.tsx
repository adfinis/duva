import './App.css';
import { ApolloProvider } from '@apollo/client/react';
import { useEffect, useRef } from 'react';
import { type AuthContextProps, useAuth } from 'react-oidc-context';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { PageContainer } from '@/components/layout/PageContainer';
import { createApolloClient } from './gql/client';
import { CreateForm } from './pages/CreateForm';
import { Forms } from './pages/Forms';
import { HomePage } from './pages/HomePage';
import { RedirectPage } from './pages/Redirect';

export function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return (
      <div>
        <h3>Oops... {auth.error.message}</h3>
        <button type="button" onClick={() => auth.signinRedirect()}>
          Login
        </button>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <Router>
        <RedirectPage />
      </Router>
    );
  }

  return <AuthenticatedApp auth={auth} />;
}

function AuthenticatedApp({ auth }: { auth: ReturnType<typeof useAuth> }) {
  const authRef = useRef<AuthContextProps>(auth);

  useEffect(() => {
    authRef.current = auth;
  }, [auth]);

  const clientRef = useRef(
    createApolloClient(() => authRef.current.user?.access_token),
  );

  return (
    <ApolloProvider client={clientRef.current}>
      <Router>
        <Header />
        <PageContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/forms/create" element={<CreateForm />} />
          </Routes>
        </PageContainer>
      </Router>
    </ApolloProvider>
  );
}
