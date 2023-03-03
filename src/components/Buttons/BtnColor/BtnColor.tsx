import React, { CSSProperties } from 'react'
import s from './BtnColor.module.scss'


/**
 * Props для компонента BtnColor
 * @param {Function} onClick - Функція, яка буде викликана при натисканні на кнопку
 */
interface BtnColorProps {
    onClick?: () => void;
    color?: string;

}


export const BtnColor: React.FC<BtnColorProps> = ({ onClick, color }) => {
    /**
     * Обробник кліку на кнопці
     */
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const style: CSSProperties = {
        backgroundColor: color,
    };


    return (
        <div className={s.btnColor} style={style} onClick={handleClick}></div>
    );
}