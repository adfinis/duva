import './App.css';
import { ApolloProvider } from '@apollo/client/react';
import { useMemo } from 'react';
import { useAuth } from 'react-oidc-context';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { PageContainer } from '@/components/layout/PageContainer';
import { createApolloClient } from './gql/client';
import { CreateForm } from './pages/CreateForm';
import { Forms } from './pages/Forms';
import { HomePage } from './pages/HomePage';
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
        <Header />
        <PageContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
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
