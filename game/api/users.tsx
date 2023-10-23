import {post} from '@/../lib/http';

export const login = (values: any) => {
    return post('/api/users/login', values)
}
export const register = (values: any) => {
    return post('/api/users/register', values)
}