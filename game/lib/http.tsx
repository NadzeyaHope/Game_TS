import {ReactNode} from "react";

const objectQuery = (obj: object) => {
    const entries = Object.entries(obj);
    if(entries.length === 0){
        return '';
    }
    return '?' + entries.map(([key, value])=> `${key}=${value}`).join('&');
}
type RequestProps = {
    url : string,
    method: string,
    body? : object
}
const request = async (props: RequestProps) => {
    const {url, method, body} = props;
    const response = await fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined
    })
    return response.json();
}
export const post = (url: string, date: object) => {
    return request({url, method : 'POST', body : date})
}
export const get = (path: string, date: object) => {
    return request({url : `${path}${objectQuery(date)}`, method : 'GET'})

}