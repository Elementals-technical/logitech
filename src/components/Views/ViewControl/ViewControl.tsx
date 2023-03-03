import React from 'react'
import { BtnMode } from '../../Buttons/BtnMode/BtnMode'
import s from './ViewControl.module.scss'

export const ViewControl = () => {
    return (
        <div className={s.viewControl}>
            <div className={s.name}>View Mode</div>
            <div className={s.btnWrap}>
                <BtnMode name='3D' />
                <BtnMode name='Desk' />
            </div>
        </div>
    )
}
