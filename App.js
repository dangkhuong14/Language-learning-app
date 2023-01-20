import React, { useState, useEffect } from 'react'
import { Text, View, Alert } from 'react-native'
import styles from './App.styles'
import ImageOption from './src/Components/ImageOption'
import questions from './assets/images/imageMulatipleChoiceQuestions'
import Button from './src/Components/Button'

const App = () => {
  // Current selected image option in the image option question
  const [selected, setSelected] = useState(null)

  // Index of image option question in question array
  const [imageQuestionIndex, setImageQuestionIndex] = useState(0)

  // Current selected image option question
  const [imageQuestion, setImageQuestion] = useState(questions[0])

  // Everytime the image question index changes, update the image question: useEffect
  useEffect(() => {
    // Check if index is out of bounds of image questions array
    console.log('useEffect is called');
    if (imageQuestionIndex >= questions.length) {
      // Give a notification of winning
      Alert.alert('You won!')
      // Reset selected image option
      setSelected(null)
      // Move back to the first image question
      setImageQuestionIndex(0)
    }
    else {
      // Move image question to the changed index
      setImageQuestion(questions[imageQuestionIndex])
      // Reset selected image option
      setSelected(null)
    }
  }, [imageQuestionIndex])

  console.log('Re-render');
  console.log('The question index is: ' + imageQuestionIndex );

  let onButtonPress = () => {
    if(selected.correct){
      // if this is the last question then don't give correct notification
      if(imageQuestionIndex !== questions.length - 1)
      // Give a notification 
      Alert.alert('Correct!')
      // Move to the next question: change the index of image question
      setImageQuestionIndex(imageQuestionIndex + 1)
    }
    else{
      // Give a notification
      Alert.alert('Please try again :<')
      // Reset selected image option 
      setSelected(null)
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{imageQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {
          imageQuestion.options.map((option) =>
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
      <Button 
      text='Check'
      disabled={!selected}
      onPress={onButtonPress}
      />
    </View>
  )
}

export default App
