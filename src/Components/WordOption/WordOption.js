import React from "react";
import { Pressable, Text } from "react-native";
import styles from './styles'
import PropTypes from "prop-types";

const WordOption = ({ word, onPress}) => {
    return (
        <Pressable
            style={styles.wordContainer} 
            onPress={onPress}
        >
            <Text style={styles.text}>{word}</Text>
        </Pressable>
    )
}

WordOption.propTypes = { 
    word: PropTypes.string.isRequired,
    onPress: PropTypes.func
}

WordOption.defaultProps = {
    onPress: () => {}
}

export default WordOption