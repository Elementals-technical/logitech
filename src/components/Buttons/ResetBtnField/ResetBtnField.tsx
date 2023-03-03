import React from 'react'
import { ResetItem } from '../../../assets/svg/ResetItem'

import s from './ResetBtnField.module.scss'

export const ResetBtnField = () => {
    return (
        <button className={s.btnReset}>
            <div className={s.icon}>
                <ResetItem />
            </div>
            <div className={s.name}>
                Reset changes
            </div>
        </button>
    )
}
