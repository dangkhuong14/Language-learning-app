import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native"
import styles from './styles'
import twogirls from '../../../assets/images/twogirls.png'
import Button from '../Button'
import WordOption from "../WordOption";
import PropTypes from "prop-types";

const FillInBlankQuestion = ({ question, onCorrectAnswer, onWrongAnswer, isOnLastLiveOfFirstQuestion }) => {
    const [parts, setParts] = useState(question.questionParts)

    useEffect(() => {
        setParts(question.questionParts)
    }, [question])

    const addOptionToSelectedOptions = (option) => {
        if (ifAllBlanksFilled())
            return

        let isModified = false
        setParts(existingParts => existingParts.map(part => {
            if (part.isBlank && !part.selected && !isModified) {
                isModified = true
                return { ...part, selected: option }
            }
            return { ...part }
        }))
    }

    const uncheckWordOption = (selected) => {
        setParts(existingParts => existingParts.map(part => {
            if (part.selected === selected)
                return { ...part, selected: null }
            return { ...part }
        }))
    }

    const onPressCheckButton = (onCorrectAnswer, onWrongAnswer) => {
        let isCorrect = true
        parts.forEach(part => {
            if (part.isBlank) {
                if (part.selected !== part.text)
                    isCorrect = false
            }
        })
        // If current answer is correct
        if (isCorrect) {
            onCorrectAnswer()
        }
        // If current answer is wrong
        else {
            onWrongAnswer()
            if (isOnLastLiveOfFirstQuestion)
                setParts([...question.questionParts])
        }
    }

    const checkIsSelected = (option) => {
        let nSelectedOption = 0
        parts.forEach(part => {
            if (part.selected === option)
                nSelectedOption++
        })
        if (nSelectedOption !== 0)
            return true
        else
            return false
    }

    const ifAllBlanksFilled = () => parts.filter(part => part.isBlank && !part.selected).length === 0

    return (
        <>
            <Text style={styles.title}>Complete the sentence</Text>
            <Image
                source={twogirls}
                style={styles.image}
            />

            <View style={styles.questionContainer}>
                {
                    parts.map((part, index) => {
                        if (!part.isBlank) {
                            return (
                                <View key={index}>
                                    <Text style={styles.question}>{part.text} </Text>
                                </View>
                            )
                        }

                        if (part.selected) {
                            return (<WordOption
                                key={index}
                                word={part.selected}
                                onPress={() => uncheckWordOption(part.selected)}
                            />)
                        }
                        else {
                            return (
                                <WordOption
                                    key={index}
                                    word={'___'}
                                    disable={true}
                                />
                            )
                        }
                    })
                }
            </View>

            <View style={styles.optionContainer}>
                {
                    question.options.map((option, index) => {
                        return (
                            <WordOption
                                key={index}
                                isSelected={checkIsSelected(option)}
                                disable={checkIsSelected(option)}
                                word={option}
                                onPress={() => addOptionToSelectedOptions(option)}
                            />
                        )
                    })
                }
            </View>

            <Button
                text='Check'
                disabled={!ifAllBlanksFilled()}
                onPress={() => onPressCheckButton(onCorrectAnswer, onWrongAnswer)}
            />
        </>
    )
}

FillInBlankQuestion.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        questionParts: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            isBlank: PropTypes.bool
        })).isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    onCorrectAnswer: PropTypes.func,
    onWrongAnswer: PropTypes.func,
    isOnLastLiveOfFirstQuestion: PropTypes.bool
}

FillInBlankQuestion.defaultProps = {
    onCorrectAnswer: () => { },
    onWrongAnswer: () => { },
    isOnLastLiveOfFirstQuestion: false
}

export default FillInBlankQuestion