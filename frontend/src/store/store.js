import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../store/slices/itemsSlice';
import categoriesReducer from '../store/slices/categorySlice';

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        categories: categoriesReducer
    },
});

export default store;
