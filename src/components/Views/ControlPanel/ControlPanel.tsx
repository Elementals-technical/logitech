import React from 'react'
import { ResetItem } from '../../../assets/svg/ResetItem'
import { ShopBtn } from '../../../assets/svg/ShopBtn'
import { Button } from '../../Buttons/Button/Button'
import { ControlFieldsKeyBoard } from '../ControlFieldsKeyBoard/ControlFieldsKeyBoard'

import s from './ControlPanel.module.scss'

export const ControlPanel = () => {

    return (
        <div className={s.controlPanel}>
            <div className={s.hederControlPanel}>
                <div className={s.name}>From Boring to Brilliant</div>
                <div className={s.subText}>Transform Your Keyboard with ease</div>
            </div>
            <div className={s.mainPanel}>
                <div className={s.wrapField}>
                    <ControlFieldsKeyBoard />
                </div>
                <div className={s.footerControl}>
                    <button className={s.btnAllReset}>
                        <div className={s.icon}>
                            <ResetItem />
                        </div>
                        <div className={s.name}> Reset All</div>
                    </button>
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
