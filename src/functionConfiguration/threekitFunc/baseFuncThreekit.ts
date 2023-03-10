import { getObjectActiveDESKConfig } from "../routing/threekitRouting";

export const getThreekitValues = (item: any) => item['values'];
export const getThreekitValue = (item: any) => item['value'];

export const getThreekitName = (item: any) => item['name'];
//@ts-ignore
export const getThreekitFullConfig = () => window.playerThreekit.configurator.getFullConfiguration();


export const setDeskDefaultValue = (setConfiguration: any) => {
    const objectActiveDESKConfig = getObjectActiveDESKConfig()
     
    if (setConfiguration) setConfiguration(objectActiveDESKConfig)
}