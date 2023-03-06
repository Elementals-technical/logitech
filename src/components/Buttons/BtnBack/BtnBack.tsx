import React from 'react'
import { BackIcon } from '../../../assets/svg/BackIcon'
import s from './BtnBack.module.scss'


/**
 * Props для компонента BtnBack
 * @param {Function} onClick - Функція, яка буде викликана при натисканні на кнопку
 */
interface BtnBackProps {
    onHandle?: () => void;
}

export const BtnBack: React.FC<BtnBackProps> = ({ onHandle: onHandle }) => {
    /**
     * Обробник кліку на кнопці
     */
    const handleClick = (onHandle: any) => {
        console.log('onHandle', onHandle);

        if (onHandle) {
            onHandle();
        }
    };

    return (
        <button className={s.btn_back} onClick={() => handleClick(onHandle)}>
            <div className={s.icon}>
                <BackIcon />
            </div>
            <div className={s.text}>Back to Models</div>
        </button>
    );
}