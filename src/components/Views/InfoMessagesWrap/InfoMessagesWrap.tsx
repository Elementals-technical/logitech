import React from 'react'
import { Conponent360Drag } from '../../../assets/svg/360Drag'
import { MouseSvg } from '../../../assets/svg/mouseSvg'
import { TurnIcon } from '../../../assets/svg/turnIcon'
import { InfoMessage } from '../InfoMessage/InfoMessage'
import s from './InfoMessagesWrap.module.scss'

export const InfoMessagesWrap = () => {
    return (
        <div className={s.wrapBox}>
            <InfoMessage Icon={<MouseSvg />} text="Use mouse wheel to zoom in/out" style={{ maxWidth: '135px' }} />
            <InfoMessage Icon={<Conponent360Drag />} text="Click & Drag to Rotate 360°" />
            <InfoMessage Icon={<TurnIcon />} text="Turn off a RGB Light" />
        </div>
    )
}
