import React from 'react';
import { SafeAreaView } from 'react-native';
import { useMeeting } from '@videosdk.live/react-native-sdk';
import ControlsContainer from './ControlsContainer';

function ControlsScreen() {
  const { join, leave, toggleWebcam, toggleMic } = useMeeting({});

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end' }}>
      <ControlsContainer
        join={join}
        leave={leave}
        toggleWebcam={toggleWebcam}
        toggleMic={toggleMic}
      />
    </SafeAreaView>
  );
}

export default ControlsScreen;