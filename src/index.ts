import axios, { AxiosResponse } from 'axios';

const BASE_URL: string = 'https://dog.ceo/api/breeds/image/random'


export const getResponseofUrl: any = (url: string) => {
    return axios.get(url)
    .then((response) => {
        console.log(response.status)
        return response.status
    })
    .catch(({ response }) => {
        throw new Error(response.status)
    })
}

// console.log(getResponseofUrl(BASE_URL));

 