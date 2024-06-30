import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './src/screens/Homescreen';
import JoinScreen from './src/screens/JoinScreen';
import MeetingView from './src/screens/MeetingView';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Homescreen" 
        component={Homescreen} 
        options={{ headerShown: true }}
      />
      <Stack.Screen 
        name="Join" 
        component={JoinScreen} 
        options={{ title: 'Join Meeting' }}
      />
      <Stack.Screen 
        name="Meeting" 
        component={MeetingView} 
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;