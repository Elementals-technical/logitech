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
import { useStoreSelector } from '../..';
import { getTypeModeConfig3D, getTypeModeConfigDesk } from '../../functionConfiguration/view/modeConfig';
import { getModeConfig } from '../../store/selectors/selectors';

export const Config3DMode = () => {
    const navigate = useNavigate();

    const modeConfig = useStoreSelector(getModeConfig)

    let classPlayer = `${s.player}`
    if (getTypeModeConfigDesk(modeConfig)) classPlayer += ` ${s.player_desk}`

        return (

            <>
                <div className={s.page}>

                    <div className={`${s.containerPage} ${s.model}`}>

                        <div className={s.logoLigetch}><LogoLogitech /></div>
                        {getTypeModeConfig3D(modeConfig) && <div className={s.infoPage}>
                            <BtnBack onHandle={() => navigate('/')} />
                            <NameModel />
                        </div>}
                        <div className={s.page_config}>
                            <div className={s.player}>
                                <Player minHeight="250px"> </Player>
                            </div>

                            {getTypeModeConfig3D(modeConfig) && <div className={s.boxConfig}>
                                <div className={s.wrapHeader}>
                                    <HeaderInfoConfig />
                                </div>
                                <div className={s.wrapInfo}>
                                    <InfoMessagesWrap />
                                </div>
                            </div>}

                            {getTypeModeConfig3D(modeConfig) && <div className={s.boxConfig_BG}>
                                <PlayerComponent />
                            </div>}

                            {getTypeModeConfig3D(modeConfig) && <div className={s.boxControlConfig}>
                                <ControlPanel />
                            </div>}


                            <SetDefafaultValue />


                        </div>

                    </div>
                </div>
                <LoadingConfig />
            </>
        )
}
