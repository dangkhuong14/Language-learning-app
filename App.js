import React, { useState } from 'react'
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native'
import styles from './App.styles'

const App = () => {
  const [status, setStatus] = useState('ok')
  console.log('Hello world');
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is "the glass"?</Text>
      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
          <Image
            source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }}
            style={styles.optionImage}
            resizeMode='contain' />
          <Text style={styles.optionText}>glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image
            source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }}
            style={styles.optionImage}
            resizeMode='contain' />
          <Text style={styles.optionText}>glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image
            source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }}
            style={styles.optionImage}
            resizeMode='contain' />
          <Text style={styles.optionText}>glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image
            source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }}
            style={styles.optionImage}
            resizeMode='contain' />
          <Text style={styles.optionText}>glass</Text>
        </View>
      </View>
    </View>
  )
}

export default App
