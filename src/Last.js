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
  BackHandler,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native'; 
import Main from './Main';

class App extends React.Component{
  static navigationOptions = {header:null};

   componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    return true;
  }

  render(){

    const text= this.props.navigation.getParam('text','nothing sent')
    return(

      <View style={{flex:1,backgroundColor:'#F0C984'}}>
      <StatusBar backgroundColor='#F1AD53' barStyle="light-content"/>
      <View style={{alignItems:'center'}}>
      <Text style={styles.txt}>This is your symbol</Text>

      <Text style={styles.txt}>{text}</Text>

      
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Home')}>
      <Text  style={{alignSelf:"center", padding:5,fontSize:20,fontWeight:'bold'}}>HOME</Text>
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
