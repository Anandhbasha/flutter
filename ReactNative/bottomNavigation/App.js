// npm install @react-navigation/native @react-navigation/native-stack
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/bottom-tabs
// npx expo install @expo/vector-icons
// npm install @react-navigation/drawer
// npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import Products from "./Screens/Products";
import Settings from "./Screens/Settings";
import BottomTabs from "./Navigation/BottomTabs";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeTabs"
          screenOptions={{
            drawerActiveTintColor: "blue",
            drawerInactiveTintColor: "black",

            headerStyle: {
              backgroundColor: "#19762D",
            },

            headerTintColor: "white",
          }}
        >
          <Drawer.Screen
            name="HomeTabs"
            component={BottomTabs}
            options={{
              title: "Home",
              drawerIcon: ({ color, size }) => (
                <Ionicons
                  name="home-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Products"
            component={Products}
            options={{
              title: "Products",
              drawerIcon: ({ color, size }) => (
                <Ionicons
                  name="cube-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{
              title: "Settings",
              drawerIcon: ({ color, size }) => (
                <Ionicons
                  name="settings-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;