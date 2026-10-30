import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native'
import {View,Text, TextInput} from "react-native"

const App = () => {
  const [user,SetUser] = useState("")
  const [mobile,SetMobile] = useState("")
  const [password,SetPassword] = useState("")
  const [confirmpassword,SetConfirmpassword] = useState("")
  const [email,SetEmail] = useState("")
  const[error,SetError] = useState()
  const handleRegister =()=>{
    if(!user||!email||!mobile||!password||!confirmpassword){
      SetError("All Fields are required")
      return
    }
    if(!email.includes("@")){
      SetError("Enter a valid Email ID")
      return
    }
    if(mobile.length!==10){
      SetError("Mobile number should contain 10 digits")
      return
    }
    if(password.length<8){
      SetError("Password must be min 8 characters")
      return
    }
    if(password!==confirmpassword){
      SetError("Confirm Password does not match with password")
      return
    }
  }
  return (
    <View style={{padding:20}}>
      <Text>UserName</Text>
      <TextInput value={user} onChangeText={SetUser} style={Styles.input}></TextInput>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={SetEmail} style={Styles.input}></TextInput>
      <Text>Password</Text>
      <TextInput value={password} onChangeText={SetPassword} secureTextEntry placeholder='Enter Password' style={Styles.input}></TextInput>
      <Text>Confirm Password</Text>
      <TextInput value={confirmpassword} onChangeText={SetConfirmpassword} secureTextEntry placeholder='Enter Password' style={Styles.input}></TextInput>
      <Text>Mobile</Text>
      <TextInput value={mobile}onChangeText={SetMobile} maxLength={10} placeholder='Enter your mobile number' style={Styles.input}></TextInput>
      <Button title='Register' onPress={handleRegister}></Button>
    </View>
  )
}

export default App

const Styles = StyleSheet.create({
  input:{
    borderWidth:1,
    padding:10,
    marginBottom:15,
    borderRadius:5
  }
}) 