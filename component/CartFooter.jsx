import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useSelector, } from 'react-redux'
import { useStripe } from '@stripe/stripe-react-native';
const CartFooter = () => {
  const {initPaymentSheet,presentPaymentSheet} = useStripe()

const fetchPaymentSheetParams = async () => {
  const response = await fetch("http://192.168.1.71:4001/payment-sheet", {
    method: 'POST',
    body:JSON.stringify({ 
      amount:Math.floor(subtotal * 100),
     
     
  }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { paymentIntent, ephemeralKey, customer,publishableKey} = await response.json();
 

  

  return {
    paymentIntent,
    ephemeralKey,
    customer,
    publishableKey
  };
};

const initializePaymentSheet = async () => {
  const {
    paymentIntent,
    ephemeralKey,
    customer,
    publishableKey, 
  } = await fetchPaymentSheetParams();

  const { error } = await initPaymentSheet({
    merchantDisplayName: "Example, Inc.",
    customerId: customer,
    customerEphemeralKeySecret: ephemeralKey, 
    paymentIntentClientSecret: paymentIntent,
    // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
    //methods that complete payment after a delay, like SEPA Debit and Sofort.
    allowsDelayedPaymentMethods: false,
    defaultBillingDetails: { 
      name: 'Jane Doe',  
    }
  }); 
  if (!error) { 
     
  }
};
  
const openPaymentSheet = async () => {
  if(checked === false){
    Alert.alert('Oops',"you must agree with the terms and conditions");
    return
  }

  const { error } = await presentPaymentSheet();
  const idk = new Date()
  const date = idk.toString()
  
  if (error) { 
   
   // initializePaymentSheet();
   
  } else {
     clear()
    Alert.alert('Success', 'Your order is confirmed and ready for pickup!');

    return
    const request = await fetch("http://192.168.1.71:4000/complete",{
    method:"POST",
    body:JSON.stringify({
      order:cart,
      user_id:account._id,
      total_amount:subtotal,
      order_date:date

    }),
    headers:{
      "Content-Type":"application/json"
    }
  })
  dispatch(clearCart())
  }
};
const cart = useSelector(state => state.cart.cart)
let subtotal = 0

for(let i = 0; i < cart.length; i++){
    const {qty,price} = cart[i]
    subtotal += qty * price
}


  return (      
  <View>
    <View style={tw`  items-end justify-between flex-row`}>
      <Text style={tw`text-white p-4  font-bold`}>SubTotal </Text>
<Text style={tw`text-white font-bold p-4`}>${subtotal}.00</Text>

      </View>
      <TouchableOpacity  style={[tw` my-4 items-center justify-center py-4 rounded-sm`,{backgroundColor:"#0b3c5d"}]}>
    <Text style={tw`text-white font-bold`}>CHECKOUT</Text>
</TouchableOpacity>
    </View>
  )
}

export default CartFooter