import React from "react"
import {Text, Image, View} from "react-native"
import styles from './styles'
import PropTypes from "prop-types"

const ImageOption = ({image, text})=> {
    return (
        <View style={styles.optionContainer}>
          <Image 
            source={{ uri: image }}
            style={styles.optionImage}
            resizeMode='contain' />

          <Text style={styles.optionText}>{text}</Text>
        </View>
    )
}

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
}

ImageOption.defaultProps = {
  text: 'Default text',
}

export default ImageOption