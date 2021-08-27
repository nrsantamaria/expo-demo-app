import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import CounterScreen from '../screens/CounterScreen'

const defaultNavOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === 'android' ? '#002856' : '#eaeaea',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : '#002856',
}


const HomeStackNavigator = createStackNavigator()
const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HomeStackNavigator.Screen
        name='Home'
        component={HomeScreen}
      />
    </HomeStackNavigator.Navigator>
  )
}

const CounterStackNavigator = createStackNavigator()
const CounterNavigator = () => {
  return (
    <CounterStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <CounterStackNavigator.Screen
        name='Counter'
        component={CounterScreen}
      />
    </CounterStackNavigator.Navigator>
  )
}

// Creates the navigation items at the bottom of the screen
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator()
const activeTintColor = Platform.OS === 'android' ? 'white' : '#002856'

export const MainNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: activeTintColor }}>
      <Tab.Screen
        key='home'
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => {
            return <Ionicons name='home' size={25} color={color} />
          },
          tabBarColor: '#002856',
        }}
      />
      <Tab.Screen
        key='counter'
        name='Counter'
        component={CounterNavigator}
        options={{
          tabBarLabel: 'Counter',
          tabBarIcon: ({ color }) => {
            return <Ionicons name='game-controller-outline' size={25} color={color} />
          },
          tabBarColor: '#002856',
        }}
      />
    </Tab.Navigator>
  )
}
