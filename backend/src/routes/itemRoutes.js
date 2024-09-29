// Definición de rutas

const express = require('express');
const { getItems, getItemsById } = require('../controllers/itemController');

const router = express.Router();

router.get('/items', getItems);
router.get('/items/:id', getItemsById);

module.exports = router;
