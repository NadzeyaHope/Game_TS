import React from 'react';
import Sidebar from "@/../components/nav/Sidebar";
import classes from './DoneContainer.module.css';


const DoneContainer = () => {
    return (
        <div className={classes.root}>
            <Sidebar/>
            <div>done goals</div>
        </div>
    );
};

export default DoneContainer;