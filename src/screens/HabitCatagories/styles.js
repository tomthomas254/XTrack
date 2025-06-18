import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#152d44',
    height: '100%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: '80%',
    width: '90%',
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 8,
    marginTop: '15%',
    color: 'black',
    padding: 10,
    height: 40,
  },
  catagoryCard: {
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
    padding:5
  },
  catagoryTitle: {
    fontSize: 16,
    padding: 5,
    fontWeight:'bold'
  },
  catagoryDescription:{
    fontSize:12,
    color:'grey',
    marginLeft:5

  },
  saveButtonContainer: {
    padding: 10,
    borderRadius: 10,
    width: '25%',
    marginTop: 25,
    borderWidth: 3,
    borderColor: 'white',
    alignSelf: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  delete:{
    alignItems:'center',
    justifyContent:'center'
  }
});
