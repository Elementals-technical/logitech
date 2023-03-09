import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStoreSelector } from '../../..'
import { KeyBoardClose } from '../../../assets/svg/KeyBoardClose'
import { ResetItem } from '../../../assets/svg/ResetItem'
import { ShopBtn } from '../../../assets/svg/ShopBtn'
import { checkConfigKeyboard, checkConfigMouse, getTypeConfig } from '../../../functionConfiguration/routing/baseUrl'
import { getTypeModeConfigDesk } from '../../../functionConfiguration/view/modeConfig'
import { getModeConfig } from '../../../store/selectors/selectors'
import { BtnClosePopUp } from '../../Buttons/BtnClosePopUp/BtnClosePopUp'
import { Button } from '../../Buttons/Button/Button'
import { ResetAll } from '../../Buttons/ResetAll/ResetAll'
import { ControlFieldsKeyBoard } from '../ControlFieldsKeyBoard/ControlFieldsKeyBoard'
import { ControlFieldsMouse } from '../ControlFieldsMouse/ControlFieldsMouse'

import s from './ControlPanel.module.scss'

export const ControlPanel = () => {
    const { pathname } = useLocation()

    let controlPanel = `${s.controlPanel}`
    const modeConfig = useStoreSelector(getModeConfig)

    if (getTypeModeConfigDesk(modeConfig)) controlPanel += ` ${s.controlPanelDesk}`


    const navigate = useNavigate()


    return (
        <div className={controlPanel}>
            <div className={s.hederControlPanel}>
                <div className={s.text}>
                    <div className={s.name}>From Boring to Brilliant</div>
                    <div className={s.subText}>Transform Your Keyboard with ease</div>
                </div>
                <div className={s.butonResset}>
                    <ResetAll />
                </div>
            </div>
            <div className={s.mainPanel}>
                <div className={s.wrapField}>
                    <div className={s.boxOverflow}>

                        {checkConfigKeyboard(pathname) && <ControlFieldsKeyBoard key={'ControlFieldsKeyBoard1'} />}
                        {checkConfigMouse(pathname) && <ControlFieldsMouse key={'ControlFieldsMouse2'} />}
                    </div>

                </div>
                {getTypeModeConfigDesk(modeConfig) && (<div className={s.footerControl}>
                    <BtnClosePopUp onClick={() => navigate('/desk')} />
                </div>)}

            </div>

        </div>
    )
}
