import React, {useState} from 'react';
import classes from './GoalsContainer.module.css';
import ListGoals from './../../../components/goals/list/ListGoals';
import Header from "@/../components/typography/Header";
import Sidebar from "@/../components/nav/Sidebar";
import useOpenWindow from "@/../hooks/useOpenWindow";
import IconAdd from "@/../components/goals/IconAddGoal";
import InputGoals from "@/../components/goals/CreateGoal";
import CreateGoal from "@/../components/goals/CreateGoal";
const GoalsContainer = () => {
    const {add, onOpenCloseWindow} = useOpenWindow();
    return (
        <div className={classes.root}>
            <Sidebar/>
            <div className={classes.content}>
                <div className={classes.head}>
                    <div className={classes.addGoal}>
                        {add ?
                            <div className={classes.IconAdd}>
                                <Header>Create your goals</Header>
                                <IconAdd width={100} onOpenCloseWindow={onOpenCloseWindow}/>
                            </div>
                            :
                            <CreateGoal add={true} onOpenCloseWindow={onOpenCloseWindow}/>}
                    </div>
                </div>
                <hr/>
                <ListGoals/>
            </div>
        </div>
    );
};

export default GoalsContainer;