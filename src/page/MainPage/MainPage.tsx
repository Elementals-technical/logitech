import React, { useEffect } from 'react'

import s from './MainPage.module.scss'

import mouse from './../../assets/img/mouse.png'
import keyboard_1 from './../../assets/img/keyboard_1.png'
import { Button } from '../../components/Buttons/Button/Button'
import { Cart } from '../../components/Carts/Cart/Cart'
import { IntroductorySection } from './sections/IntroductorySection/IntroductorySection'
import { RadialBG } from '../../assets/svg/radialBG'
import { useNavigate } from 'react-router-dom'


export const MainPage = () => {
    const navigate = useNavigate();



    return (
        <main className={`${s.main} ${s.container}`}>
            <div className={s.bg}>
                <RadialBG />
            </div>
            <IntroductorySection />
            <section className={s.sectionConfig}>
                <div className={s.title}>Personalize with ease</div>
                <div className={s.description}>Start customizing your mouse and keyboard settings today for a completely personalized computing experience!</div>

                <div className={s.listConfig}>
                    <div className={s.wrapCart}>
                        <Cart
                            mouseImg={keyboard_1}
                            Badge={<div className={s.badge}>
                                <span>G</span>Siries
                            </div>}
                            Title={<><span>G915</span>LIGHTSPEED</>}
                            buttonClick={<Button
                                text='Customize keyboard'
                                onClick={() => { navigate("/keyboard"); }}
                            />}
                            classCart={s.keyboard_config}
                        />
                        <div className={s.cart_bg}></div>
                    </div>


                    <div className={`${s.wrapCart} ${s.mouse}`}>
                        <Cart
                            mouseImg={mouse}
                            Badge={<div className={s.badge}>
                                <span>pro</span>Siries
                            </div>}
                            Title={<><span>PRO X</span>SUPERLIGHT</>}
                            buttonClick={<Button
                                text='Customize mouse'
                                onClick={() => { navigate("/mouse"); }}
                            />}
                            classCart={s.mouse_config}
                        />
                        <div className={s.cart_bg}></div>
                    </div>

                </div>

            </section>
        </main >
    )
}
