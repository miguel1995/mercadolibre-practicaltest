const axios = require('axios');
const { fetchItems, fetchItemById, fetchProductDescriptionById} = require('../src/services/itemService');

jest.mock('axios');

describe('Item Service', () => {

    it('should fetch all items', async () => {
        const items = [ { id: 1, name: 'Product A' }, { id: 2, name: 'Product B' } ];
        axios.get.mockResolvedValue({ data: items });

        const result = await fetchItems();
        expect(result).toEqual(items);
    });

    it('should fetch item by ID', async () => {
        const item = { id: 1, name: 'Product A' };
        axios.get.mockResolvedValue({ data: item });

        const result = await fetchItemById(1);
        expect(result).toEqual(item);
    });

    it('should items all products', async () => {
        const items = [ { id: 1, name: 'Product A' }, { id: 2, name: 'Product B' } ];
        axios.get.mockRejectedValue({  });

        const result = await fetchItems();
        expect(result).toEqual(items);
    });

    it('should catch an error item by ID', async () => {
        const item = { id: 1, name: 'Product A' };
        axios.get.mockRejectedValue({

        });

        const result = await fetchItemById(1);
        expect(result).toEqual(item);
    });


    it('should catch an error item by Description', async () => {
        const item = { id: 1, name: 'Product A' };
        axios.get.mockRejectedValue({

        });

        const result = await fetchProductDescriptionById(1);
        expect(result).toEqual(item);
    });
});
