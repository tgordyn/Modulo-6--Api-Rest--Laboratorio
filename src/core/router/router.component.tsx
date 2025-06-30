import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from '#scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.characterCollection} element={<CharacterCollectionScene />} />
        <Route path={switchRoutes.characterDetail} element={<CharacterScene />} />
      </Routes>
    </HashRouter>
  );
};
