import React from "react";
import {View, StyleSheet, Text} from "react-native";
import ProgressBar from "../ProgressBar";

const Header = ({progress}) => {
    return(
        <View style={styles.root}>
            <ProgressBar progress={progress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignSelf:'stretch'
    },
})

export default Header