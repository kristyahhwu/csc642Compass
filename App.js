import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from './app/screens/Login';
import Classes from './app/screens/Classes';
import Calendar from './app/screens/Calendar';
import Settings from './app/screens/Settings';
import Announcements from './app/screens/Announcements';
import AnnoucePopup from './app/screens/AnnouncePopup';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: '#FFC632',
        tabBarActiveBackgroundColor: '#211C70',
        tabBarInactiveBackgroundColor: '#565390',
        headerTintColor: '#FFC632',
        headerStyle: {
          backgroundColor: '#211C70',
        },

      }}
    >
      <Tab.Screen
        name="Classes"
        component={Classes}
        options={{
          tabBarLabel: 'Classes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Announcements"
        component={Announcements}
        options={{
          tabBarLabel: 'Announcements',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <MyTabs />


    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
