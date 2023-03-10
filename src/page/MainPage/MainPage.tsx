import React, { useEffect, useRef, useState } from 'react'

import s from './MainPage.module.scss'

import mouse from './../../assets/img/mouse.png'
import keyboard_1 from './../../assets/img/keyboard_1.png'
import { Button } from '../../components/Buttons/Button/Button'
import { Cart } from '../../components/Carts/Cart/Cart'
import { IntroductorySection } from './sections/IntroductorySection/IntroductorySection'
import { RadialBG } from '../../assets/svg/radialBG'
import { useLocation, useNavigate } from 'react-router-dom'
import { checkIsPageConfig } from '../../functionConfiguration/routing/baseUrl'

const useScroll = () => {
    const elRef: any = useRef(null);
    const executeScroll = () => elRef.current.scrollIntoView({ behavior: 'smooth' });

    return [executeScroll, elRef];
};

export const MainPage = () => {
    const navigate = useNavigate();
    const [executeScroll, elRef] = useScroll()

    const [isVisibleMainPage, setVisibleMainPage] = useState(true)
    const { pathname } = useLocation()

    useEffect(() => {
        const isPage = checkIsPageConfig(pathname);
        if (isPage) setVisibleMainPage(false)
        if (!isPage) setVisibleMainPage(true)
    }, [pathname])




    return isVisibleMainPage ? <div className={s.modalWrap}>

        <main className={`${s.main} ${s.container}`}>
            <div className={s.bg}>
                <RadialBG />
            </div>
            <IntroductorySection executeScroll={executeScroll} />
            <section className={s.sectionConfig} ref={elRef}>
                <div className={s.title}>Personalize with ease</div>
                <div className={s.description}>Start customizing your mouse and keyboard settings today for a completely personalized computing experience!</div>

                <div className={s.listConfig}>
                    <div className={s.wrapCart}>
                        <Cart
                            mouseImg={keyboard_1}
                            Badge={<div className={s.badge}>
                                <span>G</span>Siries
                            </div>}
                            Title={<><span>G915 TKL</span>LIGHTSPEED</>}
                            buttonClick={<Button
                                text='Customize keyboard'
                                onClick={() => { navigate("/3d/keyboard"); }}
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
                                onClick={() => { navigate("/3d/mouse"); }}
                            />}
                            classCart={s.mouse_config}
                        />
                        <div className={s.cart_bg}></div>
                    </div>

                </div>

            </section>
        </main >
    </div> : <></>
}
