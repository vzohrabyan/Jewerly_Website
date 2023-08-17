import { createSlice } from "@reduxjs/toolkit";
/*Product's Images*/
import diamondStuds from "../../images/diamondStuds.svg"
import miniHoops from "../../images/miniHoops.svg"
import danglingLeaves from "../../images/danglingLeaves.svg"
import leafStuds from "../../images/leafStuds.svg"
import chainDrops from "../../images/chainDrops.svg"
import starBundleStuds from "../../images/starBundleStuds.svg"
import sphericalDrops from "../../images/sphericalDrops.svg"
import chainedStuds from "../../images/chainedStuds.svg"

const products = [
    {
        id: 0,
        productName: "DIAMOND STUDS",
        price: 200.00,
        popularity: 3,
        type: 5,
        gemstone: 1,
        image: diamondStuds
    },
    {
        id: 1,
        productName: "MINI HOOPS",
        price: 90.00,
        popularity: 4,
        type: 4,
        gemstone: 7,
        image: miniHoops
    },
    {
        id: 2,
        productName: "DANGLING LEAVES",
        price: 60.00,
        popularity: 2,
        type: 3,
        gemstone: 4,
        image: danglingLeaves
    },
    {
        id: 3,
        productName: "LEAF STUDS",
        price: 40.00,
        popularity: 7,
        type: 8,
        gemstone: 6,
        image: leafStuds
    },
    {
        id: 4,
        productName: "CHAIN DROPS",
        price: 40.00,
        popularity: 6,
        type: 6,
        gemstone: 8,
        image: chainDrops
    },
    {
        id: 5,
        productName: "STAR BUNDLE STUDS",
        price: 100.00,
        popularity: 1,
        type: 2,
        gemstone: 2,
        image: starBundleStuds
    },
    {
        id: 6,
        productName: "SPHERICAL DROPS",
        price: 150.00,
        popularity: 5,
        type: 1,
        gemstone: 3,
        image: sphericalDrops
    },
    {
        id: 7,
        productName: "CHAINED STUDS",
        price: 100.00,
        popularity: 8,
        type: 7,
        gemstone: 5,
        image: chainedStuds
    }
]

const initialState = [];

const searchProductsSlice = createSlice({
    name: "search-products",
    initialState,
    reducers: {
        searchProduct: (state, { payload }) => {
            return products.filter(product => {
                const trimmedProduct = product.productName.toLowerCase();
                return trimmedProduct.slice(0, (payload.trim().length)) === (payload.toLowerCase().trim());
            });
        }
    }
});

export const {searchProduct} = searchProductsSlice.actions;

export default searchProductsSlice.reducer