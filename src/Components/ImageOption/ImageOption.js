import React from "react"
// Pressable tuong tu View nhung co onPress prop
import {Text, Image, View, Pressable} from "react-native"
import styles from './styles'
import PropTypes from "prop-types"

const ImageOption = ({image, text, isSelected, onPress})=> {
    return (
        <Pressable 
          onPress={onPress}
          style={[styles.optionContainer, isSelected && styles.selectedContainer]}>
          <Image 
            source={{ uri: image }}
            style={styles.optionImage}
            resizeMode='contain' />

          <Text style={isSelected === false ? styles.optionText : styles.selectedText}>{text}</Text>
        </Pressable>
    )
}

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
}

ImageOption.defaultProps = {
  text: 'Default text',
  isSelected: false,
  onPress: () => {},
}

export default ImageOption