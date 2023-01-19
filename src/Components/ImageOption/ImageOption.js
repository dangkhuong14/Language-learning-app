import React from "react"
import {Text, Image, View} from "react-native"
import styles from './styles'

const ImageOption = ()=> {
    return (
        <View style={styles.optionContainer}>
          <Image 
            source={{ uri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png' }}
            style={styles.optionImage}
            resizeMode='contain' />

          <Text style={styles.optionText}>glass</Text>
        </View>
    )
}


export default ImageOption