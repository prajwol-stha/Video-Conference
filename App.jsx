import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './src/screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <ScreenStack/>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})