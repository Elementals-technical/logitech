import React, { CSSProperties } from 'react'
import { useAttribute } from '@threekit-tools/treble/dist';
import { useLocation } from 'react-router-dom';
import { IconLight } from '../../../assets/svg/IconLight';
import { TurnIcon } from '../../../assets/svg/turnIcon';
import { checkConfigKeyboard, checkModeDeskConfigUrl } from '../../../functionConfiguration/routing/baseUrl';
import { InfoMessage } from '../InfoMessage/InfoMessage';

export const TurnOnOff = () => {
    const { pathname } = useLocation()
    const [attribute, setAttribute]: any = useAttribute('Turn on/off RGB light');

    let isCheckKonfig = checkConfigKeyboard(pathname);
    if (checkModeDeskConfigUrl(pathname)) isCheckKonfig = true;
    let style: CSSProperties = {}
    if (checkModeDeskConfigUrl(pathname)) {
        style = {
            ...style,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100px',
            textAlign: 'center',
            padding: '10px',
            background: '#242f38cc',
            borderRadius: '10px'
        }

    }


    return isCheckKonfig ? <InfoMessage style={style} onClick={() => setAttribute(!attribute['value'])} Icon={attribute && attribute['value'] ? <TurnIcon /> : <IconLight style={{ fill: `#ffdd59` }} />} text="Turn on/off RGB light" /> : <></>
}
