import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CardLayoutPage from './pages/CardLayoutPage';
import HolyGrailPage from './pages/HolyGrailPage';

const examples: [string, string, JSX.Element][] = [
  ['Card Layout', '/card-layout', <CardLayoutPage />],
  ['Holy Grail', '/holy-grail', <HolyGrailPage />],
];

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage examples={examples.map(([title, path]) => [title, path])} />
        }
      />
      {examples.map(([, path, element]) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
