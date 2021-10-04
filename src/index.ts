import axios from 'axios';

const BASE_URL: string = 'https://dog.ceo/api/breeds/image/random'


export const getResponseofUrl: any= () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
}

console.log(getResponseofUrl());

 