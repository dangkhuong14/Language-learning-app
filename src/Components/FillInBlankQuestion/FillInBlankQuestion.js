import React, { useState } from "react";
import { View, Pressable, Text, Image } from "react-native"
import styles from './styles'
import twogirls from '../../../assets/images/twogirls.png'
import Button from '../Button'
import WordOption from "../WordOption";
import PropTypes from "prop-types";

const FillInBlankQuestion = ({ question, onCorrectAnswer, onWrongAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null)

    const onPressWordOption = (option) => {
        setSelectedOption(option)
    }

    const onPressCheckButton = (onCorrectAnswer, onWrongAnswer) => {
        let currentAnswer = question.question.replace('_', `${selectedOption.text}`)
        // If current answer is correct
        if(currentAnswer === question.answer) {
            onCorrectAnswer()
        }
        // If current answer is wrong
        else{
            onWrongAnswer()
            setSelectedOption(null)
        }
    }
    
    return (
        <>
            <Text style={styles.title}>Complete the sentence</Text>
            <Image
                source={twogirls}
                style={styles.image}
            />

                <View style={styles.questionContainer}>
                {
                    question.question.split(' ').map((word, index) => {
                        if (word !== '_')
                            return <View key={index}>
                                <Text style={styles.question}>{word} </Text>
                            </View>
                        return (

                            selectedOption 
                                ? 
                                    <WordOption 
                                        key={index}
                                        word={selectedOption.text}
                                        onPress={() => setSelectedOption(null)}
                                    />
                                :
                                    <WordOption 
                                        key={index}
                                        word={'___'}
                                        onPress={()=>{}}
                                    />
           
                        )
                    })
                }
                </View>

                <View style={styles.optionContainer}>
                    {
                        question.options.map((option, index) => {
                            return (
                                <WordOption 
                                    key={index}
                                    isSelected={option.text === selectedOption?.text}
                                    word={option.text}
                                    onPress={() => onPressWordOption(option)}
                                />
                            )
                        })
                    }
                </View>

            <Button
                text='Check'
                disabled={!selectedOption}
                onPress={() => onPressCheckButton(onCorrectAnswer, onWrongAnswer)}
            />
        </>
    )
}

FillInBlankQuestion.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            isBlank: PropTypes.bool
        })).isRequired
    }).isRequired,
    onCorrectAnswer: PropTypes.func,
    onWrongAnswer: PropTypes.func
}

FillInBlankQuestion.defaultProps = {
    onCorrectAnswer: () => {},
    onWrongAnswer: () => {}
}

export default FillInBlankQuestion