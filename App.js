import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Practice from './components/Practice';
import Login from './components/Login';
import Main from './components/Main';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Practice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
