import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductDetail from "../Screens/ProductDetail"
import TabNav from "./TabNav"

const StackNav = createNativeStackNavigator()
const Stack = ()=>{
    return(
        <StackNav.Navigator>
            <StackNav.Screen name="HomeTabs" component={TabNav} options={{title:"Shopping App"}}/>
            <StackNav.Screen name="ProductDetail" component={ProductDetail} options={{title:"prodDetails"}}/>
        </StackNav.Navigator>
    )
}
export default Stack