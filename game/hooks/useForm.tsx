import {useState} from 'react';
import {validateValues} from '@/../lib/validation';

type ParamsProps = {
    validations: Record<string, any>,
    onSuccess: ()=>void,
    onValidate: ()=>{},
    initialValues: any,
    confirmPassword? : string

}
const useForm = (params: ParamsProps) => {
    const {validations, onSuccess, onValidate, initialValues, confirmPassword} = params;
    const [values, setValues] = useState(initialValues);
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');


    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (name: string) => (value: string) => {
        setValues({...values, [name]: value});
    }

    const onSubmit = async () => {
        if(confirmPassword){
            if(values.password !== confirmPassword){
                setErrorConfirmPassword('The password not equal confirmPassword');
                return;
            }
        }


        const validationErrors = validateValues(validations, values);

        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        setIsLoading(true);
        const response  = await onValidate();
        setIsLoading(false);
        setErrors({})
        if (typeof response === 'string') {
            setErrors({message: response});
            return;
        }
        setValues({})
        onSuccess()
    }


    return {
        values,
        errors,
        isLoading,
        onChange,
        onSubmit,
        errorConfirmPassword,
    };
}

export default useForm;