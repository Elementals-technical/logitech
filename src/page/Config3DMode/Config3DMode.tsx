import React from 'react'

import { LoadingConfig } from '../LoadingConfig/LoadingConfig';
import s from './Config3DMode.module.scss';
import { SetDefafaultValue } from '../../components/SetDefafaultValue/SetDefafaultValue';
import { useStoreSelector } from '../..';
import { getTypeModeConfigDesk } from '../../functionConfiguration/view/modeConfig';
import { getModeConfig } from '../../store/selectors/selectors';

import { MainBG } from '../../components/Views/MainBG/MainBG';
import { HeaderPage } from '../../components/Views/HeaderPage/HeaderPage';
import { MainConfigBox } from '../../components/Views/MainConfigBox/MainConfigBox';
import { useLocation } from 'react-router-dom';
import { isEqual } from 'lodash'
import { PlayerThreekit } from '../../components/PlayerThreekit/PlayerThreekit';

const MemoizedPlayerThreeKit = React.memo(PlayerThreekit, (prevProps: any, nextProps: any) => {
    const isEqualCustom = isEqual(prevProps, nextProps)
    return isEqualCustom
});


export const Config3DMode = () => {
    const modeConfig = useStoreSelector(getModeConfig)

    let classPlayer = `${s.player}`
    if (getTypeModeConfigDesk(modeConfig)) classPlayer += ` ${s.player_desk}`
    console.log('weqweqw');

    return (

        <>
            <div className={s.page}>
                <MainBG />


                <div className={`${s.containerPage} ${s.model}`}>
                    <HeaderPage />
                    <div className={s.page_config}>
                        <div className={classPlayer}>
                            <MemoizedPlayerThreeKit />
                        </div>
                        <SetDefafaultValue />

                        <MainConfigBox />


                    </div>

                </div>
            </div>
            <LoadingConfig />
        </>
    )
}
