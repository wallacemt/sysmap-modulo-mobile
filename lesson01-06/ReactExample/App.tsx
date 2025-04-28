import React from 'react';
import {} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import {AppStateProvider} from './src/contexts/AppState';

function App() {
  return (
    <>
      <AppStateProvider>
        <AppRoutes />
      </AppStateProvider>
    </>
  );
}

export default App;
