import React from 'react'
import { useLocation, useNavigate, useParams, } from 'react-router-dom';
import { LogoLogitech } from '../../assets/svg/logoLogitech';
import { RadialBG } from '../../assets/svg/radialBG';
import { BtnBack } from '../../components/Buttons/BtnBack/BtnBack';
import { LoaderPlayerChangeAttribute } from '../../components/loaders/LoaderPlayerChangeAttribute/LoaderPlayerChangeAttribute';
import { PlayerComponent } from '../../components/PlayerComponent/PlayerComponent';
import { ControlPanel } from '../../components/Views/ControlPanel/ControlPanel';
import { HeaderInfoConfig } from '../../components/Views/HeaderInfoConfig/HeaderInfoConfig';
import { InfoMessagesWrap } from '../../components/Views/InfoMessagesWrap/InfoMessagesWrap';
import { NameModel } from '../../components/Views/NameModel/NameModel';
import { LoadingConfig } from '../LoadingConfig/LoadingConfig';
import s from './Config3DMode.module.scss';
import light from './../../assets/img/light.png'
import { AwaitThreekitLoad, Player } from '@threekit-tools/treble/dist';
import { SetDefafaultValue } from '../../components/SetDefafaultValue/SetDefafaultValue';

export const Config3DMode = () => {
    const navigate = useNavigate();




    return (

        <>
            <div className={s.page}>

                <div className={`${s.containerPage} ${s.model}`}>

                    <div className={s.logoLigetch}><LogoLogitech /></div>
                    <div className={s.infoPage}>
                        <BtnBack onHandle={() => navigate('/')} />
                        <NameModel />
                    </div>
                    <div className={s.page_config}>
                        <div className={s.player}>

                            <Player minHeight="250px">
                                <LoaderPlayerChangeAttribute />
                            </Player>
                        </div>
                        <div className={s.boxConfig}>
                            <div className={s.wrapHeader}>
                                <HeaderInfoConfig />
                            </div>

                            {/* <div className={s.Player}>
                                <PlayerComponent />
                            </div> */}
                            <div className={s.wrapInfo}>
                                <InfoMessagesWrap />
                            </div>
                        </div>
                        <div className={s.boxConfig_BG}> 
                            <PlayerComponent /> 
                        </div>

                        <div className={s.boxControlConfig}>
                            <ControlPanel />
                        </div>

                        <SetDefafaultValue />


                    </div>

                </div>
            </div>
            <LoadingConfig />
        </>
    )
}
