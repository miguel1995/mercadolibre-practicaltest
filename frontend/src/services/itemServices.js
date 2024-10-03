import axios from 'axios';

const itemServices = axios.create({
    baseURL: 'https://api.ejemplo.com',
});

export const getItemsBySearch = (word) => itemServices.get('/items',{params:{search:word}});
export const getItemById = (id) => itemServices.get('/data');

