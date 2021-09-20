import React from 'react'
import { Platform } from 'react-native'
// https://reactnavigation.org/docs/stack-navigator/#api-definition
import { createStackNavigator } from '@react-navigation/stack'
// https://reactnavigation.org/docs/bottom-tab-navigator/#api-definition
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import CounterScreen from '../screens/CounterScreen'

// You can create a javascript object to pass reusable variables throughout the app
import { Colors } from "../constants/StyleVariables";

// You can define default nav options object to pass to stack screen options prop
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.gartnerBluePrimary : 'white',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.gartnerBluePrimary,
}

// Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.
const HomeStackNavigator = createStackNavigator()
const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <HomeStackNavigator.Screen name='Home' component={HomeScreen} />
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
        initialParams={{ incrementBy: 3 }}
      />
    </CounterStackNavigator.Navigator>
  )
}

// A simple tab bar on the bottom of the screen that lets you switch between different routes.
const Tab = createBottomTabNavigator()
export const MainNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: Colors.gartnerBluePrimary }}>
      <Tab.Screen
        key='home'
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => {
            return <Ionicons name='home' size={25} color={color} />
          },
          tabBarColor: Colors.gartnerBluePrimary,
        }}
      />
      <Tab.Screen
        key='counter'
        name='Counter'
        component={CounterNavigator}
        options={{
          tabBarLabel: 'Counter',
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons
                name='game-controller-outline'
                size={25}
                color={color}
              />
            )
          },
          tabBarColor: Colors.gartnerBluePrimary,
        }}
      />
    </Tab.Navigator>
  )
}
