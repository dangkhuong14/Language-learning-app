import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
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
})

export default styles