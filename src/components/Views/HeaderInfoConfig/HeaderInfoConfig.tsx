import React from 'react'
import { ViewControl } from '../ViewControl/ViewControl'
import s from './HeaderInfoConfig.module.scss'

export const HeaderInfoConfig = () => {
    return (
        <div className={s.hederConfig}>
            <div className={s.nameModel}>Wireless RGB Mechanical Gaming Keyboard</div>
            <ViewControl />

        </div>
    )
}
