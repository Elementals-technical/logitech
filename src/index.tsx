import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { Cards, FlatForm, Player, Share, ThreekitProvider, Zoom } from '@threekit-tools/treble';
import { MainPage } from './page/MainPage/MainPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const projects = {
  credentials: {
    preview: {
      publicToken: '61f6a97b-0763-40ca-9be5-ead3421b9aaf',
      orgId: '73fae6a8-b627-4cbd-a0b9-872cc83d386b',
    },
  },
  products: {
    preview: {
      assetId: '3286bdae-e6aa-4dbe-bae8-7d1154a94c74',
    },
  },
};


const threekitEnv = 'preview';
const playerConfig = {
  allowMobileVerticalOrbit: true,
};

const { TopRightWidgets } = Player;


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
      <MainPage />

      {/* <PlayerComponent />
      <InterfaceComponent /> */}
      <div>

      </div>
    </ThreekitProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
