import React, {useState} from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';


const FunctionComponent = () => {
  const [active, setActive] = useState("me");
  const [number, setNumber] = useState(0);
  return(
    <View style={{justifyContent:'space-between', alignItems:"center", justifyContent:"center"}}>
       <Text style={{fontSize:20}}>{number}</Text>
       <Button title="Add" onPress={()=> (setActive ? 'Michael' : 'Me')}>
         {""}
       </Button>
       <View style={{marginTop:10}}>
         <Button title="sub"></Button>
       </View>
    </View>
  );
};

export default FunctionComponent;
  
LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
