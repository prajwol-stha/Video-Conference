import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useMeeting } from '@videosdk.live/react-native-sdk';
import ParticipantList from './ParticipantList';
import ControlsContainer from './ControlsContainer';
import COLORS from '../styles/colors';

function MeetingView({ route, navigation }) {
  const { meetingId } = route.params;
  const { join, leave, toggleWebcam, toggleMic, participants } = useMeeting({});
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isWebcamOn, setIsWebcamOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(false);

  const handleToggleWebcam = () => {
    toggleWebcam();
    setIsWebcamOn(prev => !prev);
  };

  const handleToggleMic = () => {
    toggleMic();
    setIsMicOn(prev => !prev);
  };

  useEffect(() => {
    if (meetingId) {
      console.log('Joining meeting:', meetingId);
      setTimeout(() => {
        join();
        setIsJoined(true);
        setIsLoading(false);
      }, 1000);
    }
  }, [meetingId]);

  const participantsArrId = [...participants.keys()];

  const handleLeave = () => {
    console.log('Leaving meeting');
    leave();
    console.log('Navigating to Home');
    navigation.navigate('Home');
  };

  if (!navigation) {
    console.error('Navigation prop is undefined');
    return <Text>Error: Navigation prop is undefined</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND }}>
      <Text selectable style={{ fontSize: 18, padding: 12, color: "black", alignSelf: 'center' }}>
        Meeting ID: {meetingId}
      </Text>
      
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
          <Text style={{ marginTop: 10, color: COLORS.PRIMARY }}>Joining Meeting...</Text>
        </View>
      ) : (
        isJoined && <ParticipantList participants={participantsArrId} />
      )}

      <ControlsContainer
        leave={handleLeave}
        toggleWebcam={handleToggleWebcam}
        toggleMic={handleToggleMic}
        isWebcamOn={isWebcamOn}
        isMicOn={isMicOn}
      />
    </View>
  );
}

export default MeetingView;