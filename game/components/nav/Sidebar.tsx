import React, {ReactNode, useEffect, useState} from 'react';
import Link from "next/link";
import classes from './Sidebar.module.css';
import IconLeftMenu from "@/../components/nav/icons/LeftNav";
import GoalsIcon from "@/../components/nav/icons/GoalsIcon";
import SettingsIcon from "@/../components/nav/icons/SettingsIcon";
import AboutUsIcon from "@/../components/nav/icons/AboutIcon";

type List = [
    {
        name: string,
        path: string,
        icon: ReactNode
    },
    {
        name: string,
        path: string,
        icon: ReactNode
    },
    {
        name: string,
        path: string,
        icon: ReactNode
    },
]

const list: List = [
    {
        name: 'Goals',
        path : '/dashboard/goals',
        icon: <GoalsIcon />
    },
    {
        name: 'Done',
        path : '/dashboard/done',
        icon: <AboutUsIcon/>
    },
    {
        name : 'Settings',
        path : '/dashboard/settings',
        icon: <SettingsIcon/>
    }
]

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [children, setChildren] = useState('');

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={classes.root}>
            <div style={{width: isOpen ? '250px' : '60px'}} className={classes.container}>
                <div onClick={toggle} className={classes.top_section}>
                    <div><IconLeftMenu/></div>
                    <div>Logo</div>
                </div>
                {list.map((el)=>{
                    return (
                        <div>
                            <Link className={classes.elements} href={el.path}>
                                <div className={classes.logo}>{el.icon}</div>
                                <div className={classes.list}>{el.name}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Sidebar;