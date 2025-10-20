import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/shared/Header';
import Dashboard from './pages/Dashboard';
import Forms from './pages/Forms';

const App = () => {
  return (
    <Router>
      <Header title="DUVA" />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
};

export default App;
