import React from 'react';
import classes from './LoginContainer.module.css';
import Button from './../../../components/form/Button';
import Spacer from '@/../components/layout/Spacer';
import Header from '@/../components/typography/Header';
import TextInput from '@/../components/form/TextInput';
import Error from '@/../components/form/Error';
import {useRouter} from 'next/router';
import CircleSpinner from '@/../components/loaders/CircleSpinner';
import {isEmail, isRequired} from '@/../lib/validation';
import useForm from '@/../hooks/useForm';
import api from '@/../api';

const validations = {
    email: [
        {validator: isRequired, errorMessage: 'Please enter email'},
        {validator: isEmail, errorMessage: 'Please enter correct Email'},
    ],
    password: [
        {validator: isRequired, errorMessage: 'Please enter Password'},
    ],
}

const LoginContainer = () => {

    const router = useRouter();

    const onValidate = () => {
        return api.users.login(values);
    }

    const onSuccess = () => {
        return router.push('/dashboard/goals');
    }

    type Return = {
        values : Record<string, any>,
        errors : Record<string, any>,
        isLoading : boolean,
        onChange : any,
        onSubmit : () => {},
        errorConfirmPassword? : string,
    }

    const {
        onChange,
        onSubmit,
        isLoading,
        errors,
        values
    } : Return = useForm({
        validations, onValidate, onSuccess, initialValues: {
            email: '',
            password: '',
        }
    });


    return (
        <div className={classes.root}>
            <Header>Login</Header>
            <Spacer value={40}/>
            <TextInput
                error={errors.email}
                fullWidth
                onChange={onChange('email')}
                value={values.email}
                placeholder={'Enter Email'}
                label={'Email'}
                isRequired
            />
            <TextInput
                error={errors.password}
                onChange={onChange('password')}
                value={values.password}
                placeholder={'Enter password'}
                label={'Password'}
                // type={'password'}
                isRequired
                fullWidth
            />
            <Button onClick={onSubmit} fullWidth>
                {isLoading ? (<CircleSpinner diameter={32}/>) : 'Login'}
            </Button>
            <Error>{errors.message}</Error>
        </div>
    );
};

export default LoginContainer;