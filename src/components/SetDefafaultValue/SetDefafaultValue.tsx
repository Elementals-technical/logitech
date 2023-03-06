import { useConfigurator, usePlayerLoadingStatus, useThreekitInitStatus } from '@threekit-tools/treble/dist';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { getTypeConfig } from '../../functionConfiguration/routing/baseUrl';
import { getObjectActive3DConfig } from '../../functionConfiguration/routing/threekitRouting';

export const SetDefafaultValue = () => {
    const [attributes, setConfiguration] = useConfigurator();

    const { pathname } = useLocation()
    const typeConfig = getTypeConfig(pathname)
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
                //@ts-ignore
                setTimeout(() => {
                    const objValue = getObjectActive3DConfig(typeConfig)

                    if (setConfiguration) setConfiguration(objValue)
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
