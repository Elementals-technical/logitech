import React from 'react'
import { Conponent360Drag } from '../../assets/svg/360Drag';
import { BackIcon } from '../../assets/svg/BackIcon';
import { LogoLogitech } from '../../assets/svg/logoLogitech';
import { MouseSvg } from '../../assets/svg/mouseSvg';
import { TurnIcon } from '../../assets/svg/turnIcon';
import { BtnBack } from '../../components/Buttons/BtnBack/BtnBack';
import { BtnMode } from '../../components/Buttons/BtnMode/BtnMode';
import { PlayerComponent } from '../../components/PlayerComponent/PlayerComponent';
import { ControlPanel } from '../../components/Views/ControlPanel/ControlPanel';
import { HeaderInfoConfig } from '../../components/Views/HeaderInfoConfig/HeaderInfoConfig';
import { InfoMessage } from '../../components/Views/InfoMessage/InfoMessage';
import { InfoMessagesWrap } from '../../components/Views/InfoMessagesWrap/InfoMessagesWrap';
import { ViewControl } from '../../components/Views/ViewControl/ViewControl';
import s from './Config3DMode.module.scss';

export const Config3DMode = () => {
    return (
        <div className={s.page}>
            <div className={`${s.containerPage} ${s.model}`}>
                <div className={s.logoLigetch}><LogoLogitech /></div>
                <div className={s.infoPage}>
                    <BtnBack />
                    <div className="name">G915 LIGHTSPEED</div>
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
