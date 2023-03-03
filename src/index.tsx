import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { ThreekitProvider } from '@threekit-tools/treble';
import { Config3DMode } from './page/Config3DMode/Config3DMode';
import { MainPage } from './page/MainPage/MainPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const projects = {
  credentials: {
    preview: {
      publicToken: 'b415e9b1-8f0e-49bd-9678-307d3a6cb3c3',
      orgId: '9eba6177-9cb1-4224-8e06-4f0d0f7cabbd',
    },
  },
  products: {
    preview: {
      assetId: '5d5d8abb-92a8-4186-b788-e08c2999c656',
    },
  },
};


const threekitEnv = 'preview';
const playerConfig = {
  allowMobileVerticalOrbit: true,
};

root.render(
  <React.StrictMode>
    <ThreekitProvider
      project={projects}
      threekitEnv={threekitEnv}
      playerConfig={playerConfig}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <MainPage /> */}
      {/* <Config3DMode /> */}
      <App />
      <div>

      </div>
    </ThreekitProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
