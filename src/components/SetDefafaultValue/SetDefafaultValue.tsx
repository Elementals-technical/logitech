import { useConfigurator, usePlayerLoadingStatus, useThreekitInitStatus } from '@threekit-tools/treble/dist';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStoreDispatch } from '../..';
import { checkSelectedThreekitKeyboard, getConfigurationDefaultValue } from '../../functionConfiguration/keyboard/functionKeyboard';
import { checkConfigKeyboard, checkConfigMouse, getModeConfigUrl, getTypeConfig } from '../../functionConfiguration/routing/baseUrl';
import { getObjectActive3DConfig, getObjectActiveDESKConfig } from '../../functionConfiguration/routing/threekitRouting';
import { setDeskDefaultValue } from '../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { deleteNode } from '../../functionConfiguration/view/annotationCollisionMessageStyle';
import { selectedObject } from '../../functionConfiguration/view/customPoint';
import { getModeConfigRelativeUrl, getTypeModeConfig3D, getTypeModeConfigDesk } from '../../functionConfiguration/view/modeConfig';
import { setDefaultConfigurations, setLoadingPlayer, setModeConfigurations, setTypeConfig } from '../../store/actions/Settings';

export const SetDefafaultValue = () => {
    const [attributes, setConfiguration] = useConfigurator();

    const { pathname } = useLocation()

    const dispatch = useStoreDispatch();
    const navigate = useNavigate()

    let modeConfigStore = getModeConfigRelativeUrl(pathname);
    dispatch(setModeConfigurations(modeConfigStore))

    const typeConfig = getTypeConfig(pathname)
    const modeConfig = getModeConfigUrl(pathname)
    const hasLoaded = useThreekitInitStatus();

    if (getTypeModeConfig3D(modeConfigStore)) {
        const elements = document.getElementsByClassName('blob');

        // перетворюємо HTML колекцію в масив
        const elementsArray = Array.from(elements);
        //@ts-ignore
        elementsArray.forEach(element => element.style.display = 'none');


    } else if (getTypeModeConfigDesk(modeConfigStore)) {
        const elements = document.getElementsByClassName('blob');

        // перетворюємо HTML колекцію в масив
        const elementsArray = Array.from(elements);

        //@ts-ignore
        elementsArray.forEach(element => element.style.display = 'block');


    }

    useEffect(() => {
        if (hasLoaded) {
            //@ts-ignore
            if (!window['playerThreekit']) {
                //@ts-ignore
                const playerThreekit = window.threekit.player.enableApi('player');
                //@ts-ignore
                window.playerThreekit = playerThreekit;

                playerThreekit.tools.addTool(selectedObject(navigate));

            }

            if (typeConfig) {

                if (getTypeModeConfigDesk(modeConfigStore)) {
                    setDeskDefaultValue(setConfiguration)
                    if (setConfiguration) {
                        if (checkConfigMouse(pathname)) {
                            setConfiguration({ ["Camera"]: "Camera_Mous" })

                        } else if (checkConfigKeyboard(pathname)) {

                            setConfiguration({ ["Camera"]: "Camera_Keyboard" })
                        } else {
                            setConfiguration({ ["Camera"]: "CameraMain" })
                        }
                    }

                } else if (getTypeModeConfig3D(modeConfigStore)) {

                    if (checkConfigMouse(pathname)) {

                        const objValue = getObjectActive3DConfig(typeConfig)
                        if (setConfiguration) {
                            setConfiguration({ ["Camera"]: "Camera_Mous_3d" })
                            setConfiguration(objValue)
                        }
                    } else {
                        if (setConfiguration) {
                            setConfiguration({ ["Camera"]: "Camera_Keyboard_3d" })
                        }
                    }
                    setTimeout(() => {
                        const elements = document.getElementsByClassName('blob');

                        // перетворюємо HTML колекцію в масив
                        const elementsArray = Array.from(elements);
                        //@ts-ignore
                        elementsArray.forEach(element => element.style.display = 'none');


                    }, 600)

                    setTimeout(() => {
                        const elements = document.getElementsByClassName('blob');

                        // перетворюємо HTML колекцію в масив
                        const elementsArray = Array.from(elements);
                        //@ts-ignore
                        elementsArray.forEach(element => element.style.display = 'none');


                    }, 1200)



                }

                setTimeout(() => {
                    dispatch(setDefaultConfigurations(getConfigurationDefaultValue()))
                    dispatch(setLoadingPlayer(true))
                }, 1200)

            } else if (getTypeModeConfigDesk(modeConfigStore)) {

                if (setConfiguration) {
                    if (checkConfigMouse(pathname)) {
                        setConfiguration({ ["Camera"]: "Camera_Mous" })

                    } else if (checkConfigKeyboard(pathname)) {

                        setConfiguration({ ["Camera"]: "Camera_Keyboard" })
                    } else {
                        setConfiguration({ ["Camera"]: "CameraMain" })
                    }
                }


                setDeskDefaultValue(setConfiguration)
                setTimeout(() => {
                    dispatch(setDefaultConfigurations(getConfigurationDefaultValue()))
                    dispatch(setLoadingPlayer(true))
                }, 1200)
            }


        }
    }, [hasLoaded]);



    useEffect(() => {

        const typeConfig = getTypeConfig(pathname)

        //@ts-ignore
        if (typeConfig && setConfiguration && window['playerThreekit']) {
            dispatch(setDefaultConfigurations(getConfigurationDefaultValue()))
            let modeConfigStore = getModeConfigRelativeUrl(pathname);
            dispatch(setModeConfigurations(modeConfigStore))



            if (getTypeModeConfigDesk(modeConfigStore)) {
                setDeskDefaultValue(setConfiguration)

                if (checkConfigMouse(pathname)) {
                    setConfiguration({ ["Camera"]: "Camera_Mous" })

                } else if (checkConfigKeyboard(pathname)) {

                    setConfiguration({ ["Camera"]: "Camera_Keyboard" })
                }


            } else if (getTypeModeConfig3D(modeConfigStore)) {

                const objValue = getObjectActive3DConfig(typeConfig)
                if (setConfiguration) setConfiguration(objValue)

                if (checkConfigMouse(pathname)) {
                    if (setConfiguration) {
                        setConfiguration({ ["Camera"]: "Camera_Mous_3d" })
                    }
                } else {
                    if (setConfiguration) {
                        setConfiguration({ ["Camera"]: "Camera_Keyboard_3d" })
                    }
                }

                setTimeout(() => {
                    const elements = document.getElementsByClassName('blob');

                    // перетворюємо HTML колекцію в масив
                    const elementsArray = Array.from(elements);
                    //@ts-ignore
                    elementsArray.forEach(element => element.style.display = 'none');


                }, 1200)


            }


            setTimeout(() => {
                dispatch(setLoadingPlayer(true))
            }, 1000)


        } else if (typeConfig === '' && setConfiguration) {
            if (getTypeModeConfigDesk(modeConfigStore)) {

                setConfiguration({ ["Camera"]: "CameraMain" })

            }
        }
    }, [pathname]);

    useEffect(() => {
        if (hasLoaded) {
            if (modeConfig) {
                let modeConfigStore = getModeConfigRelativeUrl(pathname);
                if (getTypeModeConfigDesk(modeConfigStore)) {
                    setDeskDefaultValue(setConfiguration)
                    if (setConfiguration) {
                        if (checkConfigMouse(pathname)) {
                            setConfiguration({ ["Camera"]: "Camera_Mous" })

                        } else if (checkConfigKeyboard(pathname)) {

                            setConfiguration({ ["Camera"]: "Camera_Keyboard" })
                        } else {
                            setConfiguration({ ["Camera"]: "CameraMain" })
                        }
                    }
                } else if (getTypeModeConfig3D(modeConfigStore)) {

                    const objValue = getObjectActive3DConfig(typeConfig)
                    if (setConfiguration) setConfiguration(objValue)
                    if (checkConfigMouse(pathname)) {
                        if (setConfiguration) {
                            setConfiguration({ ["Camera"]: "Camera_Mous_3d" })
                        }
                    } else {
                        if (setConfiguration) {
                            setConfiguration({ ["Camera"]: "Camera_Keyboard_3d" })
                        }
                    }
                    setTimeout(() => {
                        const elements = document.getElementsByClassName('blob');

                        // перетворюємо HTML колекцію в масив
                        const elementsArray = Array.from(elements);
                        //@ts-ignore
                        elementsArray.forEach(element => element.style.display = 'none');


                    }, 1200)
                }

                setTimeout(() => {
                    dispatch(setModeConfigurations(modeConfigStore))
                    dispatch(setLoadingPlayer(true))
                }, 1800)

            }
        }
    }, [modeConfig]);
    return (
        <></>
    )
}
