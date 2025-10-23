import './App.css';
import { ApolloProvider } from '@apollo/client/react';
import { useMemo } from 'react';
import { useAuth } from 'react-oidc-context';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Button } from './components/shared/Button';
import Header from './components/shared/Header';
import { createApolloClient } from './gql/client';
import { Dashboard } from './pages/Dashboard';
import { Forms } from './pages/Forms';
import { PageContainer } from './pages/PageContainer';
import { CreateForm } from './pages/CreateForm';
import { RedirectPage } from './pages/Redirect';

const App = () => {
  const auth = useAuth();

  // biome-ignore lint/correctness/useExhaustiveDependencies: Client created once, token fetched per-request
  const graphqlClient = useMemo(
    () => createApolloClient(() => auth.user?.access_token),
    [],
  );

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

  const ProtectedApp = () => {
    return (
      <>
        <Header
          title="DUVA"
          rightElement={
            <Button variant="danger" onClick={() => auth.signoutRedirect()}>
              Logout
            </Button>
          }
        />
        <PageContainer>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/forms/create" element={<CreateForm />} />
        </Routes>
        </PageContainer>
      </>
    );
  };

  return (
    <ApolloProvider client={graphqlClient}>
      <Router>
        {auth.isAuthenticated ? <ProtectedApp /> : <RedirectPage />}
      </Router>
    </ApolloProvider>
  );
};

export default App;
