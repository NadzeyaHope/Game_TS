import React, {ReactNode} from 'react';
import classes from './Header.module.css';

type Props = {
    children : ReactNode,
}

const Header = (props: Props) => {
    const {children} = props;

    return (
        <h1 className={classes.root}>
            {children}
        </h1>
    );
};


export default Header;