import classes from './Input.module.css';
import clsx from 'clsx';
import {string} from "prop-types";

type Props = {
    fullWidth? : boolean,
    placeholder : string,
    onChange : any,
    value: string,
}
const Input = (props: Props) => {
    const { fullWidth = false, onChange, ...rest} = props;
    const onChangeOriginal = (e: any) => {
        onChange(e.target.value)
    }
    return (
        <input
            className={clsx(classes.root, fullWidth && classes.fullWidth)}
            onChange={onChangeOriginal}
            {...rest}
        />
    )
}


export default Input;