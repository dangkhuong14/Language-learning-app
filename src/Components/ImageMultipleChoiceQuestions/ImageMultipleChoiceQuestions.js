import React, { useState } from "react";
import { View, Text } from "react-native";
import ImageOption from '../ImageOption'
import Button from '../Button'
import styles from './styles'
import PropTypes from 'prop-types'

const ImageMultipleChoiceQuestions = ({ question, onCorrectAnswer, onWrongAnswer }) => {
    const [selected, setSelected] = useState(null)

    let onButtonPress = (onCorrectAnswer, onWrongAnswer) => {
        if (selected.correct) {
            onCorrectAnswer()
            setSelected(null)
        }
        else {
            onWrongAnswer()
            setSelected(null)
        }
    }

    return (
        <>
            <Text style={styles.title}>{question.question}</Text>
            <View style={styles.optionsContainer}>
                {
                    question.options.map((option) =>
                        <ImageOption
                            key={option.id}
                            image={option.image}
                            text={option.text}
                            isSelected={selected?.id === option.id}
                            onPress={() => { setSelected(option) }}
                        />
                    )
                }
            </View>
            <Button
                text='Check'
                disabled={!selected}
                onPress={() => onButtonPress(onCorrectAnswer, onWrongAnswer)}
            />
        </>
    )
}

ImageMultipleChoiceQuestions.propTypes = {
    question: PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                correct: PropTypes.bool
            }).isRequired
        ).isRequired
    }).isRequired,
    onCorrectAnswer: PropTypes.func,
    onWrongAnswer: PropTypes.func,
}

ImageMultipleChoiceQuestions.defaultProps = {
    onCorrectAnswer: () => {},
    onWrongAnswer: () => {},
}

export default ImageMultipleChoiceQuestions