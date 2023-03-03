import React, { CSSProperties } from 'react'
import s from './BtnColor.module.scss'


/**
 * Props для компонента BtnColor
 * @param {Function} onClick - Функція, яка буде викликана при натисканні на кнопку
 */
interface BtnColorProps {
    onClick?: () => void;
    color?: string;
    isActive: boolean;

}


export const BtnColor: React.FC<BtnColorProps> = ({ onClick, color, isActive }) => {
    /**
     * Обробник кліку на кнопці
     */
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    let style: CSSProperties = {
        backgroundColor: color,
    };
    if (isActive) style = {
        ...style,
        borderColor: '#fff'
    }

    return (
        <div className={s.btnColor} style={style} onClick={handleClick}></div>
    );
}