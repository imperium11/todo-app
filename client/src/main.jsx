import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import './fonts/tahu.ttf';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Extend the theme
const theme = extendTheme({
  colors: {
    option: {
      1: '#9acdff',
      2: '#58c5ee',
      3: '#f6efa2',
      4: '#c7e2d3',
      5: '#fbe8c2',
      6: '#eab840',
      7: '#eabdb8',
      8: '#393939'
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
);
