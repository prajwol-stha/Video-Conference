// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Homescreen from './src/screens/Homescreen';
// import MeetingView from './src/screens/MeetingView';

// const Stack = createNativeStackNavigator();

// function AppStack() {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen 
//         name="Homescreen" 
//         component={Homescreen} 
//         options={{ headerShown: true }}
//       />
//       <Stack.Screen 
//         name="Meeting" 
//         component={MeetingView} 
//         options={{ headerShown: true }}
//       />
//     </Stack.Navigator>
//   );
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppStack />
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { MeetingProvider } from '@videosdk.live/react-native-sdk';
// import { token } from './src/api';
// import Homescreen from './src/screens/Homescreen';
// import MeetingView from './src/screens/MeetingView';
// import ControlsScreen from './src/screens/ControlsScreen';

// const Stack = createNativeStackNavigator();

// function AppStack() {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen
//         name="Home"
//         component={Homescreen}
//         options={{ headerShown: true }}
//       />
//       <Stack.Screen
//         name="Meeting"
//         options={{ headerShown: false }}
//       >
//         {(props) => (
//           <MeetingProvider
//             config={{
//               meetingId: props.route.params.meetingId,
//               micEnabled: false,
//               webcamEnabled: true,
//               name: 'Test User',
//             }}
//             token={token}
//           >
//             <MeetingView {...props} />
//           </MeetingProvider>
//         )}
//       </Stack.Screen>
//       <Stack.Screen
//         name="Controls"
//         component={ControlsScreen}
//         options={{ headerShown: true, presentation: 'modal' }}
//       />
//     </Stack.Navigator>
//   );
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppStack />
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MeetingProvider } from '@videosdk.live/react-native-sdk';
import { token } from './src/api';
import Homescreen from './src/screens/Homescreen';
import MeetingView from './src/screens/MeetingView';
import ControlsScreen from './src/screens/ControlsScreen';

const Stack = createNativeStackNavigator();

function MeetingWrapper({ route }) {
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
      <MeetingView route={route} />
    </MeetingProvider>
  );
}

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Meeting"
        component={MeetingWrapper}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Controls"
        component={ControlsScreen}
        options={{ headerShown: true, presentation: 'modal' }}
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