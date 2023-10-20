import { View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import {useSelector} from "react-redux"
import ProductPreview from './ProductPreview';
import CartModal from './CartModal';


const Bottoms = () => {
const modal = useSelector(state => state.cart.showModal)

const allProducts = useSelector(state => state.products.products)
 
const [products,setProducts] = useState([])

function getProducts(){
  
    const outerwearCollection = []

    for(let i = 0; i < allProducts.length; i++){
        
      if(allProducts[i].catalog === "bottoms"){
       
outerwearCollection.push(allProducts[i])
      }
    }  
     setProducts(outerwearCollection)
  
  }



useEffect(()=>{
getProducts()
},[])





function render({item}){
return <ProductPreview item={item}/>
}


  return (
    <View style={tw`flex-1 bg-black`}>
      
      {modal && <CartModal/>}


<FlatList data={products} ListHeaderComponent={()=>{
  return <View style={tw` py-6 items-center`}>
  <Image style={{width:100,height:100}} source={{uri:"https://1400club.com/cdn/shop/files/1400-Logo-White_300x300.png?v=1615319932"}}/>
</View>
}} 

columnWrapperStyle={tw`justify-around`} numColumns={2} renderItem={render}/>

    </View>
  )
}

export default Bottoms