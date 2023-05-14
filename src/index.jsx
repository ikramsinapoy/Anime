import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AnimeApp from './components/AnimeApp';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AnimeApp />
  </BrowserRouter>
);