import React from 'react'
import logo from "../assets/logo.png"
import Badge from '@mui/material/Badge';
import { IoBasketOutline } from "react-icons/io5";
import '../css/Header.css'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const {products} = useSelector((store)=>store.basket)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className='header'>
      <div className='flex-row'>
        <img src= {logo} width={150} height={100}/>
        <h3>Ahmet Store</h3>
      </div>
      <div >
        <ul>
          <li onClick={()=>navigate("/")}>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='flex-row'>
        <input className='search' type="text" placeholder="Search..." />
        <Badge onClick={()=>dispatch(setDrawer())} badgeContent={products.length} color="error">
          <IoBasketOutline size={24} className='icon' />
        </Badge>
      </div>

      
    </div>
    
  )
}
