import {React, useState} from 'react'
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native'
import styles from './App.styles'

const App = () =>{
  const [status, setStatus]= useState('ok')
  return (
    <View style={styles.root}>
      {/* <Text style={[styles.text, status == 'ok' ? styles.green : styles.red]}> */}
      <Text style={[styles.text, {color: status == 'ok' ? 'green' : 'red' }]}>
        {status === 'ok' ? 'Everything is Okay!' : 'Something went wrong!'}
      </Text>
      <Image
        source={{ uri: 'https://www.invert.vn/media/uploads/uploads/2022/12/03191809-2.jpeg' }}
        style={styles.image}
        resizeMode='cover'
      />
      <TextInput placeholder="Hi there, you can edit this line!" />
    </View>
  )
} 

export default App
