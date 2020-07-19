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
      <Text style={styles.txt}>About</Text>
      
      <Text style={styles.txt1}>The Magic Paper possesses magic powers - it can read your thoughts! First of all let yourself be amazed, and then bamboozle all your friends. Magic Paper knows what symbol you are thinking of and makes it appear miraculously.</Text>
      <Text style={styles.txt1}>Developer - himanshu.maurya24@gmail.com</Text>


      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Home')}>
      <Text  style={{alignSelf:"center", padding:5,fontSize:20,fontWeight:'bold'}}>BACK</Text>
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
