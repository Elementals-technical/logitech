import React from 'react';
import { GlobalPage } from './page/GlobalPage/GlobalPage';
import './fonts/fonts.css'
import { ThreekitProvider } from '@threekit-tools/treble/dist';
import { useLocation } from 'react-router-dom';
import { checkConfigKeyboard, checkConfigMouse, getTypeConfig } from './functionConfiguration/routing/baseUrl';
function App() {

  const { pathname } = useLocation()
 
  const saveConfig = {
    keyboard: 'KVewv9bCR',
    mouse: '-E3_37UR5'
  }
  let configurationId = saveConfig['keyboard']

  if (checkConfigKeyboard(pathname)) {
    configurationId = saveConfig['keyboard']

  }
  if (checkConfigMouse(pathname)) {
    configurationId = saveConfig['mouse']

  }

  const projects = {
    credentials: {
      preview: {
        publicToken: '1a743c11-2ce5-49b7-b221-dd27c905271a',
        orgId: '9eba6177-9cb1-4224-8e06-4f0d0f7cabbd',
      },
    },
    products: {
      preview: {
        configurationId: configurationId
      },
    },
  };

  const threekitEnv = 'preview';
  const playerConfig = {
    allowMobileVerticalOrbit: true,
  };


  return (
    <ThreekitProvider
      project={projects}
      threekitEnv={threekitEnv}
      playerConfig={playerConfig}
    >
      <GlobalPage />
    </ ThreekitProvider >
  );
}

export default App;
