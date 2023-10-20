import { View, Text, Modal, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

import { useDispatch } from 'react-redux';
import { toggleModal } from '../redux/cart';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import CartScreen from './CartScreen';
const CartModal = () => {
  const dispatch = useDispatch()


const cart = useSelector(state => state.cart.cart)
console.log(cart)
  function toggle(){
  
    dispatch(toggleModal(false))
   
  }
  return (
    <Modal animationType='slide'>
     {cart.length === 0 ? <EmptyCart/>: <CartScreen/>}
      
    </Modal>
  )
}

export default CartModal