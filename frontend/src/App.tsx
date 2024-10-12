// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Requests from './pages/Requests';
import Editrequest from './pages/Editrequest';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/edit/:id" element={<Editrequest />}>
          </Route>

          {/* Add other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
