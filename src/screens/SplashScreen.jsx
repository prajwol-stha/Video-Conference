import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import COLORS from '../styles/colors.js';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Getting Things Ready.</Text>
      <LottieView 
        style={styles.loader} 
        source={require('../assets/initialLoader.json')} 
        autoPlay 
        loop={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  loader: {
    width: 180,
    height: 90,
  },
});

export default SplashScreen;



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import LottieView from 'lottie-react-native';

// const SplashScreen = () => {
//   return (
//     <View style={{
//       
//     }}>
//       <Text>SplashScreen</Text>
//       <LottieView style={{flex:1}} source={require('../assets/loader.json')} autoPlay loop />
//     </View>
//   )
// }

// export default SplashScreen

// const styles = StyleSheet.create({})