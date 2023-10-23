import React, { ReactNode } from 'react';
import classes from './Label.module.css';

type Props = {
    children : ReactNode,
    isRequired?: boolean,
}

const Label = (props: Props) => {
    const {children, isRequired = false} = props;
    return (
        <div className={classes.root}>{children}{isRequired && '*'}</div>
    );
};

export default Label;