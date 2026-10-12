import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [value,setValue] = useState("Hello");
  let [bg,setBg] = useState(false)
  const handleChange = ()=>{
    setValue(value==="Hello"?"Welcome":"Hello")
    console.log(value);    
  }
  const handleBg = ()=>{
    setBg(!bg)
    // !bg = false -> true ->false
  }
  return (
    <View style={[styles.container,{backgroundColor:bg?"black":"white"}]}>
      <Button title={value} onPress={handleChange}></Button>
      <Button title={bg===true?"Dark":"Light"} onPress={handleBg}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
