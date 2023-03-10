import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStoreDispatch } from '../../..'
import { OptionSVG } from '../../../assets/svg/OptionSVG'
import { checkConfigKeyboard, checkConfigMouse, checkMode3DConfigUrl, checkModeDeskConfigUrl, getTypeConfig } from '../../../functionConfiguration/routing/baseUrl'
import { setLoadingPlayer } from '../../../store/actions/Settings'
import { BtnMode } from '../../Buttons/BtnMode/BtnMode'
import s from './ViewControl.module.scss'

export const ViewControl = () => {

    const [button, setButtonConfig] = useState(false)
    const [modeConfig, setModeConfig] = useState('3D')
    const [typeConfigComponent, setTypeConfigComponent] = useState('Keyboard')


    const navigate = useNavigate()
    const dispatch = useStoreDispatch()
    const { pathname } = useLocation()
    const typeConfig = getTypeConfig(pathname)

    let urldeskTypeConfig: any = ''
    let url3dTypeConfig: any = '3d/keyboard'

    // if (typeConfig) urldeskTypeConfig = `/${typeConfig}`
    // if (checkConfigMouse(pathname)) url3dTypeConfig = '3d/mouse'



    let classControl = `${s.viewControl}`
    // if (checkModeDeskConfigUrl(pathname)) classControl += ` ${s.controlDesk}`

    let modalWrap = `${s.modalWrap}`
    if (checkModeDeskConfigUrl(pathname)) modalWrap += ` ${s.modalWrapDesk}`

    return (
        <div className={classControl}>
            <div className={s.name} onClick={() => setButtonConfig(!button)}>
                <div className={s.icon}><OptionSVG /></div>
                <div className={s.text}>View Mode</div>
            </div>
            {button && <>
                <div className={modalWrap}>

                    {!checkModeDeskConfigUrl(pathname) && <div className={s.wrapBottom}>
                        <div className={s.title}>Overall view mode</div>
                        <div className={s.content}>


                            <BtnMode name='Desk' isActive={checkModeDeskConfigUrl(pathname)} onClick={() => {
                                dispatch(setLoadingPlayer(false))
                                navigate(`/desk`)
                                setButtonConfig(false)
                            }} />



                        </div>
                    </div>
                    }
                    <div className={s.wrapBottom}>
                        <div className={s.title}>Separate view mode</div>
                        <div className={s.content}>

                            {checkMode3DConfigUrl(pathname) && <>
                                {!checkConfigKeyboard(pathname) && <>
                                    <BtnMode name='Keyboard' onClick={() => {
                                        dispatch(setLoadingPlayer(false))
                                        navigate('/3d/keyboard')
                                        setButtonConfig(false)
                                    }} />
                                </>}
                                {!checkConfigMouse(pathname) && <>
                                    <BtnMode name='Mouse' onClick={() => {
                                        dispatch(setLoadingPlayer(false))
                                        navigate('/3d/mouse')
                                        setButtonConfig(false)
                                    }} />
                                </>}
                            </>}


                            {checkModeDeskConfigUrl(pathname) && <>
                                {modeConfig === '3D' && <>
                                    <BtnMode name='Keyboard 3D' onClick={() => {
                                        dispatch(setLoadingPlayer(false))
                                        navigate('/3d/keyboard')

                                    }} />
                                    <BtnMode name='Mouse 3D' onClick={() => {
                                        dispatch(setLoadingPlayer(false))
                                        navigate(`/3d/mouse`)
                                        setButtonConfig(false)
                                    }} />
                                </>}





                            </>}
                        </div>
                    </div>



                </div>
            </>}


        </div>
    )
}
