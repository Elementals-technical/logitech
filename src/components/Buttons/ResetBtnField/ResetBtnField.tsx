import { useConfigurator } from '@threekit-tools/treble/dist'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useStoreSelector } from '../../..'
import { ResetItem } from '../../../assets/svg/ResetItem'
import { getTypeConfig } from '../../../functionConfiguration/routing/baseUrl'
import { getValueSetting } from '../../../store/selectors/selectors'

import s from './ResetBtnField.module.scss'

export const ResetBtnField = ({ nameSettings }: any) => {


    const [attributes, setConfiguration]: any = useConfigurator();

    const { pathname } = useLocation()
    const typeConfig = getTypeConfig(pathname);

    const defaultvalue = useStoreSelector(getValueSetting(typeConfig, nameSettings))

    /**
   * Обробник кліку на кнопці
   */
    const handleClick = (defaultObj: any) => {
        setConfiguration(defaultObj)
    };

    return (
        <button className={s.btnReset} onClick={() => handleClick(defaultvalue)}>
            <div className={s.icon}>
                <ResetItem />
            </div>
            <div className={s.name}>
                Reset changes
            </div>
        </button>
    )
}
