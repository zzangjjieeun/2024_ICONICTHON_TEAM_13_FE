import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterStudent from './RegisterStudent/RegisterStudent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
