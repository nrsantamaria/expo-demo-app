import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// https://reactnavigation.org/docs/navigation-container/
// NavigationContainer is responsible for managing your app state and linking your top-level navigator to the app environment.
// import { NavigationContainer } from '@react-navigation/native'
// import { MainNavigator } from './navigation/AppNavigator';
import { GenericStyles } from "./constants/StyleVariables";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
  // return (
  //   <NavigationContainer>
  //     <MainNavigator />
  //   </NavigationContainer>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
