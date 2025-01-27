import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Profile = () => {
  return (
    <View style = {{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }}>
      <MaterialCommunityIcons name="face-man-profile" size={94} color="#1591ea" />
    </View>
  )
}

export default Profile