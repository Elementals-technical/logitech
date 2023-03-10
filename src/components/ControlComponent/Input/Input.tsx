import { useAttribute } from '@threekit-tools/treble/dist';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { getThreekitValues } from '../../../functionConfiguration/threekitFunc/baseFuncThreekit';
import s from './Input.module.scss'
interface Props {
    delay?: number;
    nameAttribute: string;

}

export const InputField = ({ delay = 200, setAttribute, attribute }: any) => {

    const [value, setValue] = useState<string>(attribute['value']);

    useEffect(() => { 
        const timeoutId = setTimeout(() => {
            setAttribute(value);

        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    return (
        <input className={s.textInput} type="text" defaultValue={value} value={value} placeholder='Enter your text' onChange={handleChange} />
    );
}
export const Input = ({ delay = 200, nameAttribute }: Props) => {

    const [attribute, setAttribute]: any = useAttribute(nameAttribute);


    return (
        <InputField attribute={attribute} setAttribute={setAttribute} />
    );
}