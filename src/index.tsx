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

//@ts-ignore
const store1Context: any = React.createContext();
//@ts-ignore
export const useStoreDispatch = createDispatchHook(store1Context);
//@ts-ignore
export const useStoreSelector = createSelectorHook(store1Context);

root.render(
  <Provider store={store} context={store1Context}>

    <Router>

      <App />

    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
