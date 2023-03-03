import React, { CSSProperties } from 'react'
import s from './InfoMessage.module.scss'

interface InfoMessageProps {
    Icon?: any;
    onClick?: () => void;
    text?: string;
    style?: CSSProperties;
}

export const InfoMessage: React.FC<InfoMessageProps> = ({ Icon, onClick, text, style }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={s.InfoMessage} onClick={handleClick} style={style}>
            <div className={s.icon}> {Icon && Icon}</div>
            <div className={s.text}>{text}</div>
        </div>
    );
}