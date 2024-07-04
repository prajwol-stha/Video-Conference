import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ParticipantView from './ParticipantView';

function ParticipantList({ participants }) {
  return participants.length > 0 ? (
    <FlatList
      data={participants}
      renderItem={({ item }) => <ParticipantView participantId={item} />}
      keyExtractor={(item) => item}
    />
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F6F6FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 20 }}>Press Join button to enter meeting.</Text>
    </View>
  );
}

export default ParticipantList;