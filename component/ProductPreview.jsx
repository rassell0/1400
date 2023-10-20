import { View, Text,Dimensions,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import ProductModal from './ProductModal'
const ProductPreview = ({item}) => {

    const {uri,name,price} = item
    const width = Dimensions.get("window").width * .45
   const [modal,setModal] = useState(false)
    //console.log(item)
    function toggleModal(){
        setModal(state => !state)
    }
  return (
    <TouchableOpacity onPress={toggleModal} style={tw`items-center mb-12`}>
{modal && <ProductModal item={item} toggleModal={toggleModal}/>}
      <Image source={{uri:uri[0]}} style={[tw`mb-8`,{width,height:width}]}/>
      <Text style={tw`text-white text-xs font-bold text-center mb-2`}>{name}</Text>
      <Text style={tw`text-white text-xs text-center`}>${price}.00</Text>
    </TouchableOpacity>
  )
}

export default ProductPreview