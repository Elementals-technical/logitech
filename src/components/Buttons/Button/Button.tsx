import React from 'react'
import s from './Button.module.scss'

interface Props {
    text: string;
    icon?: JSX.Element;
    onClick: () => void;
    style?: React.CSSProperties;
}

export const Button = ({ text, icon, onClick, style }: Props) => {
    return (
        <button onClick={onClick} className={s.button} style={style}>
            {icon && <div className={s.icon}>
                {icon}
            </div>}
            {text}
        </button>
    );
}
