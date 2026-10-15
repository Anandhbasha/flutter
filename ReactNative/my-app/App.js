// npm install @react-navigation/native @react-navigation/native-stack
// npx expo install react-native-screens react-native-safe-area-context


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login';
import Home from './Home';
import Profile from './Profile';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
        <stack.Screen name='Login' component={Login}/>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='Profile' component={Profile}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App