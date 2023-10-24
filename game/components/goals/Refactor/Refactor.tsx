import React from 'react';
import classes from './Refactor.module.css';


type Props = {
    onOpenWin : () => void,
    el: Record<string, any>,
    refresh: ()=>void
}

const Refactor = (props: Props) => {
    const {onOpenWin, el, refresh} = props

    const onDelete = async (event: any, el: any) => {
        const id = el._id;
        const response = await fetch('/api/goals/delete', {
            method: 'POST',
            body: JSON.stringify(id)
        })
        refresh()
    }

    return (
        <div className={classes.root} onMouseLeave={onOpenWin}>
            <div className={classes.delete} onClick={(event)=>{onDelete(event, el)}}>
                delete
            </div>
            <hr/>
            <div className={classes.revive}>revive</div>
        </div>
    );
};

export default Refactor;