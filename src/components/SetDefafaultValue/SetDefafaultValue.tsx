import { useConfigurator, usePlayerLoadingStatus, useThreekitInitStatus } from '@threekit-tools/treble/dist';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStoreDispatch } from '../..';
import { checkSelectedThreekitKeyboard, getConfigurationDefaultValue } from '../../functionConfiguration/keyboard/functionKeyboard';
import { checkConfigKeyboard, checkConfigMouse, getModeConfigUrl, getTypeConfig } from '../../functionConfiguration/routing/baseUrl';
import { getObjectActive3DConfig, getObjectActiveDESKConfig } from '../../functionConfiguration/routing/threekitRouting';
import { setDeskDefaultValue } from '../../functionConfiguration/threekitFunc/baseFuncThreekit';
import { deleteNode, hiddenAnotation, hiddenWaterMark, leftLogoThereekit3D, leftLogoThereekitDesk, showAnotation } from '../../functionConfiguration/view/annotationCollisionMessageStyle';
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
        hiddenAnotation()
    } else if (getTypeModeConfigDesk(modeConfigStore)) {
        showAnotation()
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

                setTimeout(() => {
                    showAnotation()
                    hiddenWaterMark()
                }, 500)
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
                        showAnotation()

                        leftLogoThereekitDesk()
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
                    setTimeout(() => hiddenAnotation(), 600)
                    setTimeout(() => hiddenAnotation(), 1200)
                    setTimeout(() => hiddenAnotation(), 1800)
                    setTimeout(() => leftLogoThereekit3D(), 1800)



                }

                setTimeout(() => {
                    hiddenWaterMark()
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
                leftLogoThereekitDesk()
                showAnotation()
                setDeskDefaultValue(setConfiguration)

                setTimeout(() => {
                    hiddenWaterMark()
                    showAnotation()
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

                showAnotation()
                leftLogoThereekitDesk()

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
                leftLogoThereekit3D()
                hiddenAnotation()


            }


            setTimeout(() => {

                hiddenWaterMark()
                dispatch(setLoadingPlayer(true))
            }, 1000)


        } else if (typeConfig === '' && setConfiguration) {
            if (getTypeModeConfigDesk(modeConfigStore)) {
                showAnotation()
                setConfiguration({ ["Camera"]: "CameraMain" })
                leftLogoThereekitDesk()
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
                    leftLogoThereekitDesk()
                    showAnotation()
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
                    leftLogoThereekit3D()
                    hiddenAnotation()
                }

                setTimeout(() => {
                    hiddenWaterMark()
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
