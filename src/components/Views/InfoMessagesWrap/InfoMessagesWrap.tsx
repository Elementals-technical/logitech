import React from 'react'
import { Conponent360Drag } from '../../../assets/svg/360Drag'
import { MouseIconSvg } from '../../../assets/svg/MouseIconSvg'
import { InfoMessage } from '../InfoMessage/InfoMessage'
import s from './InfoMessagesWrap.module.scss'
import { TurnOnOff } from '../TurnOnOff/TurnOnOff'

export const InfoMessagesWrap = () => {



    return (
        <div className={s.wrapBox}>
            <InfoMessage Icon={<MouseIconSvg />} text="Use mouse wheel to zoom in/out" style={{ maxWidth: '135px' }} />
            <InfoMessage Icon={<Conponent360Drag />} text="Click & Drag to Rotate 360°" />
            <TurnOnOff />

        </div>
    )
}
