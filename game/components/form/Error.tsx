import React, {ReactNode} from 'react';
import classes from './Error.module.css';

type Props = {
    children : ReactNode
}
const Error = (props: Props) => {
    const {children} = props;
    return (
        <div className={classes.root}>
            {children}
        </div>
    );
};

export default Error;