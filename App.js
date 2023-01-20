import React, { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'
import styles from './App.styles'
import questions from './assets/images/imageMulatipleChoiceQuestions'
import ImageMultipleChoiceQuestions from './src/Components/ImageMultipleChoiceQuestions'

const App = () => {

  const [imageQuestionIndex, setImageQuestionIndex] = useState(0)
  const [imageQuestion, setImageQuestion] = useState(questions[0])

  // Everytime the image question index changes, update the image question: use useEffect
  useEffect(() => {
    if (imageQuestionIndex >= questions.length) {
      Alert.alert('You won!')
      setImageQuestionIndex(0)
    }
    else {
      setImageQuestion(questions[imageQuestionIndex])
    }
  }, [imageQuestionIndex])

  console.log('Re-render');

  let onCorrectAnswer = () => {
    if(imageQuestionIndex === questions.length -1){
      setImageQuestionIndex(imageQuestionIndex + 1)
      return
    }
      
    Alert.alert('Correct!')
    setImageQuestionIndex(imageQuestionIndex + 1)
  }

  let onWrongAnswer = () => {
    Alert.alert('Please try another answer :<')
  }

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestions
        question={imageQuestion}
        onCorrectAnswer={onCorrectAnswer}
        onWrongAnswer={onWrongAnswer}
      />
    </View>
  )
}

export default App
