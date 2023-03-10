import React from 'react'
import { useLocation } from 'react-router-dom'
import { getInfoConfig } from '../../../functionConfiguration/dataConfiguration/dataConfig'
import { getTypeConfig } from '../../../functionConfiguration/routing/baseUrl'
import { ViewControl } from '../ViewControl/ViewControl'
import s from './HeaderInfoConfig.module.scss'

export const HeaderInfoConfig = () => {

    const { pathname } = useLocation()

    const typeConfig = getTypeConfig(pathname)


    return (
        <div className={s.hederConfig}>
            <div className={s.nameModel}>{getInfoConfig(typeConfig, 'model')}</div>
            <ViewControl />
        </div>
    )
}
