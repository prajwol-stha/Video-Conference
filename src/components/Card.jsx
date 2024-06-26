import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../styles/colors'

const Card = ({text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <Text style={styles.cardContent}>{text}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  card:{
    margin:10,
    padding:20,
    borderRadius:10,
    backgroundColor:COLORS.primary,
    width:'auto',
    height:180,
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  cardContent:{
    fontSize:25,
    color:COLORS.text,
  }
})