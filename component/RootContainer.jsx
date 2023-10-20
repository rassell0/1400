import { View, Text, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import tw from 'twrnc'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Allty5 from "./Allty"
import {Ionicons} from "@expo/vector-icons"
import { useDispatch,useSelector } from 'react-redux';
import { toggleModal } from '../redux/cart';
import Outerwear from './Outerwear';

const RootContainer = () => {

const dispatch = useDispatch()
const modal = useSelector(state => state.cart.showModal)
const cart = useSelector(state => state.cart.cart.length)
console.log(cart)
function toggle(){
  
  dispatch(toggleModal(true))
 
}




const Drawer = createDrawerNavigator()
  return (
    <View style={tw`flex-1`}>
       
            <NavigationContainer>
<Drawer.Navigator screenOptions={{
    headerTitle:"ALLTY5 OUT NOW",
    headerTintColor:"white",
    headerRight:(props)=>{
return<TouchableOpacity style={tw`mr-2`} onPress={toggle}>
  <Ionicons name='cart-outline' color={"white"} size={30}/>
  {cart > 1 &&<View style={tw`absolute bg-red-500 h-5 w-5 rounded-full left-4 justify-center items-center bottom-6.5`}>
<Text style={tw`text-white`}>{cart}</Text>
  </View>}
  </TouchableOpacity> 
    },
    headerStyle:{
    backgroundColor:"black",
    },
    drawerStyle:{
      backgroundColor:"black"
    },
    drawerActiveTintColor:"white",
  drawerInactiveTintColor:"white",
  drawerLabelStyle:{fontWeight:"700"},
}}>
<Drawer.Screen name='allty' options={{
  drawerLabel:"ALLTY"
}} component={Allty5}/>
    <Drawer.Screen name='outerwear' options={{
  drawerLabel:"OUTERWEAR"
}} component={Outerwear}/>
   

  
</Drawer.Navigator>
      </NavigationContainer>
      
      
    </View>
  )
}

export default RootContainer