import { modeConfig } from "../../store/reducers/Settings";
import { checkModeDeskConfigUrl, getModeConfigUrl } from "../routing/baseUrl";

export const getTypeModeConfig3D = (modeConfig: modeConfig) => {
    if (modeConfig === '3D') return true;
    return false
}
export const getTypeModeConfigDesk = (modeConfig: modeConfig) => {

    if (modeConfig === 'DESK') return true;
    return false
}

export const getModeConfigRelativeUrl = (pathname: string): modeConfig => {
    let modeConfigStore: modeConfig = '3D';
    if (checkModeDeskConfigUrl(pathname)) modeConfigStore = "DESK"
    return modeConfigStore
}
