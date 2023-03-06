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

type config = 'mouse' | 'keyboard'
type viewConfig = '3D' | 'DESK'


export type initialStateT = {
    viewConfig: {
        typeConfig: config,
        viewConfig: viewConfig
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
    }
};

const initialState: initialStateT = {
    viewConfig: {
        typeConfig: 'mouse',
        viewConfig: '3D'
    },
    configuration: {
        default: {
            mouse: {},
            keyboard: {},
        },
        activeSection: {
            mouse: '',
            keyboard: '',
        }
    },
    // loaging:{
    //     loading:play
    // }
};

const Settings = (state = initialState, action: any) => {
    switch (action.type) {
        // case TYPE_REDUCER.TYPE_CONFIG:
        //     return {
        //         ...state,
        //         // modalState: {
        //         //     modalInfo: action.payload.info || null,
        //         //     modalList: {
        //         //         ...state.modalState.modalList,
        //         //         ...action.payload.list,
        //         //     },
        //         // },
        //     };

        default:
            return state;
    }
};
export default Settings;
