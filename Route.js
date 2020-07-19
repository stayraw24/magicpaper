import {createStackNavigator, } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './src/Home';
import Splash from './src/Splash';
import Info from './src/Info';
import Main from './src/Main';
import About from './src/About';
import Last from './src/Last';

const stack = createStackNavigator({
    Home:{screen:Home},
    Splash:{screen:Splash},
    Info:{screen:Info},
    Main:{screen:Main},
    Last:{screen:Last},
    About:{screen:About},
});

const App = createAppContainer(stack);
export default App;