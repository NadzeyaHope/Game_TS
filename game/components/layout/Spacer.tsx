import React from 'react';

type Props = {
    value : number
}
const Spacer = (props: Props) => {
    const {value} = props;

    return (
        <div style={{marginTop: value}} />
    );
};


export default Spacer;