import React from 'react'
import s from './BtnTypeLoyaut.module.scss'

/**
 * Props для компонента BtnColor
 * @param {Function} onClick - Функція, яка буде викликана при натисканні на кнопку
 */
interface BtnTypeLoyautProps {
    onClick?: () => void;
    name: string;

}

export const BtnTypeLoyaut: React.FC<BtnTypeLoyautProps> = ({ onClick, name }) => {
    /**
  * Обробник кліку на кнопці
  */
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (
        <div className={s.btn} onClick={handleClick}>{name}</div>
    )
}
