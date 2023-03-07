import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStoreDispatch } from '../../..';
import { IconMinus } from '../../../assets/svg/IconMinus';
import IconPlus from '../../../assets/svg/IconPlus';
import { setOtpeningSection } from '../../../store/actions/Settings';
import { ResetBtnField } from '../../Buttons/ResetBtnField/ResetBtnField';
import s from './AcordionComponent.module.scss';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    isSelected: boolean;
    onChange: () => void;
}

export const AcordionComponent: React.FC<AccordionProps> = ({ title, children, isSelected, onChange }) => {
    const { pathname } = useLocation()
    useEffect(() => {

    }, [pathname])

    const contentRef = useRef<HTMLDivElement>(null);

    const handleAccordionClick = () => {

        onChange()
    };

    const getHeight = () => {
        if (contentRef && contentRef.current) {
             
            return `${contentRef.current.scrollHeight}px`;
        }
        return '0px';
    };
    const getMaxHeight = () => {
        if (contentRef && contentRef.current && contentRef.current.parentNode && contentRef.current.parentNode.parentElement) {

            const allHeigth = contentRef.current.parentNode.parentElement.scrollHeight;

            const childElement = contentRef.current.parentNode.childNodes;

            const heigthotherAcordion = (childElement.length) * 48 + 8 + 8 + 8 + 8 + 8- 24
           
            return `${allHeigth - heigthotherAcordion}px`;
        }
        return '0px';
    };

    const contentStyle = {
        // height: isSelected ? getHeight() : '0px',
        maxHeight: isSelected ? getMaxHeight() : '0px',
        padding: isSelected ? '12px 21px' : '0px 21px',
        overflow: 'scroll',
        // transition: 'height 0.3s ease',
    };
    let classAcordionContent = `${s.accordionContent}`
    if (isSelected) classAcordionContent += ` ${s.isOpen}`

    return (
        <div className={s.accordion}>
            <div className={s.accordionHeader} onClick={handleAccordionClick}>
                <div className={s.name}>{title}</div>
                <div className={s.icon}>{isSelected ? <IconMinus /> : <IconPlus />}</div>
            </div>
            <div className={classAcordionContent} style={contentStyle} ref={contentRef}>
                <div className={s.box}>
                    {children}
                </div>
              
            </div>
        </div>
    );
};
