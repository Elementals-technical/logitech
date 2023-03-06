export const routeConfi: any = "/:typeConfig/:modeConfig"


const getInfoPathConfig = (pathname: string) => {
    const [typeConfig, modeConfig] = pathname.split('/').slice(1);
    return { typeConfig, modeConfig }
}
export const getTypeConfig = (pathname: string) => {
    const { typeConfig } = getInfoPathConfig(pathname)
    return typeConfig
}
export const getModeConfig = (pathname: string) => {
    const { modeConfig } = getInfoPathConfig(pathname)
    return modeConfig
}

export const checkIsPageConfig = (pathname: string) => {
    const typeConfig = getTypeConfig(pathname);
    if (typeConfig === 'keyboard' || typeConfig === 'mouse') return true
    return false
}