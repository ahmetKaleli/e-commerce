import React from 'react'
import RoutesConfig from './config/RoutesConfig'
import Header from "./components/Header"
import PageContainer from "./container/PageContainer"
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, setDrawer } from './redux/slices/basketSlice'
export default function App() {

  const {products,drawer} = useSelector((store)=>store.basket)


  const dispatch = useDispatch()

  const removeProduct = (id)=>{
    dispatch(removeFromBasket({id}))
  }

  return (
    <div>
      <Loading/>  
      <Header />
      <PageContainer>
        <RoutesConfig/>
      </PageContainer>
      <Drawer open={drawer} anchor='right' onClose={()=> dispatch(setDrawer())}>
        {
          products && products.map((product)=>{
            console.log(product);
            
            return (
              <div key={product.id}>
                <div className='flex-row' style={{padding:"20px"}} key={product.id}>
                  <img style={{marginRight:"5px"}} src={product.image} width={50} height={50}/>
                  <p style={{width:"330px", narginRight:"5px"}}>{product.title}({product.count})</p>
                  <p style={{fontWeight:"bold", marginRight:"10px", width:"60px"}}>${product.price}</p>
                  <button onClick={() => removeProduct(product.id)}  style={{
                    backgroundColor:"rgb(185,76,76)",
                    color:"white",
                    padding:"5px",
                    borderRadius:"5px",
                    marginLeft:"10px",
                    width:"50px",
                    border:"none",
                    cursor:"pointer"
                  }}>Del</button>
                </div>
                
                
              </div>
              
            )
          })
        }
        <div>
          <h2>
            Total: ${products.reduce((acc, cur)=>acc + cur.price*cur.count, 0)}
          </h2>
        </div>
      </Drawer>
    </div>
  )
}
