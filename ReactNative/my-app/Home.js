import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = ({navigation,route}) => {
    const {name} = route.params || {}
  return (
    <View>
        <Text>Welcome {name}</Text>
        <Button title='Profile' onPress={()=>navigation.navigate("Profile",{userName:name})}></Button>
    </View>
  )
}

export default Home