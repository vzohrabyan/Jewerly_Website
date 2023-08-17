import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../../../redux/slices/searchProductsSlice';
import {RxCross1} from "react-icons/rx"

const Search = () => {
    const [searchedValue, setSearchedValue] = useState("");
    const [searchModal, setSeacrhModal] = useState(false)
    const dispatch = useDispatch();
    const {searchProducts} = useSelector(state => state);
    console.log(searchProducts);
  return (
    <>
        <input 
        type="text"
        placeholder='Search'
        value={searchedValue}
        onChange={(e) => {
            setSearchedValue(e.target.value);
            if (e.target.value.trim()) {
                dispatch(searchProduct(e.target.value));
                setSeacrhModal(true);   
            } else {
                setSeacrhModal(false);
            }
        }}
        
        />
        {searchModal && <div className='searchModal'>
            <RxCross1 onClick={() => {
                setSeacrhModal(false);
                setSearchedValue("")
                }}/>
            {(searchProducts.length !== 0) ? (searchProducts.map(({image, productName, price}, id) => {
                return <div className='searchedProducts' key={id} >
                    <img src={image} alt="Earring Product" />
                    <div className="searchedProducts-info">
                        <h3>{productName}</h3>
                        <p>${price}</p>
                    </div>
                </div>
            })) : (
                <div className="searchedProducts">
                    <h2>Excuse me, but we do not have such a product</h2>
                </div>
            
            )}
        </div>}
    </>
    )
}

export default Search