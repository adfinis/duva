import './App.css';
import { useAuth } from 'react-oidc-context';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/shared/Header';
import Dashboard from './pages/Dashboard';
import Forms from './pages/Forms';
import { RedirectPage } from './pages/Redirect';

const App = () => {
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

  const ProtectedApp = () => {
    return (
      <>
        <Header title="DUVA" rightElement={<button type="button" onClick={() => auth.signoutRedirect()}>Logout</button>} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      {auth.isAuthenticated ? <ProtectedApp /> : <RedirectPage />}
    </Router>
  );
};

export default App;
