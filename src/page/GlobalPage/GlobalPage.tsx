import React, { useEffect, useState } from 'react'
import { matchPath, matchRoutes, useLocation, useMatch } from 'react-router-dom'
import { checkIsPageConfig, routeConfi } from '../../functionConfiguration/routing/baseUrl'
import { Config3DMode } from '../Config3DMode/Config3DMode'
import { MainPage } from '../MainPage/MainPage'

import s from './GlobalPage.module.scss'

export const GlobalPage = () => {
    const [isVisibleMainPage, setVisibleMainPage] = useState(true)
    const { pathname } = useLocation()
 
    useEffect(() => {
        const isPage = checkIsPageConfig(pathname);
        if (isPage) setVisibleMainPage(false)
        if (!isPage) setVisibleMainPage(true)
    }, [pathname])

    return (
        <div>
            <Config3DMode />

            {isVisibleMainPage && (<div className={s.modalWrap}>

                <MainPage />
            </div>)}
        </div>
    )
}
