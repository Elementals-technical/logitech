import React from 'react'
import s from './BtnMode.module.scss'


/**
 * Props для компонента BtnMode
 * @param {Function} onClick - Функція, яка буде викликана при натисканні на кнопку
 */
interface BtnModeProps {
    name: string;
    onClick?: () => void;
}

export const BtnMode: React.FC<BtnModeProps> = ({ onClick, name }) => {
    /**
     * Обробник кліку на кнопці
     */
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className={s.btn_mode} onClick={handleClick}>
            {name}
        </button>
    );
}