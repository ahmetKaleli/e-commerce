import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct :{},
    loading: false,
    
}

const URL = "https://fakestoreapi.com"

export const getAllProducts = createAsyncThunk("products", async ()=>{
  try {
    const res = await axios.get(`${URL}/products`)
    return res.data
  } catch (error) {
    console.log(error);
    
  }
})



const productSlice = createSlice ({
    name : 'product',
    initialState,
    reducers :{
      setSelectedProduct : ((state , action)=>{
        state.selectedProduct = action.payload
      })

    },
    extraReducers : (builder) => {
      builder.addCase(getAllProducts.pending, (state)=>{
        state.loading = true
      })


        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.loading = false
            state.products = action.payload
        })
    }
})

export const {setSelectedProduct } = productSlice.actions
export default productSlice.reducer