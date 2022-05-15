import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Faves from '../views/Faves';
import Home from '../views/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faves" element={<Faves />} />
    </Routes>
  )
}

