import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useMeeting } from '@videosdk.live/react-native-sdk';
import ParticipantList from './ParticipantList';
import ControlsContainer from './ControlsContainer';
import COLORS from '../styles/colors';

function MeetingView({ route, navigation }) {
  const { meetingId } = route.params;
  const { join, leave, toggleWebcam, toggleMic, participants } = useMeeting({});

  useEffect(() => {
    if (meetingId) {
      console.log('Joining meeting:', meetingId);
      join();
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
    <View style={{ flex: 1,backgroundColor:COLORS.BACKGROUND }}>
      <Text selectable style={{ fontSize: 18, padding: 12,color:"black" ,alignSelf:'center'}}>Meeting ID: {meetingId}</Text>
      <ParticipantList participants={participantsArrId} />
      <ControlsContainer
        leave={handleLeave}
        toggleWebcam={toggleWebcam}
        toggleMic={toggleMic}
      />
    </View>
  );
}

export default MeetingView;
