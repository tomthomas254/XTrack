import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#152d44',
        // paddingTop: '8%'
    },
    container: {
        borderRadius: 15,
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        height:'95%',
        margin:'5%'

    },
    headerTitle: {
        backgroundColor: 'white',
        textAlign: 'center',
        width: '92%',
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        padding: '6%',


    },
    BPContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        marginRight: '5%',
        position: 'absolute',
        right: 5,
        borderWidth: 2,
        borderColor: 'grey',
        padding: 2,
        borderRadius: '50%',
        top: '33%'
    },
    itemContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '92%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        padding: '4%',
        // borderRadius: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey'


    },
    ECContainer: {
        justifyContent: 'center'
    },
    catagory: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'

    },
    ABContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    balance: {
        fontSize: 13,
    },
    contentcontainerStyle: {
        width: '95%',
        alignSelf: 'center',
    }
})