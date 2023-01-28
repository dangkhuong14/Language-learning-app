import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
    },

    selectedText:{
        color: '#dbdbdb',       
    },

    wordContainer: {
        justifyContent:'center',
        borderWidth: 2,
        borderRadius: 13,
        borderColor: 'lightgrey',
        borderBottomWidth: 5,
        
        marginHorizontal: 3,
        padding: 5,
        paddingHorizontal: 10
    },

    selectedWordContainer: {
        backgroundColor: '#dbdbdb',
        borderColor: '#dbdbdb'
    },
})

export default styles