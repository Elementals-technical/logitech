import React, { useEffect } from 'react'
import { useThreekitInitStatus } from '@threekit-tools/treble/dist'
import { RadialBG } from '../../assets/svg/radialBG'
import { SninerLoader } from '../../components/loaders/SninerLoader/SninerLoader'
import light from './../../assets/img/light.png'
import { LogoLogitech } from './../../assets/svg/logoLogitech'
import s from './LoadingConfig.module.scss' 
import { getCheckLoadThreekitPlayer } from '../../store/selectors/selectors'
import { useStoreSelector } from '../..'

export const LoadingConfig = () => {
    const hasLoaded = useStoreSelector(getCheckLoadThreekitPlayer);

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
