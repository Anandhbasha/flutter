import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count,setCount] = useState(0)
  // const[sq,setSq] = useState(0)
  let sq=0
  // useEffect(()=>{
  //     setCount(10)
  //     setTimeout(()=>{
  //       setCount(50)
  //     },5000)
  // },[count])
  // only one time this will run

  const handleCount = ()=>{
     setCount((prev)=>++prev)
  }
  
  const square = useMemo(()=>{
    return count*count
  },[count])
  return (
    <View style={styles.container}>
      <Text>Square:{square}</Text>
      <Button title={count} onPress={handleCount}></Button>
      <StatusBar style="auto" />
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
