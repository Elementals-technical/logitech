import React from 'react'
import { MouseSvg } from '../../../../assets/svg/mouseSvg'


import mouse from './../../../../assets/img/mouse.png'
import keyboard from './../../../../assets/img/keyboard.png'
import keyboard_1 from './../../../assets/img/keyboard_1.png'

import s from './IntroductorySection.module.scss'
import { RadialBG } from '../../../../assets/svg/radialBG'
export const IntroductorySection = ({ executeScroll }: any) => {
    return (
        <section className={s.description_box}>

            <div className={s.title}>
                <span>Ultimate tool for customizing</span><br />
                your computer input devices!
            </div>
            <div className={s.subText}>Personalize your mouse and keyboard settings to your specific needs and preferences. Whether you're a gamer looking to optimize your gameplay or a professional looking for a more efficient workflow</div>

            <div className={s.description_config}>

                <div className={`${s.description_config_item} ${s.description_keyboard}`}>
                    <div className={s.name}> 
                        <span>G915 TKL</span>
                        LIGHTSPEED
                    </div>
                    <img src={keyboard} alt="" />

                </div>
                <div className={`${s.description_config_item} ${s.description_mouse}`}>
                    <img src={mouse} alt="" />
                    <div className={s.name}>
                        <span>PRO X</span>
                        SUPERLIGHT
                    </div>
                </div>
            </div>
            <div className={`${s.btn} ${s.main__scrol}`}>
                <div className={s.main__scrol_text}>Available for customization</div>
                <div className={s.main__scrol_icon} onClick={() => executeScroll()}>
                    <MouseSvg />
                </div>
            </div>


        </section>
    )
}
