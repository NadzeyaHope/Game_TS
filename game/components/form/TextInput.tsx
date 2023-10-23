import React from 'react';
import Spacer from '@/../components/layout/Spacer';
import Input from '@/../components/form/Input';
import Error from '@/../components/form/Error';
import Label from '@/../components/form/Label';

type TextInput = {
    fullWidth : boolean,
    onChange : (value : string)=> void,
    error : string,
    value : string,
    label: string,
    isRequired? : boolean,
    placeholder: string
}

const TextInput = (props: TextInput) => {
    const {error, fullWidth, isRequired, label, onChange, placeholder, value, ...rest} = props;

    return (
        <>
            <Label isRequired={isRequired}>{label}</Label>
            <Spacer value={10}/>
            <Input
                fullWidth={fullWidth}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                {...rest}
            />
            <Spacer value={4}/>
            <Error>{error}</Error>
            <Spacer value={4}/>
        </>
    );
};
export default TextInput;