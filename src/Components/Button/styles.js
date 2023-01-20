import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        //layout
        backgroundColor: '#58CC02',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,

        //spacing
        marginVertical: 10,

        //border
        borderRadius: 10,
        borderColor: '#57A600',
        borderBottomWidth: 5
    },

    disabledContainer: {
        backgroundColor: 'lightgrey',
        borderColor: 'grey'
    },

    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        borderColor: 'white',
        borderBottomWidth: 1.5,
    },
    
})

export default styles