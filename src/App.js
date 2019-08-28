import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Routes />

      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
