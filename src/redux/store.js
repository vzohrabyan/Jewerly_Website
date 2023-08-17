import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./slices/productsSlice"
import searchProductsReducer from "./slices/searchProductsSlice"

const store = configureStore({
    reducer: {
        products: productsReducer,
        searchProducts: searchProductsReducer
    }
})

export default store 