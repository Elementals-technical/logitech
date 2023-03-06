import React from 'react'
import { useLocation } from 'react-router-dom'
import { getInfoConfig } from '../../../functionConfiguration/dataConfiguration/dataConfig'
import { getTypeConfig } from '../../../functionConfiguration/routing/baseUrl'

import s from './NameModel.module.scss'

export const NameModel = () => {

    const { pathname } = useLocation()

    const typeConfig = getTypeConfig(pathname)


    return (
        <div className={s.name} >{getInfoConfig(typeConfig, 'name')}</div>
    )
}
