import React from 'react'
import { KeyBoardClose } from '../../../assets/svg/KeyBoardClose'

import s from './BtnClosePopUp.module.scss'

export const BtnClosePopUp = ({ onClick }: any) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={s.closeBtn} onClick={handleClick}>
            <div className={s.name}>Close pop up</div>
            <div className={s.icon}>
                <KeyBoardClose />
            </div>
        </div>
    )
}
