import React from 'react'
import { useAttribute } from '@threekit-tools/treble/dist'
import { useLocation } from 'react-router-dom'
import { Conponent360Drag } from '../../../assets/svg/360Drag'  
import { IconLight } from '../../../assets/svg/IconLight'
import { MouseIconSvg } from '../../../assets/svg/MouseIconSvg'
import { TurnIcon } from '../../../assets/svg/turnIcon'
import { checkConfigKeyboard } from '../../../functionConfiguration/routing/baseUrl'
import { InfoMessage } from '../InfoMessage/InfoMessage'
import s from './InfoMessagesWrap.module.scss'

export const InfoMessagesWrap = () => {

    const { pathname } = useLocation()
    const [attribute, setAttribute]: any = useAttribute('Turn on/off RGB light');


    return (
        <div className={s.wrapBox}>
            <InfoMessage Icon={<MouseIconSvg />} text="Use mouse wheel to zoom in/out" style={{ maxWidth: '135px' }} />
            <InfoMessage Icon={<Conponent360Drag />} text="Click & Drag to Rotate 360°" />
            {checkConfigKeyboard(pathname) ? <InfoMessage onClick={() => setAttribute(!attribute['value'])} Icon={attribute && attribute['value'] ? <TurnIcon /> : <IconLight style={{ fill: `#ffdd59` }} />} text="Turn on/off RGB light" /> : <div></div>}

        </div>
    )
}
