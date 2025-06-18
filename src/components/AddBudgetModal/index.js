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

const AddBudgetModal = ({hideModal, navigation, suggestionData}) => {
  const [input, setInput] = useState({
    catagory_id: '',
    amount: 0,
  });
  const [data, setData] = useState();
  const [suggestionsList, setSuggestionsList] = useState();
  const [loading, setLoading] = useState();
  const dropdownController = useRef(null);
  const searchRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      setSuggestionsList(suggestionData);
    }, []),
  );

  const getSuggestions = useCallback(async q => {
    const filterToken = q.toLowerCase();
    if (typeof q !== 'string' || q === undefined) {
      setSuggestionsList(null);
      return;
    }
    setLoading(true);

    const suggestions = suggestionData
      .filter(item => item.title.toLowerCase().includes(filterToken))
      .map(item => ({
        id: item.id,
        title: item.title,
      }));
    setSuggestionsList(suggestions);
    setLoading(false);
  }, []);

  const onClearPress = useCallback(() => {
    setSuggestionsList(suggestionData);
  }, []);

  const saveResponse = async () => {
    // Todo:validation and setting error state and returning message as a helper.
    try{
      RealmService.addBudget(input)
    }
    catch(error){
      console.error(error)
    }
    console.log('input', input);
    hideModal();
  };

  return (
    <View style={[styles.ABModelContainer]}>
      <AutocompleteDropdownContextProvider>
        <Text style={styles.header}>Add</Text>
        {
          <AutocompleteDropdown
            ref={searchRef}
            controller={controller => {
              dropdownController.current = controller;
            }}
            onChangeText={getSuggestions}
            onClear={onClearPress}
            // onOpenSuggestionsList={onOpenSuggestionsList}
            loading={loading}
            direction={Platform.select({ios: 'down', android: 'down'})}
            dataSet={suggestionsList}
            onSelectItem={item => {
              item && setInput({...input, catagory_id: item.id});
            }}
            debounce={600}
            suggestionsListMaxHeight={Dimensions.get('window').height * 0.25}
            useFilter={false}
            textInputProps={{
              placeholder: 'Select Catagory...',
              autoCorrect: false,
              autoCapitalize: 'none',
              style: {
                borderRadius: 25,
                backgroundColor: 'white',
                color: 'black',
                paddingLeft: 18,
                fontSize: 14,
              },
            }}
            rightButtonsContainerStyle={{
              right: 8,
              height: 30,
              alignSelf: 'center',
            }}
            inputContainerStyle={styles.autocomplete}
            suggestionsListContainerStyle={{
              backgroundColor: '#383b42',
              maxWidth:'92%'
            }}
            containerStyle={{width: '90%'}}
            renderItem={(item, text) => (
              <Text style={{color: '#fff', padding: 15}}>{item.title}</Text>
            )}
            inputHeight={60}
            showChevron={false}
            closeOnBlur={true}
            // onBlur={() => dropdownController.current.toggle()}
            //  showClear={false}
          />
        }
        <TouchableOpacity
          style={styles.addCatagoryContainer}
          onPress={() => {
            navigation.navigate('Catagories');
          }}>
          <Icons type="plus" width={24} height={24} color="white" />
          <Text style={styles.addCatagoryText}>Add Catagory</Text>
        </TouchableOpacity>
          
        <TextInput
          style={styles.input}
          onChangeText={e => setInput({...input, amount: e})}
          value={input.amount}
          placeholder="Amount"
          keyboardType="numeric"
          placeholderTextColor="lightgrey" 

        />

        <TouchableOpacity
          style={styles.saveButtonContainer}
          onPress={() => saveResponse()}>
          <Text style={[styles.saveButtonText]}>Save</Text>
        </TouchableOpacity>
      </AutocompleteDropdownContextProvider>
    </View>
  );
};

export default AddBudgetModal;
