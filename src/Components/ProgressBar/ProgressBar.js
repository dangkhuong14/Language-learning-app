import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({progress}) => {
    return (
        <View style={styles.bg}>
            <View style={[styles.fg, {width: `${progress * 100}%`}]}>
                <View style={[styles.highlight]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor: 'lightgrey',
        flex: 1,
        height: 25,
        borderRadius: 15,
    },

    fg: {
        backgroundColor: '#FAC800',
        height: 25,
        borderRadius: 15,
    },

    highlight:{
        backgroundColor: '#FAD131',
        alignSelf: 'center',
        width: '90%',
        height: 5,
        marginTop: 5,
        borderRadius: 5
    },

})

export default ProgressBar