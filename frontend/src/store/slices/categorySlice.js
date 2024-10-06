import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    categoryList: [],
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        onSaveCategories: (state, action)=>{
            state.categoryList = action.payload;
        }
    }

});

export const { onSaveCategories } = categorySlice.actions


export default categorySlice.reducer;

