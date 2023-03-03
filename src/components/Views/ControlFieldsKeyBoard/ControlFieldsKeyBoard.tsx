import React from 'react'
import s from './ControlFieldsKeyBoard.module.scss'

import { useConfigurator, useNestedConfigurator } from '@threekit-tools/treble/dist';
import { AcordionComponent } from '../../ControlComponent/AcordionComponent/AcordionComponent';
import { ResetBtnField } from '../../Buttons/ResetBtnField/ResetBtnField';
import { getInfoAttributes, getInfoLabelAttribute, getInfoTypeAttribute } from '../../../functionConfiguration/keyboard/functionKeyboard';
import { getThreekitName } from '../../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { ListColor } from '../../ControlComponent/ListColor/ListColor';
import { ListTypeItem } from '../../ControlComponent/ListTypeItem/ListTypeItem';

export const ControlFieldsKeyBoard = (): any => {
    let [attributes]: any = useConfigurator();
    if (!attributes && !attributes['Customize']) attributes = {}
    const [attributes1, setConfiguration, metadata, price] = useNestedConfigurator('f1a61402-93a2-4369-96a0-bce24c25d7b1');
    debugger
    debugger
    const infoAttributes = getInfoAttributes()

    let listAttribures = Object.values(attributes).filter((item: any) => Object.keys(infoAttributes).includes(item['name']))

    if (attributes && attributes['Keyboard color layout'] && attributes['Keyboard color layout']['value']) {
        const valueTypeKeyboard = attributes['Keyboard color layout']['value'];
        if (valueTypeKeyboard === 'Single Color') {
            listAttribures = listAttribures.filter((item: any) => item['name'] !== "Color 2")
        }
    }

    // "Single Color"
    return Object.values(listAttribures).length > 0 ?
        <div className={s.wrap}>
            {Object.values(listAttribures).map((item: any) => {
                const threekitName = getThreekitName(item)

                const label = getInfoLabelAttribute(threekitName)
                const type = getInfoTypeAttribute(threekitName)

                return (

                    <AcordionComponent title={label}>
                        {type === 'color' && (<ListColor nameAttribute={item['name']} />)}
                        {type === 'list' && (<ListTypeItem nameAttribute={item['name']} />)}
                        <div className={s.wrapReset}>
                            <ResetBtnField />
                        </div>
                    </AcordionComponent>
                )
            })}
        </div>
        : <></>

}
