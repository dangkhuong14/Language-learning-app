import React from "react";
import { Pressable, Text } from "react-native";
import styles from './styles'
import PropTypes from "prop-types";

const WordOption = ({ word, onPress, isSelected, disable}) => {
    return (
        <Pressable
            style={[styles.wordContainer, isSelected && styles.selectedWordContainer]} 
            onPress={onPress}
            disabled={disable}
        >
            <Text style={[styles.text, isSelected && styles.selectedText]}>{word}</Text>
        </Pressable>
    )
}

WordOption.propTypes = { 
    word: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    isSelected: PropTypes.bool,
    onPress: PropTypes.func
}

WordOption.defaultProps = {
    onPress: () => {},
    disable: false,
    isSelected: false,
}

export default WordOption