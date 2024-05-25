import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraBaseProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraBaseProvider>
);
