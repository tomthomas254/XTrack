import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#152d44',
        height:'100%'
    },
    headerText:{
        margin:'5%',
        fontSize:28,
        fontWeight:'bold',
        color:'white',
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: '5%',
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding:'5%'

    },
    detailsContainer: {
    },
    titleText:{
        fontSize:18,

    },
    desc:{
        fontSize:14,
        color:'lightgrey',
        marginBottom:'3%'
    },
    trackerContainer:{
        flexDirection:'row'
    },
    itemTracker: {
        padding: 5,
        borderRadius: '50%',
        // marginRight: '0.2%',
        // marginBottom: '3%',
        borderWidth: 1,
        borderColor: 'lightgrey',
        margin:3,
        marginRight:5

    },
    containerStyle:{
        marginHorizontal:10,
        borderRadius:25,
        padding:15
    },
    addIcon:{
        backgroundColor:'white',
        borderRadius:30,
        width:55,
        height:55,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:10,
        right:10,
        zIndex:1,
        borderWidth:2,
        borderColor:'lightgrey'
    }
})