import React from 'react';
import { View } from 'react-native';
import ControlButton from '../components/ControlButton';

function ControlsContainer({ leave, toggleWebcam, toggleMic }) {
  return (
    <View
      style={{
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {/* <ControlButton
        onPress={join}
        buttonText={'Join'}
        backgroundColor={'#1178F8'}
      /> */}
      <ControlButton
        onPress={toggleWebcam}
        buttonText={'Toggle Webcam'}
        backgroundColor={'#1178F8'}
      />
      <ControlButton
        onPress={toggleMic}
        buttonText={'Toggle Mic'}
        backgroundColor={'#1178F8'}
      />
      <ControlButton
        onPress={leave}
        buttonText={'Leave'}
        backgroundColor={'#FF0000'}
      />
    </View>
  );
}

export default ControlsContainer;