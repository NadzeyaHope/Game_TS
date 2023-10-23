import React from 'react';


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
        <div onMouseLeave={onOpenWin}>
            <div onClick={(event)=>{onDelete(event, el)}}>
                delete
            </div>
            <div>revive</div>
        </div>
    );
};

export default Refactor;