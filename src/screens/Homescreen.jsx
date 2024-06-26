import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'

const Homescreen = () => {
    function handlejoin(){
        console.log('Joining')
    }
    function handleCreate(){
        console.log('Creating')
    }

  return (
    <View style={styles.container}>
        <Card text="Join Meeting" onPress={handlejoin}/>
        <Card text="Create Meeting" onPress={handleCreate}/>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    }
})