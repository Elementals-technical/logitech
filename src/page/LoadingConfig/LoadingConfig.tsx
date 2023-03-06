import React from 'react'
import { RadialBG } from '../../assets/svg/radialBG'
import light from './../../assets/img/light.png'
import s from './LoadingConfig.module.scss'

export const LoadingConfig = () => {
    return (
        <div>
            <div className={s.bg}>
                <RadialBG />
            </div>
            <div className={s.lightBG}>
                <img src={light} className={s.imgBG} />
            </div>

            <div className={s.loadingBox}>
                <div className="loadingSnpiner">

                </div>
                <div className={s.loadingDescription}>
                    <div className={s.description}>  We're preparing your content</div>
                    <div className={s.subDescription}>  This shouldn't take too long</div>
                </div>
            </div>

        </div>
    )
}
