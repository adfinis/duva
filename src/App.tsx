import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Forms from './pages/Forms';
import Header from './components/shared/Header';

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
