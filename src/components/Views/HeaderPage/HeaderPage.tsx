import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStoreSelector } from '../../..'
import { LogoLogitech } from '../../../assets/svg/logoLogitech'
import { getTypeModeConfig3D } from '../../../functionConfiguration/view/modeConfig'
import { getModeConfig } from '../../../store/selectors/selectors'
import { BtnBack } from '../../Buttons/BtnBack/BtnBack'
import { NameModel } from '../NameModel/NameModel'

import s from './HeaderPage.module.scss'

export const HeaderPage = () => {

    const navigate = useNavigate();

    const modeConfig = useStoreSelector(getModeConfig)


    return <>
        {getTypeModeConfig3D(modeConfig) && <div className={s.logoLigetch}><LogoLogitech /></div>}

        {getTypeModeConfig3D(modeConfig) && <div className={s.infoPage}>
            <BtnBack onHandle={() => navigate('/')} />
            <NameModel />
        </div>}
    </>

}
