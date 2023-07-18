import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './style/global.css';
import { ModalState } from './context/ModalContext.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalState>
        <App />
      </ModalState>
    </BrowserRouter>
  </React.StrictMode>
);
