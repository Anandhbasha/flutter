// npm install @react-navigation/native @react-navigation/native-stack
// npx expo install react-native-screens react-native-safe-area-context
//npm install @react-navigation/bottom-tabs
// npx expo install @expo/vector-icons

import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screens/Home'
import Search from './Screens/Search'
import Cart from './Screens/Cart'
import Profiles from './Screens/Profiles'

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
              let iconName;
              if(route.name==="Home"){
                iconName=focused?"home":"home-outline"
              }else if(route.name==="Search"){
                iconName=focused?"search":"search-outline"
              }
              else if(route.name==="Cart"){
                iconName=focused?"cart":"cart-outline"
              }
              else if(route.name==="Profiles"){
                iconName=focused?"person":"person-outline"
              }
              return(
                <Ionicons name={iconName} size={size} color={color}/>
              )
            },
            tabBarActiveTintColor:"#2563eb",
            tabBarInactiveTintColor:"grey",
            tabBarStyle:{
              height:65,
              paddingBottom:8,
              paddingTop:6,
              backgroundColor:"white"
            },
        })}
        >
          <Tab.Screen name="Home" component={<Home/>}/>
          <Tab.Screen name="Search" component={<Search/>}/>
          <Tab.Screen name="Cart" component={<Cart/>}/>
          <Tab.Screen name="Profiles" component={<Profiles/>}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App