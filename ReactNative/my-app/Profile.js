import React from 'react'
import { Button, Text, View } from 'react-native'

const Profile = ({navigation,route}) => {
    const {userName} = route.params || {}
    const handleLogout = ()=>{
      navigation.reset(
        {
          index:0,
          routes:[
            {
              name:"Login",
            }
          ]
        }
      )
    }
  return (
    <View>
        <Text>username:{userName}</Text>
        {/* <Button title='Logout' onPress={()=>navigation.popToTop()}></Button> */}
        <Button title='Logout' onPress={handleLogout}></Button>
        <Button title='goBack' onPress={()=>navigation.goBack()}></Button>

    </View>
  )
}

export default Profile