import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './reducers';

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export default store;