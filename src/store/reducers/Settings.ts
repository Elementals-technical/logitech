// import {
//     additionalParameters,
//     additionalParametersT,
//     modalName,
//     MODAL_NAME,
// } from './../../utils/constants';
import { TYPE_REDUCER } from '../../utils/constants';
export type ModalStatusT = {
    isShow: boolean;
    otherParams?: any;
};
export type errorT = {
    assetId: string[];
    errorCategory: string;
};

export type configType = 'mouse' | 'keyboard' | ''
export type modeConfig = '3D' | 'DESK'


export type initialStateT = {
    viewConfig: {
        typeConfig: configType,
        modeConfig: modeConfig
    }
    configuration: {
        default: {
            mouse: {},
            keyboard: {},
        },
        activeSection: {
            mouse: string,
            keyboard: string,
        }
    },
    loader: {
        checkLoadThreekitPlayer: boolean
    }
};

const initialState: initialStateT = {
    viewConfig: {
        typeConfig: 'keyboard',
        modeConfig: '3D'
    },
    configuration: {
        default: {
            mouse: {},
            keyboard: {},
        },
        activeSection: {
            mouse: '',
            keyboard: 'Backplate color',
        }
    },
    loader: {
        checkLoadThreekitPlayer: false
    }
};

const Settings = (state = initialState, action: any) => {
    switch (action.type) {
        case TYPE_REDUCER.TYPE_CONFIG: {
            const { typeConfig }: any = action.payload;

            return {
                ...state,
                viewConfig: {
                    ...state['viewConfig'],
                    typeConfig: typeConfig
                }
            };
        }

            break;
        case TYPE_REDUCER.LOADING_PLAYER: {
            const statusLoading: any = action.payload;

            return {
                ...state,
                loader: {
                    ...state['loader'],
                    checkLoadThreekitPlayer: statusLoading
                }

            };
        }

            break;
        case TYPE_REDUCER.SET_OPENING_SECTION: {
            const { typeConfig, idSection }: any = action.payload;

            return {
                ...state,
                configuration: {
                    ...state['configuration'],
                    activeSection: {
                        ...state['configuration']['activeSection'],
                        [typeConfig]: idSection,
                    }
                },

            };
            break;
        }
        case TYPE_REDUCER.SET_DEFAULT_VALUE: {
            const defaultConfig: any = action.payload;

            return {
                ...state,
                configuration: {
                    ...state['configuration'],
                    default: defaultConfig
                }
            }
            break;
        }
        case TYPE_REDUCER.SET_MODE_CONFIG: {
            const modeConfig: any = action.payload;

            return {
                ...state,
                viewConfig: {
                    ...state['viewConfig'],
                    modeConfig: modeConfig
                }
            }
            break;
        }

        default:
            return state;
    }
};
export default Settings;
