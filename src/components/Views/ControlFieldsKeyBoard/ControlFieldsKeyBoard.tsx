import React from 'react'
import s from './ControlFieldsKeyBoard.module.scss'

import { useConfigurator, useNestedConfigurator } from '@threekit-tools/treble/dist';
import { AcordionComponent } from '../../ControlComponent/AcordionComponent/AcordionComponent';
import { ResetBtnField } from '../../Buttons/ResetBtnField/ResetBtnField';
import { getInfoAttributes, getInfoLabelAttribute, getInfoTypeAttribute } from '../../../functionConfiguration/keyboard/functionKeyboard';
import { getThreekitName } from '../../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { ListColor } from '../../ControlComponent/ListColor/ListColor';
import { ListTypeItem } from '../../ControlComponent/ListTypeItem/ListTypeItem';
import { useStoreDispatch, useStoreSelector } from '../../..';
import { getActiveSection } from '../../../store/selectors/selectors';
import { useLocation } from 'react-router-dom';
import { getTypeConfig } from '../../../functionConfiguration/routing/baseUrl';
import { setOtpeningSection } from '../../../store/actions/Settings';

export const ControlFieldsKeyBoard = (): any => {

    const dispatch = useStoreDispatch()



    const { pathname } = useLocation()
    const typeConfig = getTypeConfig(pathname)
    const idActiveSection = useStoreSelector(getActiveSection(typeConfig))

    const handleChangeAcordion = (idSection: any) => {
        const idNextSection = idActiveSection !== idSection ? idSection : ''
        dispatch(setOtpeningSection({ typeConfig, idSection: idNextSection }))
    }


    let [attributes]: any = useConfigurator();
    if (!attributes && !attributes['Customize']) attributes = {}

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

                    <AcordionComponent isSelected={idActiveSection === threekitName} onChange={() => handleChangeAcordion(threekitName)} title={label}>
                        {type === 'color' && (<ListColor nameAttribute={item['name']} />)}
                        {type === 'list' && (<ListTypeItem nameAttribute={item['name']} />)}
                        <div className={s.wrapReset}>
                            <ResetBtnField nameSettings={[threekitName]} />
                        </div>
                    </AcordionComponent>
                )
            })}
        </div>
        : <></>

}
