import { useConfigurator, usePlayerLoadingStatus, useThreekitInitStatus } from '@threekit-tools/treble/dist';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useStoreDispatch } from '../..';
import { getConfigurationDefaultValue } from '../../functionConfiguration/keyboard/functionKeyboard';
import { getTypeConfig } from '../../functionConfiguration/routing/baseUrl';
import { getObjectActive3DConfig } from '../../functionConfiguration/routing/threekitRouting';
import { setDefaultConfigurations, setLoadingPlayer, setTypeConfig } from '../../store/actions/Settings';

export const SetDefafaultValue = () => {
    const [attributes, setConfiguration] = useConfigurator();

    const { pathname } = useLocation()
    const typeConfig = getTypeConfig(pathname)
    const hasLoaded = useThreekitInitStatus();

    const dispatch = useStoreDispatch();

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

                dispatch(setTypeConfig(typeConfig))


                //@ts-ignore
                setTimeout(() => {

                    const objValue = getObjectActive3DConfig(typeConfig)

                    if (setConfiguration) setConfiguration(objValue)
            
                    setTimeout(() => {
                        dispatch(setDefaultConfigurations(getConfigurationDefaultValue()))
                        dispatch(setLoadingPlayer(true))
                    }, 800)
                }, 1000)

            }
        }
    }, [hasLoaded]);


    useEffect(() => {
        //@ts-ignore
        if (typeConfig && setConfiguration && window['playerThreekit']) {

            const objValue = getObjectActive3DConfig(typeConfig)
            if (setConfiguration) setConfiguration(objValue)

        }
    }, [pathname]);
    return (
        <>1</>
    )
}
