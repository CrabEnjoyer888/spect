import  React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../../spect/screens/Profile'
import BottomTabNavigator from './BottomTabNavigator';
const Drawer=createDrawerNavigator()
const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" componet={Profile}/>
      <Drawer.Screen name="Home" componet={BottomTabNavigator}/>
      </Drawer.Navigator>
  )
}

export default DrawerNavigator;