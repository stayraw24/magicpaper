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
                this.props.navigation.navigate('Splash')
            }, 100);
        }
  render(){
    return(

      <View style={{flex:1,backgroundColor:'#F0C984'}}>
      <StatusBar backgroundColor='#F1AD53' barStyle="light-content"/>
      <View style={{alignItems:'center'}}>
      <Text style={styles.txt}>Magic Paper</Text>
      <Image source={require('../img/home.gif')} style = {{ width:'80%', height: 200 }}/>
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Info')}>
      <Text style={{alignSelf:"center", padding:5,fontSize:20,fontWeight:'bold'}}>START</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('About')}>
      <Text style={{alignSelf:"center", padding:5,fontSize:20,fontWeight:'bold'}}>ABOUT</Text>
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
 btn:{margin:10,
     padding:10,
     backgroundColor:'cyan',
     borderRadius:10
 },
  
});

export default App;
