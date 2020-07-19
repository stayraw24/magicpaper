/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */ 

import React from 'react';
import { 
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native'; 

class App extends React.Component{
  static navigationOptions = {header:null};
  render(){
    return(

      <View style={{flex:1,backgroundColor:'#F0C984'}}>
      <StatusBar backgroundColor='#F1AD53' barStyle="light-content"/>
      <View style={{alignItems:'center'}}>
      <Text style={styles.txt}>Info</Text>
      <Text style={styles.txt1}>Take any 2 digit number. Sum both the digits and subtract the sum from the original number. Now remember the obtained value.</Text>
      <Text style={styles.txt1}>Example: You take 27</Text>
      <Text style={styles.txt1}>Now Add 2+7=9</Text>
      <Text style={styles.txt1}>Then sub 9 from 27</Text>
      <Text style={styles.txt1}>27-9=18</Text>
      <Text style={styles.txt1}>Remember the obtained value</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Main')}>
      <Text style={{alignSelf:"center", padding:5,fontSize:20,fontWeight:'bold'}}>NEXT</Text>
      </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
 txt:{
        color:'black',
        padding:12,
        fontSize:25,
        fontWeight:'bold'
 },
  txt1:{
        color:'black',
        padding:12,
        fontSize:15,
        fontWeight:'bold'
 },
 btn:{margin:10,
     padding:10,
     backgroundColor:'cyan',
     borderRadius:10
 },
  
});

export default App;
