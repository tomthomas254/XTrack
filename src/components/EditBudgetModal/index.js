import {
    Dimensions,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useCallback, useEffect, useRef, useState} from 'react';
  import {Icons} from '../SVGIcons/SVGIcons/Icons';
  import {styles} from './style';
  import {
    AutocompleteDropdown,
    AutocompleteDropdownContextProvider,
  } from 'react-native-autocomplete-dropdown';
  import RealmService from '../../services';
  import {useFocusEffect} from '@react-navigation/native';
  
  const EditBudgetModal = ({data,hideEditBudgetModal}) => {
    const [input, setInput] = useState({
      amount: 0,
    });
  
    useFocusEffect(
      useCallback(() => {
        setInput(data)
      }, []),
    );
    // console.log(input)
  
    const saveResponse = async () => {
      // Todo:validation and setting error state and returning message as a helper.
      
      const response = await RealmService.updateBudget(input)
      console.log("response",response)
      hideEditBudgetModal();
    };
  
    return (
      <View style={[styles.ABModelContainer]}>
          <Text style={styles.header}>Edit</Text>
  
        
          <TextInput
            style={styles.input}
            placeholder={RealmService.getCatagoryById(input.catagory_id)?.name.toString()}
            editable={false}
            placeholderTextColor="grey" 
          />
          <TextInput
            style={styles.input}
            onChangeText={e => setInput({...input, amount: e})}
            value={input.amount}
            placeholder={input.amount.toString()}
            keyboardType="numeric"
            placeholderTextColor="lightgrey" 

          />
  
          <TouchableOpacity
            style={styles.saveButtonContainer}
            onPress={() => saveResponse()}>
            <Text style={[styles.saveButtonText]}>Save</Text>
          </TouchableOpacity>
      </View>
    );
  };
  
  export default EditBudgetModal;
  