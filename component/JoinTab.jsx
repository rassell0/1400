import { View, Text,Image, TextInput, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
const JoinTab = ({navigation}) => {


const [userInput,setUserInput] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
})


function updateFirstName(value){
    setUserInput(state =>{
        return {
            ...state,
            firstName:value
        }
    })
}
function updateLastName(value){
    setUserInput(state =>{
        return {
            ...state,
            lastName:value
        }
    })
}
function updateEmail(value){
    setUserInput(state =>{
        return {
            ...state,
            email:value
        }
    })
}
function updatePassword(value){
    setUserInput(state =>{
        return {
            ...state,
            password:value
        }
    })
}

function createAccount(){
   
        Alert.alert('Awesome',"",  [
           
            {
              text: 'start shopping',
              onPress: () => navigation.navigate("allty"),
              
            },
           
          ]);
        }


  return (
    <View style={tw`flex-1 bg-black`}>
      <View style={tw` py-6 items-center`}>
  <Image style={{width:100,height:100}} source={{uri:"https://1400club.com/cdn/shop/files/1400-Logo-White_300x300.png?v=1615319932"}}/>
</View>
<View style={tw`px-2`}>
<TextInput style={tw`bg-white p-2 rounded-md text-lg my-2`} onChangeText={updateFirstName} placeholder='FIRST NAME'/>
<TextInput style={tw`bg-white p-2 rounded-md text-lg my-2`} onChangeText={updateLastName} placeholder='LAST NAME'/>
<TextInput style={tw`bg-white p-2 rounded-md text-lg my-2`} onChangeText={updateEmail} placeholder='EMAIL'/>
<TextInput style={tw`bg-white p-2 rounded-md text-lg my-2`} secureTextEntry={true} onChangeText={updatePassword} placeholder='PASSWORD'/>

<TouchableOpacity onPress={createAccount} style={[tw`w-20 my-4 items-center justify-center py-4 rounded-sm`,{backgroundColor:"#0b3c5d"}]}>
    <Text style={tw`text-white font-bold`}>CREATE</Text>
</TouchableOpacity>
<Text style={[tw`font-bold`,{color:"#0b3c5d"}]}>RETURN TO STORE</Text>
</View>

    </View>
  )
}

export default JoinTab