import React, { CSSProperties } from 'react'
import s from './BtnMode.module.scss'


/**
 * Props для компонента BtnMode
 * @param {Function} onClick - Функція, яка буде викликана при натисканні на кнопку
 */
interface BtnModeProps {
    name: string;
    onClick?: () => void;
    isActive?: boolean
}

export const BtnMode: React.FC<BtnModeProps> = ({ onClick, name, isActive }) => {
    /**
     * Обробник кліку на кнопці
     */
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    let style: CSSProperties = {}
     
    if (isActive) style = {
        borderColor: '#fff',
        color: '#fff'

    }

    return (
        <button className={s.btn_mode} style={style} onClick={handleClick}>
            {name}
        </button>
    );
}