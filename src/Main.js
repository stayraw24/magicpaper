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
  Alert,
  Button,
  Text,
  StatusBar,
} from 'react-native'; 

class App extends React.Component{

static navigationOptions = {header:null};


constructor(){
 
    super();
 
    this.state={
 
      // This is our Default number value
      NumberHolder : 1
 
    }
  }
 
componentDidMount:GenerateRandomNumber=()=>
{
 
var RandomNumber = Math.floor(Math.random() * ((90-65)+1)) + 90;
 
this.setState({
 
  NumberHolder : RandomNumber
 
})
}
 

  render(){

  const ans = String.fromCharCode(this.state.NumberHolder);
    
    return(

      <View style={{flex:1,backgroundColor:'#F0C984'}}>

      <StatusBar backgroundColor='#F1AD53' barStyle="light-content"/>
      <View style={{alignItems:'center'}}>
      <Text style={styles.txt}>Remember the symbol/alphabet to your correspond number.</Text>
      </View>

      <ScrollView>
      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'column'}}>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>01.{String.fromCharCode(this.state.NumberHolder+3)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>02.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>03.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>04.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>05.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>06.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>07.{String.fromCharCode(this.state.NumberHolder-20)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>08.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>09.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>10.{String.fromCharCode(this.state.NumberHolder-6)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>11.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>12.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>13.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>14.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>15.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>16.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>17.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>18.{String.fromCharCode(this.state.NumberHolder)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>19.{String.fromCharCode(this.state.NumberHolder-11)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>20.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>21.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>22.{String.fromCharCode(this.state.NumberHolder+4)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>23.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>24.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>25.{String.fromCharCode(this.state.NumberHolder+8)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>26.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>27.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>28.{String.fromCharCode(this.state.NumberHolder-5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>29.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>30.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>31.{String.fromCharCode(this.state.NumberHolder-2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>32.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>33.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>34.{String.fromCharCode(this.state.NumberHolder-8)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>35.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>36.{String.fromCharCode(this.state.NumberHolder)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>37.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>38.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>39.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>40.{String.fromCharCode(this.state.NumberHolder-4)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>41.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>42.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>43.{String.fromCharCode(this.state.NumberHolder-5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>44.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>45.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>46.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>47.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>48.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>49.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>50.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>51.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>52.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>53.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>54.{String.fromCharCode(this.state.NumberHolder)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>55.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>56.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>57.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>58.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>59.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>60.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>61.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>62.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>63.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>64.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>65.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>66.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>67.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>68.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>69.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>70.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>71.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>72.{String.fromCharCode(this.state.NumberHolder)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>73.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>74.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>75.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>76.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>77.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>78.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>79.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>80.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>81.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>82.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>83.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>84.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>85.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>86.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>87.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>88.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>89.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>90.{String.fromCharCode(this.state.NumberHolder)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>91.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>92.{String.fromCharCode(this.state.NumberHolder+5)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>93.{String.fromCharCode(this.state.NumberHolder+9)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>94.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>95.{String.fromCharCode(this.state.NumberHolder+2)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>96.{String.fromCharCode(this.state.NumberHolder+6)}</Text>
      </View>

      <View style={{flex:1, justifyContent:"space-evenly",flexDirection:'row'}}>
      <Text style={{marginBottom: 10, fontSize: 20}}>97.{String.fromCharCode(this.state.NumberHolder)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>98.{String.fromCharCode(this.state.NumberHolder+7)}</Text>
      <Text style={{marginBottom: 10, fontSize: 20}}>99.{String.fromCharCode(this.state.NumberHolder)}</Text>
      </View>
  
      </View>
      </ScrollView>

      <Button title="Generate New Random symbol" onPress={this.componentDidMount} />

      <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Last', {text:ans})}>
      <Text  style={{alignSelf:"center", padding:5,fontSize:20,fontWeight:'bold'}}>NEXT</Text>
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
