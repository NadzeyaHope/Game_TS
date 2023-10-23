import {get, post} from '../lib/http';

export const createGoal = async (values: any) => {
    return await post('/api/goals/create' , values)
}
export const findList = async (values: any) => {
    return await get('/api/goals/list', values)
}