import React, {ReactNode} from 'react';
import classes from './Button.module.css';
import clsx from 'clsx';

// https://www.figma.com/file/ZgXpvtrH3QgKbb9tY825nz/Grocery-E-Commerce-Website-Template-(Community)?type=design&node-id=8-2343&mode=design&t=ShybUHpM4nRtwsLs-0
type Props = {
    children : ReactNode,
    onClick: ()=>{},
    fullWidth? : boolean,
}

const Button = (props: Props) => {
    const {children, onClick, fullWidth = false} = props;
    return (
        <button onClick={onClick} className={clsx(classes.root, fullWidth && classes.fullWidth)}>
            {children}
        </button>
    );
};

export default Button;