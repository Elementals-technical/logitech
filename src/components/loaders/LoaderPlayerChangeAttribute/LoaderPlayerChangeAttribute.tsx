import { usePlayerLoadingStatus, useThreekitInitStatus } from '@threekit-tools/treble/dist';
import React from 'react'
import { SninerLoader } from '../SninerLoader/SninerLoader'

import s from './LoaderPlayerChangeAttribute.module.scss'

export const LoaderPlayerChangeAttribute = () => {

    const hasLoaded = usePlayerLoadingStatus();
    console.log('hasLoaded', hasLoaded);
    const hasLoadedStatus = useThreekitInitStatus();

    // if (!hasLoaded) return (
    //     <div className={s.wrapBox}>
    //         <SninerLoader />
    //         {hasLoaded
    //             ? 'Threekit Player has rendering'
    //             : 'Player rendering in progress...'}
    //         <div>
    //             {hasLoadedStatus ? 'Threekit API has loaded' : 'Loading in progress...'}
    //         </div>
    //     </div>
    // )

    return (<></>)
}
