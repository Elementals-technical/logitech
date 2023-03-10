import React from 'react';
import { GlobalPage } from './page/GlobalPage/GlobalPage';
import './fonts/fonts.css'
import { ThreekitProvider } from '@threekit-tools/treble/dist';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkConfigKeyboard, checkConfigMouse, checkMode3DConfigUrl, checkModeDeskConfigUrl, getModeConfigUrl, getTypeConfig } from './functionConfiguration/routing/baseUrl';
import { onAnnotationChange } from './functionConfiguration/view/annotationCollisionMessageStyle';
function App() {

  const { pathname } = useLocation()
  const navigate = useNavigate()

  // const modeConfig = getModeConfigUrl(pathname)
  const saveConfig = {
    '3d': {
      keyboard: 'x-xKWlWAm',
      mouse: 'E-rokDhL_'
    },
    'desk': {
      all: 'l_vjolZUT'
    }
  }
  let configurationId = saveConfig['3d']['keyboard']


  if (checkModeDeskConfigUrl(pathname)) {
    configurationId = saveConfig['desk']['all']

  } else if (checkMode3DConfigUrl(pathname)) {
    if (checkConfigKeyboard(pathname)) {
      configurationId = saveConfig['3d']['keyboard']

    }
    if (checkConfigMouse(pathname)) {
      configurationId = saveConfig['3d']['mouse']

    }
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
    onAnnotationChange: (annotations: any, parentEl: any) => {

      onAnnotationChange(navigate)(annotations, parentEl)
    }
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
