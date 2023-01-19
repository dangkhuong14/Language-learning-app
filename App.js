import React, { useState } from 'react'
import { Text, View, ScrollView, Image, TextInput, StyleSheet } from 'react-native'
import styles from './App.styles'
import ImageOption from './src/Components/ImageOption'
import question from './assets/images/oneQuestionWithOption'

const App = () => {
  const [selected, setSelected] = useState(null)
  console.log('Re-render');
  let handlePress = () => {
    setSelected(true)
  }

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
              isSelected={selected?.id === option.id}
              onPress={() => {setSelected(option)}}
            />
          )
        }
      </View>
    </View>
  )
}

export default App
