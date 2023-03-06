import { useAttribute } from '@threekit-tools/treble/dist';
import React from 'react'
import { getThreekitValues } from '../../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { BtnColor } from '../../Buttons/BtnColor/BtnColor';
import s from './ListColor.module.scss'



export const ListColor = ({ nameAttribute }: any) => {
    const [attribute, setAttribute]: any = useAttribute(nameAttribute);
    const values = getThreekitValues(attribute)

    return (
        <div className={s.mainColor}>
            <div className={s.wrapColor}>
                {values.map((value: any) => {
                    const colorRGB = value['metadata']['colorRGB'];

                    return <BtnColor isActive={value.assetId === attribute.value.assetId} color={colorRGB} onClick={() => setAttribute(value['assetId'])} />
                })}
            </div>

        </div>
    )
}