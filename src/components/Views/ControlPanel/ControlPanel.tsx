import React from 'react'
import { useLocation } from 'react-router-dom'
import { ResetItem } from '../../../assets/svg/ResetItem'
import { ShopBtn } from '../../../assets/svg/ShopBtn'
import { checkConfigKeyboard, getTypeConfig } from '../../../functionConfiguration/routing/baseUrl'
import { Button } from '../../Buttons/Button/Button'
import { ResetAll } from '../../Buttons/ResetAll/ResetAll'
import { ControlFieldsKeyBoard } from '../ControlFieldsKeyBoard/ControlFieldsKeyBoard'
import { ControlFieldsMouse } from '../ControlFieldsMouse/ControlFieldsMouse'

import s from './ControlPanel.module.scss'

export const ControlPanel = () => {
    const { pathname } = useLocation()
    const typeConfig = getTypeConfig(pathname)



    return (
        <div className={s.controlPanel}>
            <div className={s.hederControlPanel}>
                <div className={s.name}>From Boring to Brilliant</div>
                <div className={s.subText}>Transform Your Keyboard with ease</div>
            </div>
            <div className={s.mainPanel}>
                <div className={s.wrapField}>
                    {checkConfigKeyboard(pathname) && <ControlFieldsKeyBoard />}
                    {typeConfig === 'mouse' && <ControlFieldsMouse />}

                </div>
                <div className={s.footerControl}>
                    <ResetAll />
                    <div className={s.cartWrap}>
                        <div className={s.price}>$349.99</div>
                        <Button icon={<ShopBtn />} text="Add to Cart" onClick={() => { }} style={{
                            padding: '12px 10px'
                        }} />

                    </div>
                </div>
            </div>

        </div>
    )
}
