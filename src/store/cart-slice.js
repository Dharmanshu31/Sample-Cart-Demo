import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const exsitingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!exsitingItem) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                exsitingItem.quantity++;
                exsitingItem.totalPrice = exsitingItem.totalPrice + newItem.price;
            }
        },
        removeItemToCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
            }
        }
    }
})
export const cartAction = cartSlice.actions;
export default cartSlice;