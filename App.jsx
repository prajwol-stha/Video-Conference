import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MeetingProvider } from '@videosdk.live/react-native-sdk';
import { token } from './src/api';
import Homescreen from './src/screens/Homescreen';
import MeetingView from './src/screens/MeetingView';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

function MeetingWrapper({ route, navigation }) {
  return (
    <MeetingProvider
      config={{
        meetingId: route.params.meetingId,
        micEnabled: false,
        webcamEnabled: true,
        name: 'Test User',
      }}
      token={token}
    >
      <MeetingView route={route} navigation={navigation} />
    </MeetingProvider>
  );
}

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Meeting"
        component={MeetingWrapper}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;