import React from 'react'
import s from './GroupSetting.module.scss';

interface GroupSettingProps {
    title: string;
    children: React.ReactNode;
}
export const GroupSetting: React.FC<GroupSettingProps> = ({ title, children }) => {
    return (
        <div className={s.group}>
            <div className={s.groupHeader}>
                <div className={s.name}>{title}</div>
            </div>
            <div className={s.groupContent} >
                {children}
            </div>
        </div>
    )
}

