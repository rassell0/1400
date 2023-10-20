import { View, Text, Image,TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { collection, addDoc , getDocs} from "firebase/firestore"; 
import { db } from '../firebaseConfig';
import {useDispatch,useSelector} from "react-redux"
import  {setAllProducts}  from '../redux/products';
import * as Notifications from "expo-notifications"
import ProductPreview from './ProductPreview';
import CartModal from './CartModal';


Notifications.setNotificationHandler({
  handleNotification:async ()=>{
    return{
      shouldPlaySound:true,
      shouldSetBadge:true,
      shouldShowAlert:true
    }
  }
})

const ALLTY5 = () => {
const modal = useSelector(state => state.cart.showModal)


  const dispatch = useDispatch()
const [products,setProducts] = useState([])

async function addProduct(){
try {
  const docRef = await addDoc(collection(db, "products"), {
    name: "TEARY EYES TEE RED",
    price: 35,
   details:["SLIGHTLY OVERSIZED", 
   "PREMIUM COTTON KNIT","SHIPS IN 4-6 WEEKS"],
   uri:[
    "https://1400club.com/cdn/shop/files/TEARY_EYES_TEE_RED_1296x.png?v=1691517554",
   
  ],
  catalog:"allty5"

  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
} 

async function getProducts(){

  const temp = []
  const allty = []
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
   temp.push(doc.data())
   
if(doc.data().catalog === "allty5"){
 allty.push(doc.data())
}
  });
 setProducts(allty)
 dispatch(setAllProducts(temp))
 

}


useEffect(()=>{
getProducts()
},[])

function notification(){
Notifications.scheduleNotificationAsync({
  content:{
    title:"NEW MERCH NEW DEALS",
    body:"save up to 50% with these app exculsive deals!"
  },
  trigger:{
    seconds:20
  }
})
}

const Btn = () =>{
  return <TouchableOpacity onPress={notification} style={tw`bg-white p-4 rounded-md`}>
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
}} 

columnWrapperStyle={tw`justify-around`} numColumns={2} renderItem={render}/>

    </View>
  )
}

export default ALLTY5