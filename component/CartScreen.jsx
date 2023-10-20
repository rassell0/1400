import { View, Text ,Image,TouchableOpacity, FlatList,Pressable} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useDispatch,useSelector } from 'react-redux'
import { toggleModal } from '../redux/cart'
import {Ionicons} from "@expo/vector-icons"
import CartItem from './CartItem'
import CartFooter from './CartFooter'
const CartScreen = () => {
const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
function toggle(){

dispatch(toggleModal(false))
}


function render({item}){
  console.log(item)
  return <CartItem data={item}/>
}
 
  return (
    <View style={tw`flex-1  bg-black`}>
    
        
 <FlatList data={cart} ListHeaderComponent={()=>{
  return <View style={tw` my-20 items-center`}>
  <Image style={{width:100,height:100}} source={{uri:"https://1400club.com/cdn/shop/files/1400-Logo-White_300x300.png?v=1615319932"}}/>
 </View>
 }} ListFooterComponent={CartFooter} renderItem={render}/>
 <TouchableOpacity style={tw`absolute left-5 bottom-5`} onPress={toggle} >
            <Ionicons name='close'  color={"white"} size={40}/>
        </TouchableOpacity>
      </View>
  )
  
}

export default CartScreen