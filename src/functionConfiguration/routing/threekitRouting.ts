import { getThreekitName, getThreekitValues } from "../threekitFunc/baseFuncThreekit";

const getObjectActive3DConfig = (typeConfig: any) => {
    //@ts-ignore
    const configurator = window.playerThreekit.getConfigurator();
    const displayAttributes = configurator.getDisplayAttributes()

    const activeConfig3D: any = {
        keyboard: {
            "Customize keyboard": "Keyboard",
            "Customize mouse": "None",
        },
        mouse: {
            "Customize keyboard": "None",
            "Customize mouse": "Mouse",
        }
    }

    const listAttrConfig = displayAttributes.filter((attr: any) => ["Customize keyboard", "Customize mouse"].includes(attr['name']))

    let get3DConfigProperty: any = JSON.parse(JSON.stringify(activeConfig3D[typeConfig]))

    let objValue: any = {}

    listAttrConfig.forEach((attr: any) => {
        const nameAttr = getThreekitName(attr)
        if (get3DConfigProperty[nameAttr]) {

            const nameValue = get3DConfigProperty[nameAttr];

            let value = getThreekitValues(attr).filter((value: any) => value['name'] === nameValue)

            objValue = {
                ...objValue,
                [nameAttr]: { assetId: value[0]['assetId'] }
            }
        }

    })
    return objValue;
}


export const changeTo3DConfig = (typeConfig: any) => {
    if (!typeConfig) return
    //@ts-ignore
    if (!window.playerThreekit) return

    const objValue = getObjectActive3DConfig(typeConfig)
    //@ts-ignore
    window.playerThreekit.configurator.setConfiguration(objValue)

}