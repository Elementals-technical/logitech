import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { checkConfigMouse, checkMode3DConfigUrl, checkModeDeskConfigUrl, getTypeConfig } from '../../../functionConfiguration/routing/baseUrl'
import { BtnMode } from '../../Buttons/BtnMode/BtnMode'
import s from './ViewControl.module.scss'

export const ViewControl = () => {

    const navigate = useNavigate()

    const { pathname } = useLocation()
    const typeConfig = getTypeConfig(pathname)

    let urldeskTypeConfig: any = ''
    let url3dTypeConfig: any = '3d/keyboard'

    // if (typeConfig) urldeskTypeConfig = `/${typeConfig}`
    // if (checkConfigMouse(pathname)) url3dTypeConfig = '3d/mouse'



    let classControl = `${s.viewControl}`
    // if (checkModeDeskConfigUrl(pathname)) classControl += ` ${s.controlDesk}`


    return (
        <div className={classControl}>
            <div className={s.name}>View Mode</div>
            <div className={s.btnWrap}>
                <BtnMode name='3D'  isActive={checkMode3DConfigUrl(pathname)} onClick={() => navigate(url3dTypeConfig)} />
                <BtnMode name='Desk' isActive={checkModeDeskConfigUrl(pathname)}  onClick={() => navigate(`/desk${urldeskTypeConfig}`)} />
            </div>
        </div>
    )
}
