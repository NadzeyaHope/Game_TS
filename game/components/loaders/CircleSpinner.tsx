import React from 'react';
import classes from './CircleSpinner.module.css';
import clsx from 'clsx';

type Props = {
    className? : string,
    color? : string,
    diameter? : number
}

const CircleSpinner = (props: Props) => {
    const {className = '', color = '#fff', diameter = 48 } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={diameter}
            height={diameter}
            viewBox={`0 0 48 48`}
            className={clsx(classes.root, className)}
            fill={color}
        >
            <circle cx="24" cy="4" r="4" fill="inherit"></circle>
            <circle cx="12.19" cy="7.86" r="3.7" fill="inherit"></circle>
            <circle cx="5.02" cy="17.68" r="3.4" fill="inherit"></circle>
            <circle cx="5.02" cy="30.32" r="3.1" fill="inherit"></circle>
            <circle cx="12.19" cy="40.14" r="2.8" fill="inherit"></circle>
            <circle cx="24" cy="44" r="2.5" fill="inherit"></circle>
            <circle cx="35.81" cy="40.14" r="2.2" fill="inherit"></circle>
            <circle cx="42.98" cy="30.32" r="1.9" fill="inherit"></circle>
            <circle cx="42.98" cy="17.68" r="1.6" fill="inherit"></circle>
            <circle cx="35.81" cy="7.86" r="1.3" fill="inherit"></circle>
        </svg>
    );
};

export default CircleSpinner;