import React from 'react'
import { useDispatch } from 'react-redux'
import { sortingForms } from '../../../sortingForms'
import {sortProduct} from "../../../redux/slices/productsSlice"

const ProductsHeader = () => {
    const dispatch = useDispatch();
    
    const checkSortedForm = (e) => {
        e.parentNode.childNodes.forEach(child => {
            child.style.textDecoration = "none"
        })
        e.style.textDecoration = "underline";
    }
    
  return (
    <div className='productsHeader'>
        <h1>Earrings</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul>
            <li className='sort'>SORT BY:</li>
            {sortingForms.map(((form, id) => {
                return <>
                    <li key={id} onClick={(e) => {
                            checkSortedForm(e.target)
                            dispatch(sortProduct(form.toLowerCase()))
                        }
                    }>{form}</li>
                </>
            }))}
        </ul>
    </div>
  )
}

export default ProductsHeader