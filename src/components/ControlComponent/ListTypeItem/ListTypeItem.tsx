import React from 'react'
import { useAttribute } from '@threekit-tools/treble/dist';
import { getThreekitValues } from '../../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { BtnTypeLoyaut } from '../../Buttons/BtnTypeLoyaut/BtnTypeLoyaut';

import s from './ListTypeItem.module.scss'



export const ListTypeItem = ({ nameAttribute }: any) => {
    const [attribute, setAttribute]: any = useAttribute(nameAttribute);
    let values = getThreekitValues(attribute)

    console.log('attribute', attribute);

    if (nameAttribute === "Keyboard color layout") {
        values = values.filter((item: any) => item['value'] !== 'Single Color')
    }

    return (
        <div className={s.mainColor}>
            <div className={s.wrapTypeLoyaut}>
                {values.map((item: any) => {

                    let value = item['value'];
                    const isSeleceted = item.value === attribute.value;
                    if (nameAttribute === "Keyboard color layout" && isSeleceted) value = 'Single Color'

                    return <BtnTypeLoyaut isActive={item.value === attribute.value} name={item['label']} onClick={() => { setAttribute(value) }} />
                })}
            </div>

        </div>
    )
}
