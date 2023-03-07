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

    let classMessage = `${s.InfoMessage}`
    if (!!onClick) classMessage += ` ${s.btn}`
    return (
        <div className={classMessage} style={style}>
            <div className={s.icon} onClick={handleClick}> {Icon && Icon}</div>
            <div className={s.text} onClick={handleClick}>{text}</div>
        </div>
    );
}