import React from 'react';
import { View, Text } from 'react-native';
import { useMeeting } from '@videosdk.live/react-native-sdk';
import ParticipantList from './ParticipantList';
import ControlsContainer from './ControlsContainer';

function MeetingView() {
  const { join, leave, toggleWebcam, toggleMic, participants, meetingId } = useMeeting({});
  const participantsArrId = [...participants.keys()];

  return (
    <View style={{ flex: 1 }}>
      {meetingId ? (
        <Text style={{ fontSize: 18, padding: 12 }}>Meeting Id: {meetingId}</Text>
      ) : null}
      <ParticipantList participants={participantsArrId} />
      <ControlsContainer
        join={join}
        leave={leave}
        toggleWebcam={toggleWebcam}
        toggleMic={toggleMic}
      />
    </View>
  );
}

export default MeetingView;