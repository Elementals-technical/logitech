import React from 'react'
import s from './ControlFieldsMouse.module.scss'

import { useConfigurator, useNestedConfigurator } from '@threekit-tools/treble/dist';
import { AcordionComponent } from '../../ControlComponent/AcordionComponent/AcordionComponent';
import { ResetBtnField } from '../../Buttons/ResetBtnField/ResetBtnField';
import { getInfoAttributes, getInfoAttributesMouse, getInfoLabelAttribute, getInfoLabelAttributeMouse, getInfoTypeAttribute, getInfoTypeAttributeMouse, getInfoValeuNameAttribute } from '../../../functionConfiguration/keyboard/functionKeyboard';
import { getThreekitName } from '../../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { ListColor } from '../../ControlComponent/ListColor/ListColor';
import { ListTypeItem } from '../../ControlComponent/ListTypeItem/ListTypeItem';
import { useStoreDispatch, useStoreSelector } from '../../..';
import { getActiveSection } from '../../../store/selectors/selectors';
import { useLocation } from 'react-router-dom';
import { getTypeConfig } from '../../../functionConfiguration/routing/baseUrl';
import { setOtpeningSection } from '../../../store/actions/Settings';
import { Input } from '../../ControlComponent/Input/Input';
import { GroupSetting } from '../GroupSetting/GroupSetting';

export const ControlFieldsMouse = (): any => {

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

    const infoAttributesMouse = getInfoAttributesMouse()

    let listAttribures = Object.values(attributes).filter((item: any) => Object.keys(infoAttributesMouse).includes(item['name']))
    let bodyColorsAttribures = listAttribures.filter((item: any) => ['Body colors'].includes(item['name']))
    let allAttribures = listAttribures.filter((item: any) => !['Body colors'].includes(item['name']))



    // "Single Color"
    return Object.values(listAttribures).length > 0 ?
        <div className={s.wrap}>
            {Object.values(bodyColorsAttribures).map((item: any) => {
                const threekitName = getThreekitName(item)

                const label = getInfoLabelAttributeMouse(threekitName)
                const type = getInfoTypeAttributeMouse(threekitName)
                const valueName = getInfoValeuNameAttribute(item)
               
                debugger
                return (

                    <AcordionComponent isSelected={idActiveSection === threekitName} onChange={() => handleChangeAcordion(threekitName)} title={label} value={valueName}>
                        {type === 'color' && (<ListColor key={item['name']} nameAttribute={item['name']} />)}
                        {type === 'list' && (<ListTypeItem key={`body_${item['name']}`} nameAttribute={item['name']} />)}
                        {type === 'input' && (<Input key={item['name']} nameAttribute={item['name']} />)}
                        <div className={s.wrapReset}>
                            <ResetBtnField nameSettings={['Body colors']} />
                        </div>
                    </AcordionComponent>

                )
            })}
            <AcordionComponent isSelected={idActiveSection === 'Add personalization'} onChange={() => handleChangeAcordion("Add personalization")} title={'Add personalization'}>
                <div className={s.wrapAcordion}>
                    <div className={s.wrapBox}>
                        {Object.values(allAttribures).map((item: any) => {
                            const threekitName = getThreekitName(item)

                            const label = getInfoLabelAttributeMouse(threekitName)
                            const type = getInfoTypeAttributeMouse(threekitName)


                            return (
                                <>
                                    <GroupSetting title={label}>
                                        {type === 'color' && (<ListColor key={item['name']} nameAttribute={item['name']} />)}
                                        {type === 'list' && (<ListTypeItem key={`color_${item['name']}`} nameAttribute={item['name']} />)}
                                        {type === 'input' && (<Input key={item['name']} nameAttribute={item['name']} />)}

                                    </GroupSetting>

                                </>

                            )

                        })}
                    </div>

                    <div className={s.wrapReset}>
                        <ResetBtnField nameSettings={Object.values(allAttribures).map((item: any) => item['name'])} />
                    </div>
                </div>

            </AcordionComponent>


        </div>
        : <></>

}
