import React from 'react'
import s from './ControlFieldsKeyBoard.module.scss'

import { useConfigurator, useNestedConfigurator } from '@threekit-tools/treble/dist';
import { AcordionComponent } from '../../ControlComponent/AcordionComponent/AcordionComponent';
import { ResetBtnField } from '../../Buttons/ResetBtnField/ResetBtnField';
import { getInfoAttributes, getInfoLabelAttribute, getInfoTypeAttribute, getInfoValeuNameAttribute } from '../../../functionConfiguration/keyboard/functionKeyboard';
import { getThreekitName } from '../../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { ListColor } from '../../ControlComponent/ListColor/ListColor';
import { ListTypeItem } from '../../ControlComponent/ListTypeItem/ListTypeItem';
import { useStoreDispatch, useStoreSelector } from '../../..';
import { getActiveSection } from '../../../store/selectors/selectors';
import { useLocation } from 'react-router-dom';
import { getTypeConfig } from '../../../functionConfiguration/routing/baseUrl';
import { setOtpeningSection } from '../../../store/actions/Settings';
import { GroupSetting } from '../GroupSetting/GroupSetting';

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


    let listAttribures = Object.values(attributes).filter((item: any) => Object.keys(infoAttributes).includes(item['name'])).filter((item: any) => !['Color 1', 'Color 2'].includes(item['name']))
    let listAttributeColor = Object.values(attributes).filter((item: any) => Object.keys(infoAttributes).includes(item['name'])).filter((item: any) => ['Color 1', 'Color 2'].includes(item['name']))

    if (attributes && attributes['Keyboard color layout'] && attributes['Keyboard color layout']['value']) {
        const valueTypeKeyboard = attributes['Keyboard color layout']['value'];

        if (valueTypeKeyboard === 'Default') {
            listAttributeColor = listAttributeColor.filter((item: any) => item['name'] !== "Color 2")
        }
    }
   

    let selectedValue = Object.values(listAttributeColor).map((item: any) => {
        const threekitName = getThreekitName(item)

        const label = getInfoLabelAttribute(threekitName)
        return { [label]: getInfoValeuNameAttribute(item) }
    })

    let valueString = selectedValue.map(item => {
        let key = Object.keys(item)[0];
        let label = 'Primary'
        if (key.includes('Primary keys color')) label = 'Primary';
        if (key.includes('Secondary keys color')) label = 'Secondary';

        return `${label} - ${item[key]}`
    }).join(' | ')

     
    // "Single Color"
    return Object.values(listAttribures).length > 0 ?
        <div className={s.wrap}>
            {Object.values(listAttribures).map((item: any) => {
                const threekitName = getThreekitName(item)

                const label = getInfoLabelAttribute(threekitName)
                const type = getInfoTypeAttribute(threekitName)
                const valueName = getInfoValeuNameAttribute(item)

                return (

                    <AcordionComponent isSelected={idActiveSection === threekitName} onChange={() => handleChangeAcordion(threekitName)} title={label} value={valueName}>
                        {type === 'color' && (<ListColor key={item['name']} nameAttribute={item['name']} />)}
                        {type === 'list' && (<ListTypeItem key={item['name']} nameAttribute={item['name']} />)}
                        {item['name'] !== 'Keyboard color layout' && (<div className={s.wrapReset}>
                            <ResetBtnField nameSettings={[threekitName]} />
                        </div>)}

                    </AcordionComponent>
                )
            })}

            <AcordionComponent isSelected={idActiveSection === 'Keyboard layout color pallet'} onChange={() => handleChangeAcordion("Keyboard layout color pallet")} title={'Keyboard layout color pallet'} value={valueString}>
                <div className={s.wrapAcordion}>
                    <div className={s.wrapColors}>
                        {Object.values(listAttributeColor).map((item: any) => {
                            const threekitName = getThreekitName(item)

                            const label = getInfoLabelAttribute(threekitName)
                            const type = getInfoTypeAttribute(threekitName)

                            return (
                                <>
                                    <GroupSetting title={label}>
                                        {type === 'color' && (<ListColor key={item['name']} nameAttribute={item['name']} />)}
                                    </GroupSetting>
                                </>

                            )

                        })}
                    </div>

                    <div className={s.wrapReset}>
                        <ResetBtnField nameSettings={Object.values(listAttributeColor).map((item: any) => item['name'])} />
                    </div>
                </div>

            </AcordionComponent>


        </div>
        : <></>

}
