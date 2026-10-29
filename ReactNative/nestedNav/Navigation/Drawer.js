import { createDrawerNavigator } from "@react-navigation/drawer"
import Stack from "./Stack";
import Settings from "../Screens/Settings";

const DrawerNav = createDrawerNavigator();
const Drawer = ()=>{
    return(
        <DrawerNav.Navigator screenOptions={{drawerActiveTintColor:"skyblue",headerShown:false}}>
            <DrawerNav.Screen name="Dashboard" component={Stack}></DrawerNav.Screen>
            <DrawerNav.Screen name="Settings" component={Settings}></DrawerNav.Screen>
        </DrawerNav.Navigator>
    )
}
export default Drawer