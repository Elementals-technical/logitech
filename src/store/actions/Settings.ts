
import { TYPE_REDUCER } from "../../utils/constants";
import { configType } from "../reducers/Settings";


export const setTypeConfig = (data: any): any => ({
    type: TYPE_REDUCER.TYPE_CONFIG,
    payload: data,
});
export const setLoadingPlayer = (data: any): any => ({
    type: TYPE_REDUCER.LOADING_PLAYER,
    payload: data,
});
export const setOtpeningSection = (data: any): any => ({
    type: TYPE_REDUCER.SET_OPENING_SECTION,
    payload: data,
});
export const setDefaultConfigurations= (data: any): any => ({
    type: TYPE_REDUCER.SET_DEFAULT_VALUE,
    payload: data,
});
