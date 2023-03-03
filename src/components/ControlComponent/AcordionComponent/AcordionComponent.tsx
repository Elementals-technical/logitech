import React, { useState, useRef } from 'react';
import { IconMinus } from '../../../assets/svg/IconMinus';
import IconPlus from '../../../assets/svg/IconPlus';
import s from './AcordionComponent.module.scss';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

export const AcordionComponent: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleAccordionClick = () => {
        setIsOpen(!isOpen);
    };

    const getHeight = () => {
        if (contentRef && contentRef.current) {
            return `${contentRef.current.scrollHeight}px`;
        }
        return '0px';
    };

    const contentStyle = {
        height: isOpen ? getHeight() : '0px',
        overflow: 'hidden',
        transition: 'height 0.3s ease',
    };

    return (
        <div className={s.accordion}>
            <div className={s.accordionHeader} onClick={handleAccordionClick}>
                <div className={s.name}>{title}</div>
                <div className={s.icon}>{isOpen ? <IconMinus /> : <IconPlus />}</div>
            </div>
            <div className={s.accordionContent} style={contentStyle} ref={contentRef}>
                {children}
            </div>
        </div>
    );
};
