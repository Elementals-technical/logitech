import React, { useEffect, useState } from 'react'
import { matchPath, matchRoutes, useLocation, useMatch } from 'react-router-dom'
import { checkIsPageConfig, routeConfi } from '../../functionConfiguration/routing/baseUrl'
import { Config3DMode } from '../Config3DMode/Config3DMode'
import { MainPage } from '../MainPage/MainPage'

import s from './GlobalPage.module.scss'

export const GlobalPage = () => {

    return (
        <div>
            <Config3DMode />


            <MainPage />

        </div>
    )
}
