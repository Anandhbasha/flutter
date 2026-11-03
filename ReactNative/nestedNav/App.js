import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Drawer from "./Navigation/Drawer"
import ShopContext from "./Context/ShopContext"

 const App = ()=>{
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ShopContext>
        <NavigationContainer>
          <Drawer style={{display:"flex"}}></Drawer>
        </NavigationContainer>
      </ShopContext>
    </GestureHandlerRootView>
  )
}

export default App