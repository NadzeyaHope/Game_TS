import React, {useState} from 'react';

const UseOpenWindow = () => {
    const [add, setAdd] = useState(true);
    const onOpenCloseWindow = () => {
        setAdd(!add)
    }
    return (
        {onOpenCloseWindow, add}
    );
};

export default UseOpenWindow;