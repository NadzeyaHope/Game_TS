import React, {ReactNode} from 'react';
import clsx from 'clsx';
import classes from './ButtonLink.module.css';
import Link from "next/link";

type Props = {
    children : ReactNode,
    href : string,
    fullWidth : boolean
}
const ButtonLink = (props: Props) => {
    const {children, href, fullWidth = false} = props;
    return (
        <Link href={href}
            className={clsx(classes.root, fullWidth && classes.fullWidth)}
        >
            {children}
        </Link>
    );
};


export default ButtonLink;