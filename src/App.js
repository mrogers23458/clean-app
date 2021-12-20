import React from 'react';
import { LoginPage } from './pages';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;
