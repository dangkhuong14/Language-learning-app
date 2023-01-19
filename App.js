import React from 'react'
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native'
import styles from './App.styles'
import ImageOption from './src/Components/ImageOption'
import question from './assets/images/oneQuestionWithOption'

const App = () => {
  console.log('Hello world');
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {
          question.options.map((option) =>
            <ImageOption
              key={option.id}
              image={option.image}
              text={option.text}
            />
          )
        }
      </View>
    </View>
  )
}

export default App
