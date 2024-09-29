const request = require('supertest');
const express = require('express');
const itemRoutes = require('../src/routes/itemRoutes');
const { fetchItems, fetchItemById } = require('../src/services/itemService');

jest.mock('../src/services/itemService');

const app = express();
app.use(express.json());
app.use('/items', itemRoutes);

describe('Item Controller', () => {

    it('should return all Items', async () => {
        const items = [{ id: 1, name: 'item A' }];
        fetchItems.mockResolvedValue(items);

        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(items);
    });

    it('should return Item by ID', async () => {
        const item = { id: 1, name: 'item A' };
        fetchItemById.mockResolvedValue(item);

        const res = await request(app).get('/items/1');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(item);
    });

    it('should return 404 if item not found', async () => {
        fetchItemById().mockResolvedValue(null);

        const res = await request(app).get('/items/999');
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe('Item not found');
    });
});
