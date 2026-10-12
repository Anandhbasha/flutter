import { useState } from "react"
import { Text, View ,StyleSheet, TextInput, Button, Alert, Image, ScrollView, Switch, TouchableOpacity, ActivityIndicator} from "react-native"
import { setEnabled } from "react-native/Libraries/Performance/Systrace"

const App = () => {
  const [enable,setEnable] = useState(false)
  return (
    
      // <View style={styles.container}>
      //   <Text>Welcome to ReactNative</Text>
      //   <TextInput placeholder="Enter your name" style={styles.input}></TextInput>
      //   <Button title="Login" onPress={()=>Alert.alert("Hello Guys")}></Button>
      //   <Image source ={{ uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgI3fF6_ebdidZr1lnTEvKusZLVuw2ZKsrhm_Xtxn6ZdQlOo9PBRq1v2VW&s=10'}} 
      //   style={{width:100,height:100}} resizeMode="cover" />
      //   <Image source={require("./assets/icon.png")} style={{width:100,height:100}} />
      // </View>
      <ScrollView>
          <Text>React Native</Text>
          <Text>Js</Text>
          <Text>Node Js</Text>
          <Text>MongoDb</Text>
          <Text>React</Text>
          <Switch value = {enable} onValueChange={setEnable}></Switch>
          <TouchableOpacity onPress={()=>alert("Button Clicked")}>
            <Text>Login</Text>
          </TouchableOpacity>
          <Button style = {styles.btn}></Button>
          <ActivityIndicator size={"large"} color={"blue"} />
      </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    color:"red",
    // backgroundColor:"black"
    display:"flex",
    justifyContent:"center"
  },
  input:{
    borderWidth:1,
    padding:10,
    margin:10,
    borderRadius:20
  },
  btnHover:{
    // opacity:.1,
    color:"white",
    width:200,
    height:200,
    transform:[{scale:1.8}]
  },
})