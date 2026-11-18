import { NavigationContainer } from "@react-navigation/native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Drawer from "./Navigation/Drawer"
import ShopContext from "./Context/ShopContext"
import { Provider } from "react-redux"
import { store } from "./Store/Store"


// npx expo install react-dom react-native-web @expo/metro-runtime
// npx expo run   -> andriod ,ios
// npx expo export --platform web
// npm install -g firebase-tools -> Firebase deployment
// firebase login
// firebase init hosting -> to host
// npx expo export --platform web
// firebase deploy --only hosting
 const App = ()=>{
  return(
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ShopContext>
          <NavigationContainer>
            <Drawer style={{display:"flex"}}></Drawer>
          </NavigationContainer>
        </ShopContext>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App