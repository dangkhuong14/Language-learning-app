import React, { useState, useEffect } from 'react'
import { Pressable, Alert, Keyboard } from 'react-native'
import styles from './App.styles'
import questions from './assets/images/allQuestions'
import ImageMultipleChoiceQuestions from './src/Components/ImageMultipleChoiceQuestions'
import OpenEndedQuestion from './src/Components/OpenEndedQuestion'
import Header from './src/Components/Header/Header'

const App = () => {

  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(questions[0])

  // Everytime the image question index changes, update the image question: use useEffect
  useEffect(() => {
    console.log('useEffect in app.js is called');
    if (questionIndex >= questions.length) {
      Alert.alert('You won!')
      setQuestionIndex(0)
    }
    else {
      setQuestion(questions[questionIndex])
    }
  }, [questionIndex])

  console.log('Re-render App component');

  let onCorrectAnswer = () => {
    setQuestionIndex(questionIndex + 1)
  }

  let onWrongAnswer = () => {
    Alert.alert('Please try another answer :<')
  }

  return (
    <Pressable 
      style={styles.root}
      onPress={() => Keyboard.dismiss()}
      >
        <Header progress={questionIndex/questions.length}/>
      {
        question.type === 'IMAGE_MULTIPLE_CHOICE'
        &&
        <ImageMultipleChoiceQuestions
          question={question}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      }

      {
        question.type === 'OPEN_ENDED'
        &&
        <OpenEndedQuestion
          question={question}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      }
    </Pressable>
  )
}

export default App
