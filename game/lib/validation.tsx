const emptyValues: any = ['', null, undefined];
export const isEmail = (email: string) => {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
}
export const isRequired = (value: string) => {
    return !emptyValues.includes(value)
}

export const validate = (items: any, name: string, value: string) => {
    for (const item of items) {
        const {validator, errorMessage} = item;
        if (!validator(value)) {
            return errorMessage;
        }
    }
    return true;
};

export const validateValues = (validations: Record<string, any>, values: Record<string, any>) => {
    const errors: Record<string, any> = {};
    for (const [name, value] of Object.entries(values)) {
        const items = validations[name];
        const result = validate(items, name, value);
        if (result !== true) {
            errors[name] = result
        }
    }
    return errors
}