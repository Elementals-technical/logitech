import { modeConfig } from "../../store/reducers/Settings";
import { getModeConfigUrl } from "../routing/baseUrl";

export const getTypeModeConfig3D = (modeConfig: modeConfig) => {
    if (modeConfig === '3D') return true;
    return false
}
export const getTypeModeConfigDesk = (modeConfig: modeConfig) => {
    if (modeConfig === 'DESK') return true;
    return false
}

export const getModeConfigRelativeUrl = (pathname: string): modeConfig => {

    const modeConfigUrl = getModeConfigUrl(pathname)

    let modeConfigStore: modeConfig = '3D';
    if (modeConfigUrl === 'desk') modeConfigStore = "DESK"
    return modeConfigStore
}
