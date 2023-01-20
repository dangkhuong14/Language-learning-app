import React, { useState } from "react";
import { Text, TextInput, View, Image } from 'react-native'
import styles from "./styles";
import mascot from '../../../assets/images/mascot.png'
import Button from '../Button'
import PropTypes from 'prop-types'

const OpenEndedQuestion = ({question, onCorrectAnswer, onWrongAnswer}) => {

    const [input, setInput] = useState('')

    let onButtonPress = (onCorrectAnswer, onWrongAnswer) => {
        if(input.toLowerCase().trim() === question.answer.toLowerCase().trim()){
            onCorrectAnswer()
        }
        else{
            onWrongAnswer()
        }
        setInput('')
    }

    return (
        <>
            <Text style={styles.title}>Translate this sentence</Text>
            <View style={styles.row}>
                <Image
                    source={mascot}
                    style={styles.mascot}
                    resizeMode="contain"
                />
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>

            </View>
            <TextInput
                placeholder="Type in English"
                value={input}
                onChangeText={setInput}
                multiline
                style={styles.textInput}
                textAlignVertical='top'
            />
            <Button
                text='Check'
                disabled={!input}
                onPress={() => onButtonPress(onCorrectAnswer, onWrongAnswer)}
            />
        </>
    )
}

OpenEndedQuestion.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }).isRequired,
    onCorrectAnswer: PropTypes.func,
    onWrongAnswer: PropTypes.func,
}

OpenEndedQuestion.defaultProps = {
    onCorrectAnswer: () => {},
    onWrongAnswer: () => {},
}

export default OpenEndedQuestion