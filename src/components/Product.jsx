import React from 'react'
import "../css/Product.css"
import { useNavigate } from 'react-router-dom'
export default function Product({product}) {

  const {id, title, description, price, image} = product

  const navigate = useNavigate()


  return (
    <div className='cards'>
        <img  src={image} width={100} height={125}/>
        <div>
            <h2 style={{height:"90px"}} >{product.title.length > 10 ? product.title.slice(0, 55) + "..." : product.title}</h2>
            <p style={{fontWeight:"bold"}}> ${price}</p>
        </div>
        <div>
            <button onClick={()=>navigate("/product-detail/"+id)} className='dtl-btn'> Detail</button>
        </div>
    </div>
  )
}
