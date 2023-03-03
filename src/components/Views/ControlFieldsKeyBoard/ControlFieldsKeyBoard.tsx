import React from 'react'
import s from './ControlFieldsKeyBoard.module.scss'

import { useConfigurator } from '@threekit-tools/treble/dist';
import { BtnColor } from '../../Buttons/BtnColor/BtnColor';
import { AcordionComponent } from '../../ControlComponent/AcordionComponent/AcordionComponent';
import { ResetBtnField } from '../../Buttons/ResetBtnField/ResetBtnField';
import { BtnTypeLoyaut } from '../../Buttons/BtnTypeLoyaut/BtnTypeLoyaut';
import { getInfoAttributes, getInfoLabelAttribute, getInfoTypeAttribute } from '../../../functionConfiguration/keyboard/functionKeyboard';
import { getThreekitName, getThreekitValues } from '../../../functionConfiguration/threekitFunc/baseFuncThreekit';

export const ControlFieldsKeyBoard = (): any => {
    const [attributes, setConfiguration]: any = useConfigurator();

    const infoAttributes = getInfoAttributes()

    const listAttribures = Object.values(attributes).filter((item: any) => Object.keys(infoAttributes).includes(item['name']))

    return Object.values(listAttribures).length > 0 ?
        <div className={s.wrap}>
            {Object.values(listAttribures).map((item: any) => {
                const threekitName = getThreekitName(item)

                const label = getInfoLabelAttribute(item['name'])
                const type = getInfoTypeAttribute(item['name'])
                const values = getThreekitValues(item)
                debugger

                // assetId :  "0dec9e77-3985-4e2d-b9f0-02bef55e92d7"


                return (

                    <AcordionComponent title={label}>
                        {type === 'color' && (
                            <div className={s.mainColor}>
                                <div className={s.wrapColor}>
                                    {values.map((value: any) => {
                                        const colorRGB = value['metadata']['colorRGB'];
                                        return <BtnColor color={colorRGB} onClick={() => { setConfiguration({ [threekitName]: { assetId: value['assetId'] } }) }} />
                                    })}
                                </div>

                            </div>
                        )}
                        {type === 'list' && (
                            <div className={s.mainColor}>
                                <div className={s.wrapTypeLoyaut}>
                                    {values.map((value: any) => {
                                        return <BtnTypeLoyaut name={value['label']} onClick={() => { }} />
                                    })}
                                </div>

                            </div>
                        )}
                        <div className={s.wrapReset}>
                            <ResetBtnField />
                        </div>
                    </AcordionComponent>
                )
            })}
        </div>
        : <></>

}
