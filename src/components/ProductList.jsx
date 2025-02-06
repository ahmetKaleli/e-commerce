import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Product from './Product'
import "../App.css"

export default function ProductList() {

const { products } = useSelector((store)=> store.product)
  const dispatch = useDispatch()

  //console.log(products);
  

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <div className='flex-row' style={{flexWrap:"wrap", marginTop:"25px"}}>
        {
            products && products.map((product)=>
            (
                <Product key={product.id} product={product}/>
            )
            )
        }
    </div>
  )
}
