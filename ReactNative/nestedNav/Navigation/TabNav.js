import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Cart from "../Screens/Cart";
import Profile from "../Screens/Profile";

const Tab = createBottomTabNavigator()
const TabNav = ()=>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
            headerShown:false,tabBarActiveTintColor:"skyblue",tabBarInactiveTintColor:"gray",tabBarIcon:
            ({color,size})=>{
                let iconName;
                if (route.name==="Home"){
                    iconName = "home";
                }else if(route.name==="Search"){
                    iconName="search";
                }else if(route.name==="Cart"){
                    iconName="cart";
                }else{
                    iconName="person";
                }
                return(
                    <Ionicons name={iconName} size={size} color={color}/>
                )
            }
        })} >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Cart" component={Cart}/>
            <Tab.Screen name="Profile" component={Profile}/>

        </Tab.Navigator>
    )
}

export default TabNav