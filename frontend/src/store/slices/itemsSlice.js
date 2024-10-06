import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    itemsList: [],
    currentItem: {}

};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        onSaveItems: (state, action)=>{
            state.itemsList = action.payload;
            },
        onSaveCurrentItem: (state, action)=>{
            state.currentItem = action.payload;
            }
    }

});

export const { onSaveItems, onSaveCurrentItem } = itemsSlice.actions


export default itemsSlice.reducer;

