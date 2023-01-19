import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    optionContainer: {
        //boder
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 10,
        borderBottomWidth: 4,

        //size
        height: '48%',
        width: '48%',

        //spacing
        padding: 10,

        // container layout
        flexDirection: 'column',
        alignItems: 'center',


    },

    optionImage: {
        width: '100%',
        //height: 
        flex: 1,
    },

    optionText: {
        fontWeight: 'bold',
    },

    selectedContainer: {
        backgroundColor: '#DDF4FE',
        borderColor: '#81D5Fe',
    },

    selectedText:{
        fontWeight: 'bold',
        color: '#40BEF7'
    },
})

export default styles