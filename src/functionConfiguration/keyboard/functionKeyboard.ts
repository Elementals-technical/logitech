import { getThreekitFullConfig, getThreekitValue, getThreekitValues } from "../threekitFunc/baseFuncThreekit"
import { listFields, objectField, objectFieldMouse } from "./listFields"

export const getInfoAttributes = (): listFields => {
    return JSON.parse(JSON.stringify(objectField))
}
export const getInfoAttributesMouse = (): listFields => {
    return JSON.parse(JSON.stringify(objectFieldMouse))
}
export const getInfoAttribute = (name: string) => {
    const attributes = getInfoAttributes()
    return attributes[name]
}
export const getInfoAttributeMouse = (name: string) => {
    const attributes = getInfoAttributesMouse()
    return attributes[name]
}
export const getInfoLabelAttribute = (name: string) => {
    const attributes = getInfoAttribute(name)
    return attributes['label']
}
export const getInfoLabelAttributeMouse = (name: string) => {
    const attributes = getInfoAttributeMouse(name)
    return attributes['label']
}
export const getInfoTypeAttribute = (name: string) => {
    const attributes = getInfoAttribute(name)
    return attributes['type']
}
export const getInfoTypeAttributeMouse = (name: string) => {
    const attributes = getInfoAttributeMouse(name)
    return attributes['type']
}

export const getInfoValeuNameAttribute = (attribute: any) => {
   
    const valueAttribute = getThreekitValue(attribute)
    if (!valueAttribute) return undefined
    const values = getThreekitValues(attribute)

 
    let valueLabel = valueAttribute;
    if (valueAttribute && valueAttribute['assetId']) {
        let value = values.filter((item: any) => item['assetId'] === valueAttribute['assetId'])
        
        if (value.length > 0) {
            valueLabel = value[0]['label']
        }
    }

    
    return valueLabel
}


export const getNameConfigurationValue = (): any => {
    const attributes = getInfoAttributes()
    const listNameKeyBoard = Object.keys(attributes);

    const attributesMouse = getInfoAttributesMouse()
    const listNameMouse = Object.keys(attributesMouse);


    return {
        keyboard: listNameKeyBoard,
        mouse: listNameMouse,
    }
}
export const getConfigurationDefaultValue = (): any => {
    let { keyboard, mouse } = getNameConfigurationValue();

    const defaultConfiguration = getThreekitFullConfig()

    let mouseConfig = {}
    mouse.forEach((nameAttr: string) => {
        if (defaultConfiguration[nameAttr] !== undefined) {
            mouseConfig = {
                ...mouseConfig,
                [nameAttr]: defaultConfiguration[nameAttr]
            }
        }
    })
    let keyboardConfig = {}
    keyboard.forEach((nameAttr: string) => {
        if (defaultConfiguration[nameAttr]) {
            keyboardConfig = {
                ...keyboardConfig,
                [nameAttr]: defaultConfiguration[nameAttr]
            }
        }
    })

    return { mouse: mouseConfig, keyboard: keyboardConfig }




}

export const checkSelectedThreekitKeyboard = (attributes: any) => {
    const attributeKyeboard: any = attributes['Customize keyboard'];
    const valueAttributeKyeboard: any = attributeKyeboard['value'];

    const assetId = valueAttributeKyeboard['assetId'];
    const valuesAttribute: any = attributeKyeboard['values'];

    const keyboardItem = valuesAttribute.filter((item: any) => item['name'] === "Keyboard")
   
    if (keyboardItem.length > 0 && keyboardItem[0]['assetId']) {
        let valueKeyboardItem = keyboardItem[0]['assetId'];
       
        if (valueKeyboardItem == assetId) return true
    }
    return false
}