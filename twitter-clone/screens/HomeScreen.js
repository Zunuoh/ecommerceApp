import React, { useState, useContext } from 'react';
import {View, Text, Image, Button,} from 'react-native'
import {ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {CartContext} from '../App'
const productList = [{"id":0,"name":"iPhone 6S",
"description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
"imageUrl":require('../assets/images/iphone6.jpg'),
"price":799},{"id":1,"name":"iPhone 11",  
"description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
"imageUrl":require('../assets/images/iphone11.jpg'),
"price":349},{"id":2,"name":"iphone 8",
"description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
"imageUrl":require('../assets/images/iphone8.jpg'),
"price":1499},
{"id":3,"name":"Macbook Air",
"description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
"imageUrl":require('../assets/images/iphone8plus.jpg'),"price":999},
{"id":4,"name":"Macbook Air 2013",
"description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
"imageUrl":require('../assets/images/iphone11pro.jpg'),"price":599},
{"id":5,"name":"Macbook Air 2012",
"description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
"imageUrl":require('../assets/images/iphonex.jpg'),
"price":499}];

const HomeScreen =()=>{
  const[product, setProduct] = useState(productList);
  // const [cart, setupdateCart] = useState([]);
  // const[counterValue, setcounterValue]=useState([product]);
  const { cart, addProductToCart, removeProductFromCart } = useContext(CartContext);

  // function addProductToCart(product){
  //   console.log(product)
  //   const newProduct = {
  //     name:product.name,
  //     id:product.id,
  //     price:product.price,
  //     // quantity:product.quantity
  //   }
  //   const updatedCart =[newProduct, ...cart];
  //   setupdateCart(updatedCart)
  // }

  // function removeProductFromCart(product){
  //   console.log(product)
  //   let newCart = cart.filter((removeItem) => {
  //     return removeItem.id != product.id
  //   })
  //   setupdateCart(newCart);
  //  }

  return(
    <View style={{flex:1}}>
     <View style={{flexDirection:'row',justifyContent:"space-around", paddingVertical:20, marginHorizontal:10 }}>
        <View style={{flexDirection:'row',marginLeft:20}}>
        <FontAwesome 
        name="cart-plus"
        size={26}
        color="#800080"
        />
        <Text style={{fontSize:20,  marginRight:250, color:"#40617a"}}>Your Cart</Text>
        </View>
        <View style={{ flexDirection:"row",}}>
        
        <Text style={{fontSize:20, fontWeight:'400', textAlign:'center', color:"#40617a",marginRight:20}}>{cart.length}</Text>
      </View>
     </View>
      
         
    <ScrollView style={{flexDirection:'', backgroundColor:'#E6E6FA'}}>
     
      <Text style={{fontSize:20,marginTop:20, fontWeight:'400', textAlign:'center', color:"#40617a"}}>Shopping List</Text>
      <View style={{flexDirection:'row', flexWrap:'wrap', paddingLeft:5, marginTop:20}}>
      {product.map(products => {
        return(
          <View key={products.id} style={{marginTop:15, display:'flex', shadowColor:'#000',marginLeft:15, shadowOffset:{width:0, height:1}, shadowOpacity:0.1, borderRadius:10}} >
            <View style={{flexDirection:'column', flex:1, paddingTop:30}}>
              <View style={{ }}>
                <Image source={products.imageUrl} resizeMode="contain" style={{height:120, borderRadius:10, alignItems:"center"}} />
              </View>
               <View style={{flex:-5, flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
                 <Text style={{fontSize:15, fontWeight:'bold'}}> {products.name.slice(0,10)}...</Text>
                 <Text> GHS  {products.price}</Text>
               </View>
               <View style={{flexDirection:''}}>
                  <View style={{marginBottom:20, marginTop:20, borderRadius:5}}>
                      <View style={{backgroundColor:"#30AD88", borderRadius:5}}>
                          <Button color="#8A2BE2" disabled={!cart.find(cat => cat.id == products.id) ? false: true} title={!cart.find(cat => cat.id == products.id) ? "add to cart" : "Added"} onPress = {() => addProductToCart(products)} />
                      </View>
                      <View style={{backgroundColor:'#F77752', borderRadius:10 }}>
                           <Button color="#800080" disabled={cart.find(cat => cat.id == products.id) ? false: true} title=" remove from cart" onPress = {() => removeProductFromCart(products)} />
                      </View>    
                 </View> 
               </View>
              
            </View>
          </View>
        )
      })} 
      </View>
    </ScrollView>
    </View>
  );
}


export default HomeScreen;

//  <View>
//       <Text>{counterValue}</Text>
//         <Button title="+" onPress={()=>{setcounterValue(counterValue+1)}}></Button>
//         <Button title="-" onPress={()=>{setcounterValue(counterValue-1)}}></Button>
//         <Button title="reset" onPress={()=>{setcounterValue(counterValue)}}></Button>
//     </View>