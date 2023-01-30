import React, { useState } from "react";
import { View, Pressable, Text, Image } from "react-native"
import styles from './styles'
import twogirls from '../../../assets/images/twogirls.png'
import Button from '../Button'
import WordOption from "../WordOption";
import PropTypes from "prop-types";

const FillInBlankQuestion = ({ question, onCorrectAnswer, onWrongAnswer }) => {
    const [parts, setParts] = useState(question.questionParts)

    const addOptionToSelectedOptions = (option) => {
        for (let i = 0; i < parts.length; i++) {
            if (parts[i].isBlank && !parts[i].selected) {
                parts[i].selected = option
                break
            }
        }
        return setParts([...parts])
    }

    const uncheckWordOption = (index) => {
        parts[index].selected = null
        setParts([...parts])
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
        }

        parts.forEach(part => {
            if (part.selected) {
                delete part.selected
            }
        })

        // Can not use setParts ?
        // setParts(question.questionParts)
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

    const ifAllBlanksFilled = () => {
        return (parts.filter(part => part.selected).length === question.questionParts.filter(part => part.isBlank).length)
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
                                onPress={() => uncheckWordOption(index)}
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
    onWrongAnswer: PropTypes.func
}

FillInBlankQuestion.defaultProps = {
    onCorrectAnswer: () => { },
    onWrongAnswer: () => { }
}

export default FillInBlankQuestion