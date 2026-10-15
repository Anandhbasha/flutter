import { useState } from 'react'
import { Button, Text, TextInput, View ,StyleSheet} from 'react-native'

const Login = ({navigation}) => {
    const[userName,setUserName] = useState("")
    const[password,setPassword] = useState("")
  return (
    <View style={styles.container}> 
        <Text style={styles.title}>Login Screen</Text>
        <TextInput placeholder='Enter userName' value={userName} onChangeText={setUserName} style={styles.input}></TextInput>
        <TextInput placeholder='Enter Password' value={password} onChangeText={setPassword} style={styles.input}></TextInput>
        <Button title='Login' onPress={()=>navigation.navigate("Home",{name:userName})} style={styles.btn}></Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:20
    },
    title:{
        fontSize:25,
        marginBottom:20,
    },
    input:{
        borderWidth:1,
        padding:12,
        borderRadius:20,
        marginBottom:20
    },
    btn:{
        padding:15,
        borderRadius:15
    }
})