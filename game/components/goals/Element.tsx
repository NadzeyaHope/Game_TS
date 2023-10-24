import React, {useEffect, useState} from 'react';
import classes from './Element.module.css';
import Refactor from "./Refactor/Refactor";
import useOpenWindow from "../../hooks/useOpenWindow";
import DeleteIcon from "./icons/DeleteIcon";


const Element = () => {
    const [list, setList] = useState([]);
    const {add, onOpenCloseWindow} = useOpenWindow();
    const [open, setOpen ] = useState(false);
    const onOpenWin = () => {
        setOpen(!open)
    }
    const refresh = async () => {
        const response = await fetch('/api/goals/list');
        const json = await response.json();
        setList(json);
    }
    useEffect(()=>{
        refresh();
    }, [])
    const onDelete = async (event: any, el: any) => {
        const id = el._id;
        const response = await fetch('/api/goals/delete', {
            method: 'POST',
            body: JSON.stringify(id)
        })

    }

    return (
        <div className={classes.root}>
            <div className={classes.elements}>
                {list.map((el: Record<string, any>, num: number) =>
                        <div className={classes.element}>
                            <div className={classes.refactor}>
                                {open ?
                                    <div ><Refactor refresh={refresh} el={el} onOpenWin={onOpenWin} /></div>
                                    : <div><DeleteIcon onOpenWin={onOpenWin} width={20}/></div>}
                            </div>
                                <div className={classes.number}>
                                    {num+=1}
                                </div>
                            <div className={classes.title}>{el.title}</div>
                            <div className={classes.description}>{el.description}</div>
                        </div>
                )}
            </div>
        </div>
    );
};
export default Element;