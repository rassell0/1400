import { View, Text,Modal,Dimensions,Image, ScrollView, TouchableOpacity ,TextInput,Alert} from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Ionicons} from "@expo/vector-icons"
import { addToCart } from '../redux/cart'
import tw from 'twrnc'


const ProductModal = ({item,toggleModal}) => {

    const {uri,name,price,details} = item
console.log(item)
const [img,setImg] = useState(0)
const [size,setSize] = useState("s")
const [qty,setQty] = useState(1)
    const height = Dimensions.get("window").height *.8
    const width = Dimensions.get("window").width

const sizes = ["s","m","lg","xl","2xl"]

const dispatch = useDispatch()
const sizeBtns = sizes.map((v,i)=>{
  function pickSize(){
    setSize(v)
  }

  return <TouchableOpacity key={i} onPress={pickSize} style={[tw`w-10 mr-2 h-10 border items-center justify-center`,
  {backgroundColor:size === v ? "white" : "black",borderColor:size === v ? "black" : "white"}  ]}>
  <Text style={[tw`text-gray-200 font-bold text-lg`,{color:size === v ? "black" : "white"}]}>{v}</Text>
</TouchableOpacity>
})
 const allDetails = details.map((v,i)=>{
    return <Text key={i} style={tw`text-white font-bold mb-2`}>{v}</Text>
  })

  function add2Cart(){
    Alert.alert('Wicked',"",  [
        {
          text: 'continue shopping',
       onPress:toggleModal
        },
        {
          text: 'checkout',
          onPress: () => console.log('Cancel Pressed'),
          
        },
       
      ]);
dispatch(addToCart({...item,qty,size }))
}

  return (
    <Modal animationType='fade'>
        <View style={[tw`bg-black flex-1 pt-20`,{}]}>
          <ScrollView>
          <TouchableOpacity onPress={toggleModal} >
            <Ionicons name='close'  color={"white"} size={40}/>
        </TouchableOpacity>
            <View style={tw` py-6 items-center`}>
  <Image style={{width:100,height:100}} source={{uri:"https://1400club.com/cdn/shop/files/1400-Logo-White_300x300.png?v=1615319932"}}/>
</View>
<Image style={{width,height:width}} source={{uri:uri[img]}}/>
<View style={tw`px-4`}>
    <Text style={tw`text-white text-xs font-bold mb-2`}>TRIPPIE REDD</Text>
    <Text style={tw`text-white text-2xl font-bold mb-2`}>{name}</Text>
    <Text style={tw`text-white text-2xl font-bold mb-2`}>${price}.00</Text>
   <View style={tw`flex-row justify-between`}>
    <View style={tw`flex-row`}>
      {sizeBtns}
    </View>
    <View style={tw`flex-row items-center`}>
<Text style={tw`text-white text-lg mr-2`}>QTY</Text>
<TextInput style={tw` p-2 rounded-md h-10 w-10 text-white border items-center justify-center border-white`} defaultValue='1'  inputMode="numeric" />
   </View>
   </View>
   <TouchableOpacity onPress={add2Cart} style={[tw`items-center py-4 my-4`,{backgroundColor:"#0b3c5d"}]}>
    <Text style={tw`text-white font-bold`}>ADD TO CART</Text>
   </TouchableOpacity>
{allDetails}
</View>

          </ScrollView>
        
        </View>
      
    </Modal>
  )
}

export default ProductModal