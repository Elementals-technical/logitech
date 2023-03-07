export const getThreekitValues = (item: any) => item['values'];

export const getThreekitName = (item: any) => item['name'];
//@ts-ignore
export const getThreekitFullConfig = () => window.playerThreekit.configurator.getFullConfiguration();