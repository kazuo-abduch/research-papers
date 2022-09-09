import React from 'react';
import RoutesFile from './Routes/Routes';
import ResearchProvider from './context/postListProvider';
import './App.css';


function App() {
  return (
    <ResearchProvider>
      <RoutesFile />
    </ResearchProvider>
  );
}

export default App;
