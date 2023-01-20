import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',

        alignSelf: 'flex-start',
    },

    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',

        // spacing 
        paddingLeft: 10,
        margin: 10,
        marginBottom: 0,
    },

    mascot: {

        // Responsive 
        width: '30%',
        aspectRatio: 3 / 4,

    },

    sentenceContainer: {

        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 25,

        //spacing
        padding: 10,

    },

    sentence: {
        fontSize: 16,
    },

    textInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgrey',
        alignSelf: 'stretch',
        backgroundColor: '#ebebeb',
        fontSize: 16,

        padding: 10
    },
})

export default styles