import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ProgressBar from "../ProgressBar";
import Heart from "../../../assets/images/heart.png"

const Header = ({ progress, lives }) => {
    return (
        <View style={styles.root}>
            <ProgressBar progress={progress} />
            <Image 
                source={Heart}
                style={styles.icon} 
                resizeMode="contain"
            />
            <Text style={styles.lives}>{lives}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
    },

    icon: {
        height: 30,
        width: 30,
        marginHorizontal: 10,
    }, 

    lives: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red'
    },
})

export default Header