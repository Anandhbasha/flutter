import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductDetail from "../Screens/ProductDetail"
import TabNav from "./TabNav"
import { TouchableOpacity } from "react-native"
import { DrawerActions } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"

const StackNav = createNativeStackNavigator()
const Stack = ({navigation})=>{
    return(
        <StackNav.Navigator>
            <StackNav.Screen name="HomeTabs" component={TabNav} options={{title:"Shopping App",
                headerLeft:()=>(
                    <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}style={{marginLeft:11}}>
                        <Ionicons name="menu" size={28} color="blue"></Ionicons>
                    </TouchableOpacity>
                )
            }}/>
            <StackNav.Screen name="ProductDetail" component={ProductDetail} options={{title:"prodDetails"}}/>
        </StackNav.Navigator>
    )
}
export default Stack