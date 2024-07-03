import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { createMeeting, token } from '../api';

export default function JoinScreen({ navigation }) {
  const [meetingVal, setMeetingVal] = useState("");

  const createAndJoinMeeting = async () => {
    if (!token) {
      console.log('Token unavailable, please get it from app.videosdk.live');
      return;
    }
    const newMeetingId = await createMeeting({ token });
    navigation.navigate('Meeting', { meetingId: newMeetingId });
  };

  const joinExistingMeeting = () => {
    if (meetingVal) {
      navigation.navigate('Meeting', { meetingId: meetingVal });
    } else {
      console.log('Please enter a valid meeting ID');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F6F6FF",
        justifyContent: "center",
        paddingHorizontal: 60,
      }}
    >
      <TouchableOpacity
        onPress={createAndJoinMeeting}
        style={{ backgroundColor: "#11bb22", padding: 12, borderRadius: 6 }}
      >
        <Text style={{ color: "white", alignSelf: "center", fontSize: 18 }}>
          Create Meeting
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 22,
          marginVertical: 16,
          fontStyle: "italic",
          color: "grey",
        }}
      >
        ---------- OR ----------
      </Text>
      <TextInput
        value={meetingVal}
        onChangeText={setMeetingVal}
        placeholder={"XXXX-XXXX-XXXX"}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 6,
          fontStyle: "italic",
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#11bb22",
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