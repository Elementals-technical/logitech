import { useAttribute } from '@threekit-tools/treble/dist'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Conponent360Drag } from '../../../assets/svg/360Drag'
import { MouseSvg } from '../../../assets/svg/mouseSvg'
import { TurnIcon } from '../../../assets/svg/turnIcon'
import { checkConfigKeyboard } from '../../../functionConfiguration/routing/baseUrl'
import { InfoMessage } from '../InfoMessage/InfoMessage'
import s from './InfoMessagesWrap.module.scss'

export const InfoMessagesWrap = () => {

    const { pathname } = useLocation()
    const [attribute, setAttribute]: any = useAttribute('Turn off a RGB Light');
     

    return (
        <div className={s.wrapBox}>
            <InfoMessage Icon={<MouseSvg />} text="Use mouse wheel to zoom in/out" style={{ maxWidth: '135px' }} />
            <InfoMessage Icon={<Conponent360Drag />} text="Click & Drag to Rotate 360°" />
            {checkConfigKeyboard(pathname) ? <InfoMessage onClick={() => setAttribute(!attribute['value'])} Icon={<TurnIcon style={{ fill: attribute && attribute['value'] ? 'white' : `#ffdd59` }} />} text="Turn off a RGB Light" /> : <div></div>}

        </div>
    )
}
