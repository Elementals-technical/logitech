import { useConfigurator, usePlayerLoadingStatus, useThreekitInitStatus } from '@threekit-tools/treble/dist';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useStoreDispatch } from '../..';
import { checkSelectedThreekitKeyboard, getConfigurationDefaultValue } from '../../functionConfiguration/keyboard/functionKeyboard';
import { checkConfigKeyboard, checkConfigMouse, getModeConfigUrl, getTypeConfig } from '../../functionConfiguration/routing/baseUrl';
import { getObjectActive3DConfig, getObjectActiveDESKConfig } from '../../functionConfiguration/routing/threekitRouting';
import { setDeskDefaultValue } from '../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { getModeConfigRelativeUrl, getTypeModeConfig3D, getTypeModeConfigDesk } from '../../functionConfiguration/view/modeConfig';
import { setDefaultConfigurations, setLoadingPlayer, setModeConfigurations, setTypeConfig } from '../../store/actions/Settings';

export const SetDefafaultValue = () => {
    const [attributes, setConfiguration] = useConfigurator();

    const { pathname } = useLocation()

    const dispatch = useStoreDispatch();

    let modeConfigStore = getModeConfigRelativeUrl(pathname);
    dispatch(setModeConfigurations(modeConfigStore))

    const typeConfig = getTypeConfig(pathname)
    const modeConfig = getModeConfigUrl(pathname)
    const hasLoaded = useThreekitInitStatus();



    useEffect(() => {
        if (hasLoaded) {
            //@ts-ignore
            if (!window['playerThreekit']) {
                //@ts-ignore
                const playerThreekit = window.threekit.player.enableApi('player');
                //@ts-ignore
                window.playerThreekit = playerThreekit;
            }

            if (typeConfig) {
                 
                if (getTypeModeConfigDesk(modeConfigStore)) {
                    setDeskDefaultValue(setConfiguration)
                } else if (getTypeModeConfig3D(modeConfigStore)) {

                    if (checkConfigMouse(pathname)) {
                        const objValue = getObjectActive3DConfig(typeConfig)
                        if (setConfiguration) setConfiguration(objValue)
                    }

                }

                setTimeout(() => {
                    dispatch(setDefaultConfigurations(getConfigurationDefaultValue()))
                    dispatch(setLoadingPlayer(true))
                }, 1200)

            } else if (getTypeModeConfigDesk(modeConfigStore)) {
                 
                setDeskDefaultValue(setConfiguration)
                setTimeout(() => {
                    dispatch(setDefaultConfigurations(getConfigurationDefaultValue()))
                    dispatch(setLoadingPlayer(true))
                }, 1200)
            }


        }
    }, [hasLoaded]);



    useEffect(() => {
        //@ts-ignore
        if (typeConfig && setConfiguration && window['playerThreekit']) {
            dispatch(setDefaultConfigurations(getConfigurationDefaultValue()))
            let modeConfigStore = getModeConfigRelativeUrl(pathname);
            dispatch(setModeConfigurations(modeConfigStore))



            if (getTypeModeConfigDesk(modeConfigStore)) {
                setDeskDefaultValue(setConfiguration)
            } else if (getTypeModeConfig3D(modeConfigStore)) {

                const objValue = getObjectActive3DConfig(typeConfig)
                if (setConfiguration) setConfiguration(objValue)
            }


            setTimeout(() => {
                dispatch(setLoadingPlayer(true))
            }, 1000)


        }
    }, [pathname]);

    useEffect(() => {
        if (hasLoaded) {
            if (modeConfig) {
                let modeConfigStore = getModeConfigRelativeUrl(pathname);
                if (getTypeModeConfigDesk(modeConfigStore)) {
                    setDeskDefaultValue(setConfiguration)
                } else if (getTypeModeConfig3D(modeConfigStore)) {
                    const objValue = getObjectActive3DConfig(typeConfig)
                    if (setConfiguration) setConfiguration(objValue)
                }

                setTimeout(() => {
                    dispatch(setModeConfigurations(modeConfigStore))
                    dispatch(setLoadingPlayer(true))
                }, 1200)

            }
        }
    }, [modeConfig]);
    return (
        <></>
    )
}
