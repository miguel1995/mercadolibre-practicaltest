// Lógica del endpoint

const { fetchItems, fetchItemById, fetchProductDescriptionById } = require('../services/itemService');
const { AUTHOR_SIGNATURE} = require("../utils/constants");
const {buildItems, buildDetailItem, getCategoryList} = require("../utils/builderUtils");




const getItems = async (req, res) => {
    const searchQuery = req.query.q;
    try {

        const serviceResult = await fetchItems(searchQuery);


        const itemList = buildItems(serviceResult["results"]);
        const categoryList = getCategoryList(serviceResult["available_filters"]);
        const result = {
            author: AUTHOR_SIGNATURE,
            categories: categoryList,
            items:itemList
        }

        res.status(200).json(result);


    } catch (error) {
        res.status(500).json({ message: 'Error fetching items' });
    }
};

const getItemsById = async (req, res) => {
    const itemId = req.params.id;
    try {

        const serviceResult = await fetchItemById(itemId);
        if (serviceResult) {

            const newItem = buildDetailItem(serviceResult);
            const serviceDescriptionResult = await fetchProductDescriptionById(itemId);

            newItem["sold_quantity"] = 234;
            newItem["description"] = serviceDescriptionResult["plain_text"]??"";

            const result = {
                author: AUTHOR_SIGNATURE,
                item: newItem
            }

            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }


    } catch (error) {
        res.status(500).json({ message: 'Error fetching items' });
    }
};


module.exports = { getItems, getItemsById };
