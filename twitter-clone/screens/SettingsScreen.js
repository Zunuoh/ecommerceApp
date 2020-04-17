import React, {useContext} from 'react';
import {View, Text, Image, Button} from 'react-native';
import { CartContext } from '../App'
import { ScrollView } from 'react-native-gesture-handler';

const SettingsScreen = () => {
  const { cart, addProductToCart, removeProductFromCart } = useContext(CartContext)
 
  return(
    <ScrollView>
    <View>
    {cart.length > 0 ? cart.map(products => {
      return(
        <View key={products.id} style={{marginTop:15, display:'flex', shadowColor:'#000',marginLeft:15, shadowOffset:{width:0, height:1}, shadowOpacity:0.1, borderRadius:10}} >
            <View style={{flexDirection:'column', flex:1, paddingTop:30, height: 80, width: 350}}>
              <View style={{ }}>
                <Image source={products.imageUrl} resizeMode="contain" style={{height:120, borderRadius:10, alignItems:"center"}} />
              </View>
               <View style={{flex:-5, justifyContent:'space-evenly', marginTop:20}}>
                 <Text style={{fontSize:15, fontWeight:'bold', marginTop:20 }}> {products.name.slice(0,10)}...</Text>
                 <Text style={{marginTop: 5}}> GHS  {products.price}</Text>
                 <Text style={{marginTop: 5}}>{products.description}</Text>
               </View>
               <View style={{flexDirection:''}}>
                  <View style={{marginBottom:20, marginTop:20, borderRadius:5}}>
                      <View style={{backgroundColor:'#F77752', borderRadius:10 }}>
                           <Button color="#800080"  title=" remove from cart" onPress = {() => removeProductFromCart(products)} />
                      </View>    
                 </View> 
               </View>
              
            </View>
          </View>
      )
    }) : (
      <View style={{justifyContent:'center',alignItems:'center', marginTop:250,  }}>
        <Text style={{fontWeight:'400', fontSize:30, color:"blue"}}>NOTHING IN HERE</Text>
      </View>
    )} 
   
  
    </View>
    </ScrollView>
  );
};

export default SettingsScreen;