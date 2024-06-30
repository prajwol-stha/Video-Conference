import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { MeetingProvider } from '@videosdk.live/react-native-sdk';
import { createMeeting, token } from '../api';
import JoinScreen from './JoinScreen';
import MeetingView from './MeetingView';

export default function Homescreen() {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingId = async (id = null) => {
    if (!token) {
      console.log('PLEASE PROVIDE TOKEN IN api.js FROM app.videosdk.live');
    }
    const newMeetingId = id == null ? await createMeeting({ token }) : id;
    setMeetingId(newMeetingId);
  };

  return meetingId ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F6FF' }}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: true,
          name: 'Test User',
        }}
        token={token}>
        <MeetingView />
      </MeetingProvider>
    </SafeAreaView>
  ) : (
    <JoinScreen getMeetingId={getMeetingId} />
  );
}