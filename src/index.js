import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from 'styled/Theme';
import './styled/index.css';
import { globalStyles } from 'styled/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="goit-react-hw-05-movies">
    <ThemeProvider theme={theme}>
      <App />
      <Global styles={globalStyles} />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
