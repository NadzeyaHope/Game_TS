import React from 'react';
import Header from "../../../components/typography/Header";
import classes from './HomeContainer.module.css';
import Spacer from "../../../components/layout/Spacer";
import ButtonLink from "../../../components/form/ButtonLink";
import HomeOr from "@/sections/home/HomeOr";

const HomeContainer = () => {
    return (
        <div className={classes.root}>
            <Header>Reach your goals</Header>
            <Spacer value={100}/>
            <ButtonLink href={'/login'} fullWidth={true}>Login</ButtonLink>
            <Spacer value={10}/>
            <HomeOr/>
            <Spacer value={10}/>
            <ButtonLink href={'/register'} fullWidth>Register</ButtonLink>
        </div>
    );
};

export default HomeContainer;