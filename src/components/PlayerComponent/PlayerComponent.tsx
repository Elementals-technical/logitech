import React from 'react'
import { Player } from '@threekit-tools/treble'

import s from './PlayerComponent.module.scss'
import { SninerLoader } from '../loaders/SninerLoader/SninerLoader'

export const PlayerComponent = () => {
    return (
        <div className={s.player_container}> 
            <Player minHeight="250px">  </Player>
        </div>
    )
}
