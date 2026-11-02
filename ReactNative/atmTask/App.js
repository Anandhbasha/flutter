import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [pass,setPass] = useState("")
  const [btn,setBtn] = useState(false)
  const [text,setText] = useState("")
  const password = "1234"
  let chance = 0
  
  const handleSubmit = ()=>{
      if(chance<3){
        alert(password===pass?"login Sucessfull":"Invalid Details") 
        chance++
      }
      if(chance===3){
        setBtn(true)
        setText("account blocked")
      }
      console.log(btn);
      
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter your password' style={{borderWidth:1,padding:10,margin:10,borderRadius:20}} onChange={(e)=>setPass(e.target.value)}></TextInput>
      <Button onPress={handleSubmit} title='login' disabled={btn}></Button>
      <h1>{text}</h1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// button
// input
// pass variable
// comparison
// 3 chance