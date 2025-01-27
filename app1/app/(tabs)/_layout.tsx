import { View, Text } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


const Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{
            headerShown:false,
            title:'',
            tabBarIcon:()=><Entypo name="home" size={24} color="black" />,
        
        }}/>
        <Tabs.Screen name='profile' options={{
            headerShown:false,
            title:'',
            tabBarIcon:()=><Ionicons name="settings-outline" size={24} color="black" />
        }}/>
        
    </Tabs>
  )
}

export default Layout