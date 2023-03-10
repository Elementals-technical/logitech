import React from 'react'
import { useStoreSelector } from '../../..'
import { RadialBG } from '../../../assets/svg/radialBG'
import { getTypeModeConfigDesk } from '../../../functionConfiguration/view/modeConfig'
import { getModeConfig } from '../../../store/selectors/selectors'

import light from './../../../assets/img/light.png'

import s from './MainBG.module.scss'
export const MainBG = () => {

    const modeConfig = useStoreSelector(getModeConfig)

    return getTypeModeConfigDesk(modeConfig) ?
        <>
            {/* <div className={s.bg}>
                    <RadialBG />
                </div>
                <div className={s.lightBG}>
                    <img src={light} className={s.imgBG} />
                </div> */}
        </> : <></>



}
