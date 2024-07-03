import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useMeeting, useParticipant } from '@videosdk.live/react-native-sdk';
import ParticipantList from './ParticipantList';
import ControlsContainer from './ControlsContainer';

function MeetingView({ route, navigation }) {
  const { meetingId } = route.params;
  const { join, participants} = useMeeting({});

  //here
  // const { join, leave, toggleWebcam, toggleMic, participants, meetingId } = useMeeting({});
  // const participantsArrId = [...participants.keys()];


  useEffect(() => {
    if (meetingId) {
      console.log('Joining meeting:', meetingId);
      join();
    }
  }, [meetingId]);

  const participantsArrId = [...participants.keys()];

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, padding: 12 }}>Meeting Id: {meetingId}</Text>
      <ParticipantList participants={participantsArrId} />
      {/* <View style={{ padding: 12 }}>
        <Text 
          style={{ color: 'blue', textAlign: 'center' }}
          onPress={() => navigation.navigate('Controls')}
        >
          Go to Controls
        </Text>
      </View> */}
      
    </View>
  );
}

export default MeetingView;