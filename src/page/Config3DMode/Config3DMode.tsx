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
import { ViewControl } from '../../components/Views/ViewControl/ViewControl';
import { checkConfigKeyboard, checkConfigMouse, checkIsConfigObject } from '../../functionConfiguration/routing/baseUrl';
import { InfoMessage } from '../../components/Views/InfoMessage/InfoMessage';
import { MouseIconSvg } from '../../assets/svg/MouseIconSvg';
import { Conponent360Drag } from '../../assets/svg/360Drag';
import { TurnOnOff } from '../../components/Views/TurnOnOff/TurnOnOff';

export const Config3DMode = () => {
    const { pathname } = useLocation()


    const navigate = useNavigate();

    const modeConfig = useStoreSelector(getModeConfig)

    let classPlayer = `${s.player}`
    if (getTypeModeConfigDesk(modeConfig)) classPlayer += ` ${s.player_desk}`

    let classPanelColor = `${s.controlPanelDesk}`

    if (checkConfigMouse(pathname)) classPanelColor += ` ${s.controlPositionPanelDeskMouse}`
    if (checkConfigKeyboard(pathname)) classPanelColor += ` ${s.controlPositionPanelDeskKeyboard}`


    return (

        <>
            <div className={s.page}>
                {getTypeModeConfigDesk(modeConfig) &&
                    <>
                        <div className={s.bg}>
                            <RadialBG />
                        </div>
                        <div className={s.lightBG}>
                            <img src={light} className={s.imgBG} />
                        </div>
                    </>

                }


                <div className={`${s.containerPage} ${s.model}`}>
                    {getTypeModeConfig3D(modeConfig) && <div className={s.logoLigetch}><LogoLogitech /></div>}

                    {getTypeModeConfig3D(modeConfig) && <div className={s.infoPage}>
                        <BtnBack onHandle={() => navigate('/')} />
                        <NameModel />
                    </div>}
                    <div className={s.page_config}>
                        <div className={classPlayer}>
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

                        {getTypeModeConfigDesk(modeConfig) && checkIsConfigObject(pathname) &&
                            <div className={classPanelColor}>
                                <ControlPanel />
                            </div>
                        }
                        {getTypeModeConfigDesk(modeConfig) &&
                            <div className={s.wrapInfoDeskHeader}>
                                <div className={s.logoLigetch}><LogoLogitech /></div>
                                <div className={s.title}>Say goodbye to clunky default settings and hello to a personalized setup</div>
                                <div className={s.description}>Let's get started by selecting either the mouse or keyboard option to begin customizing your setup</div>
                            </div>

                        }
                        {getTypeModeConfigDesk(modeConfig) &&
                            <div className={s.wrapInfoDesk}>
                                <div className={s.boxTurn}>
                                    <TurnOnOff />
                                </div>
                                <InfoMessage Icon={<MouseIconSvg />} text="Use mouse wheel to zoom in/out" style={{ maxWidth: '135px' }} />
                                <InfoMessage Icon={<Conponent360Drag />} text="Click & Drag to Rotate 360°" />
                                <ViewControl />
                            </div>

                        }


                    </div>

                </div>
            </div>
            <LoadingConfig />
        </>
    )
}
