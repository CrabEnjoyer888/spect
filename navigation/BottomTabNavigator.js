import  React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Feed from '../../spect/screens/Feed';
import CreatePost from '../../spect/screens/CreatePost';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focussed, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focussed 
            ? 'book' 
            : 'book-outline';
          } else if (route.name === 'CreatePost') {
            iconName = focussed ? 'create' : 'create-outline';
          }
          return <IonIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{ 
        activeTintColor: 'tomatoe', 
        inactiveTintColor: 'gray' }}>
          <Tab.Screen name="Feed" componet={Feed}></Tab.Screen>
      <Tab.Screen name="CreatePost" componet={CreatePost}></Tab.Screen>
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
