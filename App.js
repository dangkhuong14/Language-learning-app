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

  // lives left of the user
  const [lives, setLives] = useState(5)

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

  let restartGame = () => {
    setLives(5),
      setQuestionIndex(0)
  }

  let onCorrectAnswer = () => {
    setQuestionIndex(questionIndex + 1)
  }

  let onWrongAnswer = () => {
    if (lives <= 1) {
      setLives(0)
      Alert.alert(
        'Game over!',
        'Please try again',
        [{
          text: 'Try again',
          onPress: restartGame
        }]
      )
    }
    else {
      Alert.alert('Please try another answer :<')
      setLives(lives - 1)
    }
  }

  return (
    <Pressable
      style={styles.root}
      onPress={() => Keyboard.dismiss()}
    >
      <Header progress={questionIndex / questions.length} lives={lives} />
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
