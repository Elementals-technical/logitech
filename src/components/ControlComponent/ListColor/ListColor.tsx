import { useAttribute } from '@threekit-tools/treble/dist';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { getThreekitValues } from '../../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { BtnColor } from '../../Buttons/BtnColor/BtnColor';
import s from './ListColor.module.scss'

import { v4 as uuidv4 } from 'uuid';


export const ListColor = ({ nameAttribute }: any) => {
    const [attribute, setAttribute]: any = useAttribute(nameAttribute);
    const values = getThreekitValues(attribute)
    const { pathname } = useLocation()
    useEffect(() => {

    }, [pathname])
    return (
        <div className={s.mainColor}>
            <div className={s.wrapColor}>
                {values.map((value: any) => {
                    const colorRGB = value['metadata']['colorRGB'];

                    return <BtnColor key={uuidv4()} isActive={value.assetId === attribute.value.assetId} color={colorRGB} onClick={() => setAttribute(value['assetId'])} />
                })}
            </div>

        </div>
    )
}
