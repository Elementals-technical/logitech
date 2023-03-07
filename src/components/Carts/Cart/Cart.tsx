import React from 'react'
import { Button } from '../../Buttons/Button/Button'
import s from './Cart.module.scss'


interface Props {
    mouseImg: string;
    Badge: React.ReactNode;
    Title: React.ReactNode;
    buttonClick: React.ReactNode;
    imgClassName?: string;
    classCart?: string;
}

export const Cart: React.FC<Props> = ({ mouseImg, Badge, Title, buttonClick, imgClassName, classCart }) => {
    return (
        
            <div className={`${s.configItem} ${classCart}`}>
                <div className={`${s.boxImg} ${imgClassName}`}>
                    <img src={mouseImg} alt="" />
                </div>
                <div className={s.description}>
                    <div className={s.badge}>{Badge}</div>
                    <div className={s.title}>{Title}</div>
                    {buttonClick}
                </div>
            </div>
           
    );
};