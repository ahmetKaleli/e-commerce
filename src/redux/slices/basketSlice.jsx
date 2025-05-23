import {  createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage = () =>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"))
    }
    return []
}

const initialState ={
    products: getBasketFromStorage(),
    drawer: false,
}

const writeFromBasketToStorage = (basket)=>{
    localStorage.setItem("basket", JSON.stringify(basket))
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state,action)=>{
            const findProduct = state.products && state.products.find((product)=>product.id === action.payload.id)
            if(findProduct){
              const extractedProducts = state.products.filter((product)=>product.id !== action.payload.id)
              
              findProduct.count += action.payload.count 
              state.products=[...extractedProducts, findProduct]
              writeFromBasketToStorage(state.products)

            }else{
                state.products= [...state.products, action.payload]
                writeFromBasketToStorage(state.products)
            }
        },

        setDrawer:(state)=>{
            state.drawer =!state.drawer
        },

        removeFromBasket: (state,action)=>{
            const updatedProducts = state.products.filter((product)=> product.id !== action.payload.id)
            state.products = updatedProducts
            writeFromBasketToStorage(updatedProducts)
        }
    }
})

export const { addToBasket,setDrawer,removeFromBasket} = basketSlice.actions
export default basketSlice.reducer