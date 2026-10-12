import { Text ,StyleSheet} from "react-native"

const App = ()=>{
  return (
    <>
      <Text style={styles.heading}>Hello Welcome</Text>
      <Text>My name is Anandhakumar</Text>
    </>
  )
}
// TextInput
// Images
// View
// Button
// Pressable
// ScrollView
// FlatList
// Switch
export default App

const styles = StyleSheet.create({
  heading:{
    backgroundColor:"red",
    color:"white",
    fontSize:"20px",
    padding:"20px"
  }
})