import { useConfigurator, usePlayerLoadingStatus, useThreekitInitStatus } from '@threekit-tools/treble/dist';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useStoreDispatch } from '../..';
import { checkSelectedThreekitKeyboard, getConfigurationDefaultValue } from '../../functionConfiguration/keyboard/functionKeyboard';
import { checkConfigKeyboard, getModeConfigUrl, getTypeConfig } from '../../functionConfiguration/routing/baseUrl';
import { getObjectActive3DConfig, getObjectActiveDESKConfig } from '../../functionConfiguration/routing/threekitRouting';
import { getModeConfigRelativeUrl } from '../../functionConfiguration/view/modeConfig';
import { setDefaultConfigurations, setLoadingPlayer, setModeConfigurations, setTypeConfig } from '../../store/actions/Settings';

export const SetDefafaultValue = () => {
    const [attributes, setConfiguration] = useConfigurator();

    const { pathname } = useLocation()
    const typeConfig = getTypeConfig(pathname)
    const modeConfig = getModeConfigUrl(pathname)
    const hasLoaded = useThreekitInitStatus();

    const dispatch = useStoreDispatch();

    useEffect(() => {
        if (hasLoaded) {
            let modeConfigStore = getModeConfigRelativeUrl(pathname);

            dispatch(setModeConfigurations(modeConfigStore))
            //@ts-ignore
            if (!window['playerThreekit']) {
                //@ts-ignore
                const playerThreekit = window.threekit.player.enableApi('player');
                //@ts-ignore
                window.playerThreekit = playerThreekit;


            }

            if (typeConfig) {

                if (modeConfigStore === 'DESK') {
                    const objectActiveDESKConfig = getObjectActiveDESKConfig()
                    console.log('objectActiveDESKConfig', objectActiveDESKConfig);
                    console.log('setConfiguration', setConfiguration);

                    if (setConfiguration) setConfiguration(objectActiveDESKConfig)
                } else {
                    const objValue = getObjectActive3DConfig(typeConfig)
                    if (setConfiguration) setConfiguration(objValue)
                }

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
            console.log('modeConfigStore111', modeConfigStore);

            if (modeConfigStore === 'DESK') {
                // const objectActiveDESKConfig = getObjectActiveDESKConfig()
                // if (setConfiguration) setConfiguration(objectActiveDESKConfig)
            } else {
                const objValue = getObjectActive3DConfig(typeConfig)
                if (setConfiguration) setConfiguration(objValue)
            }

            dispatch(setModeConfigurations(modeConfigStore))

            if (!checkSelectedThreekitKeyboard(attributes)) {
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
                if (modeConfigStore === 'DESK') {
                    // const objectActiveDESKConfig = getObjectActiveDESKConfig()
                    // if (setConfiguration) setConfiguration(objectActiveDESKConfig)
                } else {
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
