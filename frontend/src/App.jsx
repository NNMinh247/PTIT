import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Lobby from './pages/Lobby.jsx';
import PtitHD from './pages/PtitHD.jsx';
import PtitNT from './pages/PtitNT.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
      <Route path="/ptit-hd" element={<PtitHD />} />
      <Route path="/ptit-nt" element={<PtitNT />} />
    </Routes>
  );
}

export default App;