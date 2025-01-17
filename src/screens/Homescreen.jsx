import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, TextInput, View, Alert } from 'react-native';
import { createMeeting,token } from '../api';

import COLORS from '../styles/colors';

export default function Homescreen({ navigation }) {
  const [meetingId, setMeetingId] = useState("");

  const createAndJoinMeeting = async () => {
    if (!token) {
      console.log('Token unavailable, please get it from app.videosdk.live');
      return;
    }
    try {
      const newMeetingId = await createMeeting({ token });
      console.log('Created meeting:', newMeetingId);
      navigation.navigate('Meeting', { meetingId: newMeetingId });
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  const joinExistingMeeting = () => {
    if (meetingId) {
      console.log('Joining meeting:', meetingId);
      navigation.navigate('Meeting', { meetingId: meetingId });
    } else {
      Alert.alert(
        "Invalid Meeting ID",
        "Please enter a valid meeting ID to join.",
        [{ text: "OK" }])
      console.log('Please enter a valid meeting ID');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        justifyContent: "center",
        paddingHorizontal: 60,
      }}
    >
      <TouchableOpacity
        onPress={createAndJoinMeeting}
        style={{ backgroundColor: COLORS.PRIMARY, padding: 12, borderRadius: 6 }}
      >
        <Text style={{ color: COLORS.WHITE, alignSelf: "center", fontSize: 18 }}>
          Create New Meeting
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 22,
          marginVertical: 16,
          fontStyle: "italic",
          color:COLORS.GREY,
          
        }}
      >
        ----- OR -----
      </Text>
      <TextInput
        value={meetingId}
        onChangeText={setMeetingId}
        placeholder={"XXXX-XXXX-XXXX"}
        placeholderTextColor={COLORS.GREY}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 6,
          fontStyle: "italic",
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.PRIMARY,
          padding: 12,
          marginTop: 14,
          borderRadius: 6,
        }}
        onPress={joinExistingMeeting}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          Join Meeting
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}