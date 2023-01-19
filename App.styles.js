import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    root: {
        flexDirection:'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 30,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'stretch',
    },

    optionsContainer: {
        flex: 1,
        flexDirection:'row',
        // fexWrap: su dung khi item vuot qua main axis cua container
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',

        // alignContent: su dung khi co flexWrap, dieu chinh kich thuoc cua khong gian sau khi xuong dong theo cross axis
        alignContent: 'space-between'
    },

    optionContainer: {
        //boder
        borderWidth: 2,
        borderColor: '#82c4e4',
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

    optionText:{

    },
})

export default styles