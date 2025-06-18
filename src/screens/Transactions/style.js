import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#152d44',
        height:'100%',
    },
    TContainer: {
        
        paddingTop:'5%',
        backgroundColor:'white',
        margin:'5%',
        borderRadius:15,
        height:'95%'
        
    },
    itemContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%',
        // backgroundColor:'white',
        // borderRadius:10,
        // margin:10,
        alignSelf:'center',
        alignItems:'center',
        padding:'5%',
        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    },
    header:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:'2%',
        color:'black'
    },
    TCContainer:{
        flexDirection:'column'
    },
    title: {
        color:'black',
        fontSize:16
    },
    catagory:{
        color:'steelblue',
        fontSize:13,
        fontWeight:'bold'
    },
    DAIContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    DAContainer: {
        alignItems:'center',
        padding:'2%'
    },
    date: {
        color:'lightgrey',
        fontSize:12,
        textAlign:'center'
    },
    amount: {
        // color:'black',
        fontSize:16,
        fontWeight:'bold'
    },
    filterContainer:{
        padding:10,
    },
    filterButtonsContainer:{
        paddingHorizontal:18,
        borderWidth:2,
        borderColor:'lightgrey',
        borderRadius:15,
        marginHorizontal:10,
        minWidth:60,
        alignItems:'center',
        paddingVertical:5
    },
    filterButtonText:{
        color:'black',
        fontSize:14
    },
    totalContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'8%',
        marginVertical:'5%',
        borderBottomWidth:3,
        borderBottomColor:'black',
        paddingBottom:15
    },
    totalTitle:{
        fontWeight:'bold',
        fontSize:16,
        color:'black'
    },
    totalAmount:{
        fontWeight:'bold',
        fontSize:16,
        color:'red'
    }
})