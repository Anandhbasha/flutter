import React from 'react'
import { Button, Text, View } from 'react-native'

const Profile = ({navigation,route}) => {
    const {userName} = route.params || {}
  return (
    <View>
        <Text>username:{userName}</Text>
        <Button title='Logout' onPress={()=>navigation.popToTop()}></Button>
    </View>
  )
}

export default Profile