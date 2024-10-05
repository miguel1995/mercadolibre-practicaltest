import axios from 'axios';

const itemServices = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const getItemsBySearch = (word) => itemServices.get('/items',{params:{q:word}});
export const getItemById = (id) => itemServices.get(`/items/${id}`);

