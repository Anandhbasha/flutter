import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Drawer from "./Navigation/Drawer"

 const App = ()=>{
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
          <Drawer></Drawer>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App