export const routeConfi: any = "/:typeConfig/:modeConfig"


const getInfoPathConfig = (pathname: string) => {
    const [typeConfig, modeConfig] = pathname.split('/').slice(1);
    return { typeConfig, modeConfig }
}
export const getTypeConfig = (pathname: string) => {
    const { typeConfig } = getInfoPathConfig(pathname)
    if (!typeConfig) return ''
    return typeConfig
}

export const checkConfigKeyboard = (pathname: string) => {
    const typeConfig = getTypeConfig(pathname);
    return typeConfig === 'keyboard'
}

export const getModeConfig = (pathname: string) => {
    const { modeConfig } = getInfoPathConfig(pathname)
    return modeConfig
}

export const checkIsPageConfig = (pathname: string) => {
    const typeConfig = getTypeConfig(pathname);
    if (checkConfigKeyboard(pathname) || typeConfig === 'mouse') return true
    return false
}