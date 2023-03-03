import React from 'react'
import { BackIcon } from '../../../assets/svg/BackIcon'
import s from './BtnBack.module.scss'


/**
 * Props для компонента BtnBack
 * @param {Function} onClick - Функція, яка буде викликана при натисканні на кнопку
 */
interface BtnBackProps {
    onClick?: () => void;
}

export const BtnBack: React.FC<BtnBackProps> = ({ onClick }) => {
    /**
     * Обробник кліку на кнопці
     */
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className={s.btn_back} onClick={handleClick}>
            <div className={s.icon}>
                <BackIcon />
            </div>
            <div className={s.text}>Back to Models</div>
        </button>
    );
}