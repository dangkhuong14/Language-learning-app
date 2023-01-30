import React, { useState, useRef, useEffect } from "react";
import { View, Pressable, Text, Image } from "react-native"
import styles from './styles'
import twogirls from '../../../assets/images/twogirls.png'
import Button from '../Button'
import WordOption from "../WordOption";
// import PropTypes from "prop-types";

const FillInBlankQuestion = ({ question, onCorrectAnswer, onWrongAnswer }) => {
    const [selectedOptions, setSelectedOptions] = useState([])

    let numberOfBlanks = useRef(0)
    
    useEffect(() => {
        numberOfBlanks.current = question.questionParts.filter(part => part.isBlank === true).length
    }, [])

    useEffect(() => {
        console.log('selectedOptions:')
        console.log( selectedOptions);

    })

    let optionsIndexToRender = -1

    const stringToArray = str => str.split(' ')

    const addOptionToSelectedOptions = (option) => {
        return setSelectedOptions(options => {
            let indexOfFirstNullOption = options.findIndex(item => item === null)
            console.log('indexOfNull' + indexOfFirstNullOption);

            if(indexOfFirstNullOption !== -1){
                console.log('option' + option);
                options[indexOfFirstNullOption] = option
                return [...options]
            }

            if(options.length < numberOfBlanks.current){
                
                return [...options, option]
            }
            return options
        })
    }

    const uncheckWordOption = (word, e) => {
        // console.log('word: ' + word);
        // return setSelectedOptions(options => {
        //     options.forEach((option, index) => {
        //         if (option === word)
        //             options[index] = null
        //     })
        //     console.log('options:');
        //     console.log(options);
        //     return [...options]
        // })


        console.log(e);
    }

    const onPressCheckButton = (onCorrectAnswer, onWrongAnswer) => {
        // If current answer is correct
        if(selectedOption === question.answer) {
            onCorrectAnswer()
        }
        // If current answer is wrong
        else{
            onWrongAnswer()          
        }
        setSelectedOption(null)
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
                    question.questionParts.map((part, index) => {
                        if (!part.isBlank)
                        {
                            return (
                                <View key={index}>
                                    <Text style={styles.question}>{part.text} </Text>
                                </View>
                            )
                        }
                        
                        if (selectedOptions.length > 0 ){
                            optionsIndexToRender = optionsIndexToRender + 1
                            if (selectedOptions[optionsIndexToRender] === null){
                                return (
                                    <WordOption 
                                        key={index}
                                        word={'___'}
                                        disable={true}
                                    />
                                )                        
                            }
                            return(
                                <WordOption 
                                    key={index}
                                    word={selectedOptions[optionsIndexToRender]}
                                    onPress={(e) => uncheckWordOption(selectedOptions[optionsIndexToRender], e)}
                                />
                            )
                        }
                        return (
                            <WordOption 
                                key={index}
                                word={'___'}
                                disable={true}
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
                                    isSelected={selectedOptions.includes(option)}
                                    disable= {selectedOptions.includes(option)}
                                    word={option}
                                    onPress={() => addOptionToSelectedOptions(option)}
                                />
                            )
                        })
                    }
                </View>
            <Button
                text='Check'
                disabled={!(selectedOptions.length === numberOfBlanks.current 
                                && 
                            selectedOptions.findIndex(option => option === null) === -1)}
                onPress={() => onPressCheckButton(onCorrectAnswer, onWrongAnswer)}
            />
        </>
    )
}

// FillInBlankQuestion.propTypes = {
//     question: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         type: PropTypes.string.isRequired,
//         questionParts: PropTypes.shape({
//             text: PropTypes.string.isRequired,
//             isBlank: PropTypes.bool
//         }).isRequired,
//         options: PropTypes.arrayOf(PropTypes.string).isRequired
//     }).isRequired,
//     onCorrectAnswer: PropTypes.func,
//     onWrongAnswer: PropTypes.func
// }

// FillInBlankQuestion.defaultProps = {
//     onCorrectAnswer: () => {},
//     onWrongAnswer: () => {}
// }

export default FillInBlankQuestion