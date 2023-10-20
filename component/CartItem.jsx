import { View, Text,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const CartItem = ({data}) => {



const {uri,name,size,qty,price} = data

  return (
    <View style={tw` border-b border-white pb-2 flex-row`}>
     <Image style={{width:100,height:100}} source={{uri:uri[0]}}/>
     <View style={tw`justify-between`}>
        <Text style={tw`text-white font-bold`}>{name}</Text>
<Text style={tw`text-white font-bold`}>Size:{size}</Text>
<Text style={tw`text-white`}>{qty}</Text>
     </View>
     <View style={tw`justify-between  flex-1 items-end px-4`}>
        <View>
            <Text></Text>
        </View>
        <Text style={tw`text-white`}>Total</Text>
<Text style={tw`text-white`}>${price * qty}.00</Text>
     </View>
    </View>
  )
}

export default CartItem