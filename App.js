import React, { useState, useEffect } from 'react'
import { Pressable, Alert, Keyboard, ActivityIndicator} from 'react-native'
import styles from './App.styles'
import questions from './assets/images/allQuestions'
import ImageMultipleChoiceQuestions from './src/Components/ImageMultipleChoiceQuestions'
import OpenEndedQuestion from './src/Components/OpenEndedQuestion'
import Header from './src/Components/Header/Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FillInBlankQuestion from './src/Components/FillInBlankQuestion'


const App = () => {

  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(questions[0])

  // lives left of the user
  const [lives, setLives] = useState(5)

  // check if data was loaded before save data at the first time
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if(hasLoaded){
      saveData()
    }

    if (questionIndex >= questions.length) {
      Alert.alert('You won!')
      setQuestionIndex(0)
      setLives(5)
    }
    else {
      setQuestion(questions[questionIndex])
    }
  }, [questionIndex, lives])

  useEffect(() => {
    loadData()   
  }, [])

  const loadData = async () => {
    try{
      // load lives data
      let storedLives = parseInt(await AsyncStorage.getItem('lives'))
      // load current question index data
      let storedQuestionIndex = parseInt(await AsyncStorage.getItem('questionIndex'))
      if (storedQuestionIndex && storedLives){
        setLives(storedLives)
        setQuestionIndex(storedQuestionIndex)   
      }
      setHasLoaded(true)
    }
    catch(e) {
      console.log(e);
    }
  }

  const saveData = async () => {
    try{
      await AsyncStorage.setItem('lives', lives.toString())
      await AsyncStorage.setItem('questionIndex', questionIndex.toString())
    }
    catch(e) {
      console.log(e);
    }
  }

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

  if(!hasLoaded){
    return <ActivityIndicator />
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

      {
        question.type === 'FILL_THE_BLANK'
        &&
        <FillInBlankQuestion 
          question={question} 
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      }
  
    </Pressable>
  )
}

export default App
