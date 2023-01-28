import React from "react";
import { Pressable, Text } from "react-native";
import styles from './styles'
import PropTypes from "prop-types";

const WordOption = ({ word, onPress, isSelected}) => {
    return (
        <Pressable
            style={[styles.wordContainer, isSelected && {backgroundColor: 'lightgrey'}]} 
            onPress={onPress}
        >
            <Text style={[styles.text, isSelected && {color: 'lightgrey'}]}>{word}</Text>
        </Pressable>
    )
}

WordOption.propTypes = { 
    word: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func
}

WordOption.defaultProps = {
    onPress: () => {},
    isSelected: false
}

export default WordOption