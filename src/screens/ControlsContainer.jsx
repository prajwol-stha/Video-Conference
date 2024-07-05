import React from 'react';
import { View } from 'react-native';
import ControlButton from '../components/ControlButton';
import COLORS from '../styles/colors';

function ControlsContainer({ leave, toggleWebcam, toggleMic, isWebcamOn, isMicOn }) {
  return (
    <View
      style={{
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <ControlButton
        onPress={toggleWebcam}
        buttonText={isWebcamOn ? 'Turn Off Camera' : 'Turn On Camera'}
        backgroundColor={isWebcamOn ? COLORS.PRIMARY : COLORS.RED}
      />
      <ControlButton
        onPress={toggleMic}
        buttonText={isMicOn ? 'Mute Yourself' : 'Unmute Yourself'}
        backgroundColor={isMicOn ? COLORS.PRIMARY : COLORS.RED}
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