import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

import { ThreekitProvider } from '@threekit-tools/treble';
import { createDispatchHook, createSelectorHook, Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const projects = {
  credentials: {
    preview: {
      publicToken: '1a743c11-2ce5-49b7-b221-dd27c905271a',
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

//@ts-ignore
const store1Context: any = React.createContext();
//@ts-ignore
export const useStoreDispatch = createDispatchHook(store1Context);
//@ts-ignore
export const useStoreSelector = createSelectorHook(store1Context);


root.render(
  <React.StrictMode>
    <Provider store={store} context={store1Context}>

      <ThreekitProvider
        project={projects}
        threekitEnv={threekitEnv}
        playerConfig={playerConfig}
      >
        <Router>
          <App />
        </Router>
        <div>

        </div>
      </ThreekitProvider>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
