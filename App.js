 

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtworkList from './ArtworkList';
import ArtworkDetail from './ArtworkDetail';
import "./styles.css"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtworkList />}  style={{ textDecoration: 'none' }} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

 