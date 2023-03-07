export const getCheckLoadThreekitPlayer = (state: any): boolean => {
    const isLoadThreekitPlayer = state.Configurations.loader.checkLoadThreekitPlayer;
    return isLoadThreekitPlayer;
};
export const getActiveSection = (typeConfig: any) => (state: any): string => {

    if (!typeConfig) return '';

    const idActiveSection = state.Configurations.configuration.activeSection[typeConfig];
    return idActiveSection;
};

export const getDefaultConfigReleativeTypeConfig = (typeConfig: any) => (state: any) => {

    if (!typeConfig) return '';

    const configurationDefault = state.Configurations.configuration.default[typeConfig];


    return configurationDefault;
};
export const getValueSetting = (typeConfig: any, nameSettings: string[]) => (state: any): string => {

    if (!typeConfig) return '';

    const configurationDefault = getDefaultConfigReleativeTypeConfig(typeConfig)(state);

    let objectConfig: any = {}
    nameSettings.forEach(nameAttr => {
        if (configurationDefault[nameAttr] !== undefined) {
            const valueSetting = configurationDefault[nameAttr];
            objectConfig = {
                ...objectConfig,
                [nameAttr]: valueSetting
            }
        }

    })

    return objectConfig;
};

