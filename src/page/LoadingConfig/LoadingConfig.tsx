import { AwaitThreekitLoad, useNestedConfigurator, useThreekitInitStatus } from '@threekit-tools/treble/dist'
import React, { useEffect } from 'react'
import { RadialBG } from '../../assets/svg/radialBG'
import { SninerLoader } from '../../components/loaders/SninerLoader/SninerLoader'
import light from './../../assets/img/light.png'
import { LogoLogitech } from './../../assets/svg/logoLogitech'
import s from './LoadingConfig.module.scss'
import { getThreekitName, getThreekitValues } from './../../functionConfiguration/threekitFunc/baseFuncThreekit'
import { useLocation } from 'react-router-dom'
import { getTypeConfig } from '../../functionConfiguration/routing/baseUrl'
import { changeTo3DConfig } from '../../functionConfiguration/routing/threekitRouting'
export const LoadingConfig = () => {
    const hasLoaded = useThreekitInitStatus();
    const nestedConfiguratorKeyBoard = useNestedConfigurator('Customize keyboard');
    const nestedConfiguratorMouse = useNestedConfigurator('Customize mouse');
    const { pathname } = useLocation()
    const typeConfig = getTypeConfig(pathname)


    useEffect(() => {
        if (hasLoaded) {
            //@ts-ignore
            if (!window['playerThreekit']) {
                //@ts-ignore
                const playerThreekit = window.threekit.player.enableApi('player');
                //@ts-ignore
                window.playerThreekit = playerThreekit;
                //@ts-ignore

            }

            if (typeConfig) {

                changeTo3DConfig(typeConfig)



            }



        }
    }, [hasLoaded]);
    return !hasLoaded ? (
        <div className={s.wrapPage}>
            <div className={s.bg}>
                <RadialBG />
            </div>
            <div className={s.lightBG}>
                <img src={light} className={s.imgBG} />
            </div>

            <div className={s.logoLigetch}>
                <LogoLogitech />
            </div>

            <div className={s.loadingBox}>
                <div className={s.spiner}>
                    <SninerLoader />
                </div>
                <div className={s.loadingDescription}>
                    <div className={s.description}>  We're preparing your content</div>
                    <div className={s.subDescription}>  This shouldn't take too long</div>
                </div>
            </div>

        </div>
    ) : <></>
}
