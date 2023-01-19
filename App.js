import React, { useState } from 'react'
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native'
import styles from './App.styles'
import ImageOption from './src/Components/ImageOption'

const App = () => {
  const [status, setStatus] = useState('ok')
  console.log('Hello world');
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is "the glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption />
        <ImageOption />
        <ImageOption />
      </View>
    </View>
  )
}

export default App
