import React, { CSSProperties } from 'react'
import { Button } from '../Button/Button';
import s from './BtnTypeLoyaut.module.scss'

/**
 * Props для компонента BtnColor
 * @param {Function} onClick - Функція, яка буде викликана при натисканні на кнопку
 */
interface BtnTypeLoyautProps {
    onClick?: () => void;
    name: string;
    isActive: boolean

}

export const BtnTypeLoyaut: React.FC<BtnTypeLoyautProps> = ({ onClick, name, isActive }) => {
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
        <button className={s.btn} onClick={handleClick} style={style}>{name}</button>
    )
}
