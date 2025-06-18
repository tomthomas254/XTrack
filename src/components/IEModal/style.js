import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    IEModelContainer:{
        borderRadius:20,
        paddingBottom:'5%',
        width:'100%',
        borderWidth:4,
        borderColor:'white',
        minHeight:'88%',
    },
    header:{
        color:'white',
        fontWeight:'bold',
        fontSize:24,
        textAlign:'center',
        width:'40%',
        paddingBottom:'4%',
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        marginBottom:'8%',
        borderBottomWidth:4,
        borderColor:'white',
        alignSelf:'center',
        marginTop:'8%'

    },
    input:{
        backgroundColor:'white',
        width:'90%',
        borderRadius:8,
        marginTop:20,
        color:'black',
        padding:10,
        height:60
    },
    saveButtonContainer:{
        padding:10,
        borderRadius:10,
        width:'25%',
        marginTop:25,
    },
    saveButtonText:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
    },
    autocomplete:{
        backgroundColor:'white',
        width:'100%',
        borderRadius:8,
        color:'black',
        
    }

})