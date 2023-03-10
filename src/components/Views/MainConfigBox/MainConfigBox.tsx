import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStoreSelector } from '../../..'
import { Conponent360Drag } from '../../../assets/svg/360Drag'
import { LogoLogitech } from '../../../assets/svg/logoLogitech'
import { MouseIconSvg } from '../../../assets/svg/MouseIconSvg'
import { checkConfigKeyboard, checkConfigMouse, checkIsConfigObject } from '../../../functionConfiguration/routing/baseUrl'
import { getTypeModeConfig3D, getTypeModeConfigDesk } from '../../../functionConfiguration/view/modeConfig'
import { getModeConfig } from '../../../store/selectors/selectors'
import { PlayerComponent } from '../../PlayerComponent/PlayerComponent'
import { ControlPanel } from '../ControlPanel/ControlPanel'
import { HeaderInfoConfig } from '../HeaderInfoConfig/HeaderInfoConfig'
import { InfoMessage } from '../InfoMessage/InfoMessage'
import { InfoMessagesWrap } from '../InfoMessagesWrap/InfoMessagesWrap'
import { TurnOnOff } from '../TurnOnOff/TurnOnOff'
import { ViewControl } from '../ViewControl/ViewControl'

import s from './MainConfigBox.module.scss'

export const MainConfigBox = () => {

    const { pathname } = useLocation()
    const modeConfig = useStoreSelector(getModeConfig)

    let classPlayer = `${s.player}`
    if (getTypeModeConfigDesk(modeConfig)) classPlayer += ` ${s.player_desk}`

    let classPanelColor = `${s.controlPanelDesk}`

    if (checkConfigMouse(pathname)) classPanelColor += ` ${s.controlPositionPanelDeskMouse}`
    if (checkConfigKeyboard(pathname)) classPanelColor += ` ${s.controlPositionPanelDeskKeyboard}`


    return (
        <>
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




            {getTypeModeConfigDesk(modeConfig) && checkIsConfigObject(pathname) &&
                <div className={classPanelColor}>
                    <ControlPanel />
                </div>
            }
            {getTypeModeConfigDesk(modeConfig) &&
                <div className={s.wrapInfoDeskHeader}>
                    <div className={s.logoLigetch}><LogoLogitech /></div>
                    <div className={s.title}>Say goodbye to clunky default settings and hello to a personalized setup</div>

                    {!checkIsConfigObject(pathname) && <div className={s.description}>Let's get started by selecting either the mouse or keyboard option to begin customizing your setup</div>}

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


        </>
    )
}
