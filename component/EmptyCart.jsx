import { View, Text,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import { useDispatch } from 'react-redux'
import { toggleModal } from '../redux/cart'
import tw from 'twrnc'
const EmptyCart = () => {
const dispatch = useDispatch()
function toggle(){
dispatch(toggleModal(false))
}

  return (
    <View style={tw`flex-1  bg-black`}>
      <TouchableOpacity style={tw`absolute left-5 bottom-5`} onPress={toggle} >
            <Ionicons name='close'  color={"white"} size={40}/>
        </TouchableOpacity>
        <View style={tw` mt-20 items-center`}>
  <Image style={{width:100,height:100}} source={{uri:"https://1400club.com/cdn/shop/files/1400-Logo-White_300x300.png?v=1615319932"}}/>

  <View style={tw` mt-40 bg-black items-center  `}>
        
        <Text style={tw`text-white font-bold text-2xl`}>CART</Text>
        <Text style={tw`text-white my-5`}>Your cart is currently empty</Text>

                </View>
</View>

      </View>
  )
}

export default EmptyCart