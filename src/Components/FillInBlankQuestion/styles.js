import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'stretch',
    },

    image: {
        width: '100%',
        height: '30%'
    },

    questionContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        
        marginTop: 85,
    }, 

    optionContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    question:{
        fontSize: 20,
    },
    
})

export default styles;