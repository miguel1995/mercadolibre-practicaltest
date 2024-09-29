// Lógica para consumir el API externo

const axios = require('axios');
const {URL_BASE} = require("../utils/constants");

const fetchItems = async (searchQuery) => {

    try {

        const url = `${URL_BASE}/sites/MLA/search?q=${encodeURIComponent(searchQuery)}`


        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching items from external API');
    }
};

const fetchItemById = async (itemId) => {
    try {
        const url = `${URL_BASE}/items/${itemId}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Item by ID from external API');
    }
};

const fetchProductDescriptionById = async (itemId) => {
    try {
        const url = `${URL_BASE}/items/${itemId}/description`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Item by ID from external API');
    }
};

module.exports = { fetchItems, fetchItemById, fetchProductDescriptionById };
