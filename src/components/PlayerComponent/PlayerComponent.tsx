import React from 'react'
import { Player, Share } from '@threekit-tools/treble'
import light from './../../assets/img/light.png'
import s from './PlayerComponent.module.scss'
import { RadialBG } from '../../assets/svg/radialBG'
import { LoaderPlayerChangeAttribute } from '../loaders/LoaderPlayerChangeAttribute/LoaderPlayerChangeAttribute'

export const PlayerComponent = () => {
    return (
        <div className={s.player_container}>
            <div className={s.wrapImgBD}>
                <img src={light} className={s.imgBG} />
            </div>
            <div className={s.wrapSvgRadial}>
                <RadialBG />
            </div>
            <div className={s.player}>

                <Player minHeight="250px">
                    <LoaderPlayerChangeAttribute />
                </Player>
            </div>

        </div>
    )
}
