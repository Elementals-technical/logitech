import React from 'react'
import { LogoLogitech } from '../../assets/svg/logoLogitech';
import { BtnBack } from '../../components/Buttons/BtnBack/BtnBack';
import { PlayerComponent } from '../../components/PlayerComponent/PlayerComponent';
import { ControlPanel } from '../../components/Views/ControlPanel/ControlPanel';
import { HeaderInfoConfig } from '../../components/Views/HeaderInfoConfig/HeaderInfoConfig';
import { InfoMessagesWrap } from '../../components/Views/InfoMessagesWrap/InfoMessagesWrap';
import s from './Config3DMode.module.scss';

export const Config3DMode = () => {
    return (
        <div className={s.page}>
            <div className={`${s.containerPage} ${s.model}`}>
                <div className={s.logoLigetch}><LogoLogitech /></div>
                <div className={s.infoPage}>
                    <BtnBack />
                    <div className={s.name}>G915 LIGHTSPEED</div>
                </div>
                <div className={s.page_config}>
                    <div className={s.boxConfig}>
                        <div className={s.wrapHeader}>
                            <HeaderInfoConfig />
                        </div>

                        <div className={s.Player}>
                            <PlayerComponent />
                        </div>
                        <div className={s.wrapInfo}>
                            <InfoMessagesWrap />
                        </div>
                    </div>

                    <div className={s.boxControlConfig}>
                        <ControlPanel />
                    </div>

                </div>



            </div>



        </div>
    )
}
