export const routeConfi: any = "/:typeConfig/:modeConfig"


const getInfoPathConfig = (pathname: string) => {
    const [modeConfig, typeConfig] = pathname.split('/').slice(1);
    return { modeConfig, typeConfig }
}
export const getTypeConfig = (pathname: string) => {
    const { typeConfig } = getInfoPathConfig(pathname);
 
    if (!typeConfig) {
       
        if (checkMode3DConfigUrl(pathname)) return 'keyboard'
         
        if (checkModeDeskConfigUrl(pathname)) return ''

    } 
    if (!typeConfig) return '' 
    return typeConfig
}

export const checkConfigKeyboard = (pathname: string) => {
    const typeConfig = getTypeConfig(pathname);
    return typeConfig === 'keyboard'
}

export const checkConfigMouse = (pathname: string) => {
    const typeConfig = getTypeConfig(pathname);
    return typeConfig === 'mouse'
}

export const getModeConfigUrl = (pathname: string) => {
    const { modeConfig } = getInfoPathConfig(pathname)
    return modeConfig
}




export const checkMode3DConfigUrl = (pathname: string) => {
    const { modeConfig } = getInfoPathConfig(pathname)
    return modeConfig === '3d'
}
export const checkModeDeskConfigUrl = (pathname: string) => {
    const { modeConfig } = getInfoPathConfig(pathname)
    return modeConfig === 'desk'
}

export const checkIsPageConfig = (pathname: string) => {
    if (checkMode3DConfigUrl(pathname) || checkModeDeskConfigUrl(pathname)) return true
    if (checkConfigKeyboard(pathname) || checkConfigMouse(pathname)) return true
    return false
}

export const checkIsConfigObject = (pathname: string) => {
    if (checkConfigKeyboard(pathname) || checkConfigMouse(pathname)) return true
    return false
}