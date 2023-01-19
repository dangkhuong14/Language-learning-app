import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        width: 200,

        flex: 1,
        flexWrap: 'wrap-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },

    text: {
        fontSize: 20,
        color: 'white',
    },

    item1: {

        flexBasis: '70%',
        height: 700,
        borderWidth: 2,
        boderRadious: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2a80b9',
    },

    item2: {
        height: 300,
        flexBasis: '40%',
        borderWidth: 2,
        boderRadious: 20,
        backgroundColor: '#8f44ad',
    },

    item3: {
        alignSelf: 'flex-start',
        flexBasis: '40%',
        height: 400,
        borderWidth: 2,
        boderRadious: 20,
        alignItems: 'center',

        backgroundColor: '#16a086',
    },

    item4: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#f1c40f',
    },

    item5: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#e77e23',
    },
    item6: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#c1392b',
    },

})

export default styles