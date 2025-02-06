import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {setSelectedProduct} from "../redux/slices/productSlice"
import { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css"
import "../css/Product.css"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice'

export default function ProductDetail() {

    const {products, selectedProduct} = useSelector((store) => store.product)
    const dispatch = useDispatch()
    const {id} = useParams()

    const {title, description, image, price} = selectedProduct
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     productById()
    // }, [id] )

    // const productById = () =>{
    //     products && products.map((product) =>{
    //         if(product.id === id){
    //             dispatch(setSelectedProduct(product))
    //         }
    //     })
    // }

    useEffect(()=>{
        if(products.lenght > 0){
            const product = products.find((pr)=> pr.id == id)
            if(product) dispatch(setSelectedProduct(product ))
        }else{
            axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => dispatch(setSelectedProduct(res.data)))
            .catch(err => console.log(err))
           
        }
    },[id, dispatch, products])

    const plus  = () =>{
        setCount(count + 1)
    }

    const minus = () =>{
        if(count > 0) setCount(count - 1)
    }

    const addBasket = ()=>{
        if(count === 0){
            alert("count can not be 0 ")
            return null
        }else{
            const payload={
                id,
                title,
                price,
                count,
                image,
                
            }
            dispatch(addToBasket(payload))
        }
    

    }

  return (
    <div className='flex-row' style={{marginTop:"25px"}}>
        <img src={image} alt={title} width={350} height={300} />
        <div className='flex-column' style={{textAlign:"center"}}>
            <h1>{title}</h1>
            <p style={{fontSize:"20px"}}>{description}</p>
            <p style={{fontSize:"20px"}}> ${price}</p>

            <div style={{display:"flex", alignItems:"center"}}>
                <CiCircleMinus onClick={minus} style={{fontSize:"40px", marginRight:"15px"}}/> 
                <span style={{fontSize:"35px"}}>{count}</span> 
                <CiCirclePlus onClick={plus} style={{fontSize:"40px", marginLeft:"15px"}}/>
            </div>

            <div>
                <button onClick={addBasket} className='btn-basket'>Add to Basket</button>
            </div>
            
            
        </div>

    </div>
  )
}
