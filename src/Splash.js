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
  componentWillMount() {
            setTimeout(() => {
                this.props.navigation.navigate('Home')
            }, 2500);
        }
  render(){
    return(

      <View style={{flex:1,backgroundColor:'#F0C984'}}>
      <StatusBar backgroundColor='#F1AD53' barStyle="light-content"/>
      <View style={{alignItems:'center', padding:80}}>
      
      <Image source={require('../img/splash.jpg')} style = {{ width:200, height: 200 }}/>
      <Text style={styles.txt}>Magic Paper</Text>
      </View>
      
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
  
});

export default App;
