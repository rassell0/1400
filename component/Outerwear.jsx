import { View, Text, Image,TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { collection, addDoc , getDocs} from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import {useDispatch,useSelector} from "react-redux"
import ProductPreview from './ProductPreview';
import CartModal from './CartModal';
const Outerwear = () => {
    const modal = useSelector(state => state.cart.showModal)

const allProducts = useSelector(state => state.products.products)
    const dispatch = useDispatch()
  const [products,setProducts] = useState([])
  
  async function addProduct(){
  try {
    const docRef = await addDoc(collection(db, "products"), {
      name: "MISS THE RAGE HOODIE",
      price: 75,
     details:["80/20 COTTON/POLYESTER BLEND",
     "MID-WEIGHT PRESHRUNK",
     "PUFF PRINT GRAPHIC ON THE FRONT",
     "AVAILABLE IN BLACK",
     "SHIPS IN 4-6 WEEKS"],
     uri:[
      "https://1400club.com/cdn/shop/products/IMG_8641-new_1296x.png?v=1626409870",
      "https://1400club.com/cdn/shop/products/IMG_8642_grande.png?v=1626409870"
     
    ],
    catalog:"outerwear"
  
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  } 
  
  async function getProducts(){
  
    const outerwearCollection = []

    for(let i = 0; i < allProducts.length; i++){
        
      if(allProducts[i].name.includes("HOODIE")){
       
outerwearCollection.push(allProducts[i])
      }
    }  
     setProducts(outerwearCollection)
  
  }
  
  
  useEffect(()=>{
  getProducts()
  },[])
  
  const Btn = () =>{
    return <TouchableOpacity onPress={addProduct} style={tw`bg-white p-4 rounded-md`}>
    <Text>add product</Text>
  </TouchableOpacity>
  }
  
  
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
  }} columnWrapperStyle={tw`justify-around`} numColumns={2} renderItem={render}/>
  
      </View>
    )
}

export default Outerwear