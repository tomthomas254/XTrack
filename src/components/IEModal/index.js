import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {styles} from './style';
import {
  AutocompleteDropdown,
  AutocompleteDropdownContextProvider,
} from 'react-native-autocomplete-dropdown';
import RealmService from '../../services';
import {useFocusEffect} from '@react-navigation/native';

const IEModel = ({
  expense,
  income,
  suggestionData,
  refreshHandle,
  closeModal,
}) => {
  const [input, setInput] = useState({
    catagory_id: '',
    title: '',
    description: '',
    amount: 0,
  });

  const [suggestionsList, setSuggestionsList] = useState();
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setSuggestionsList(suggestionData);
    }, []),
  );
  const dropdownController = useRef(null);
  const searchRef = useRef(null);

  // console.log(suggestionsList);

  const getSuggestions = useCallback(async q => {
    const filterToken = q.toLowerCase();
    if (typeof q !== 'string' || q === undefined) {
      setSuggestionsList(null);
      return;
    }
    setLoading(true);
    console.log(filterToken);
    console.log(suggestionData);
    console.log('suggestion', suggestionsList);

    const suggestions = suggestionData
      .filter(item => item.title.toLowerCase().includes(filterToken))
      .map(item => ({
        id: item.id,
        title: item.title,
      }));
    console.log(suggestions);
    setSuggestionsList(suggestions);
    setLoading(false);
  }, []);

  const submit = async () => {
    const date = new Date();
    const data = {...input, date: date};

    const response = expense?RealmService.addExpenses(data):RealmService.addIncome(data)
    return "Success"
  };

  const onClearPress = useCallback(() => {
    setSuggestionsList(suggestionData);
  }, []);

  return (
    <View
      style={[
        styles.IEModelContainer,
        expense
          ? {backgroundColor: 'rgba(241, 75, 75, 0.6)'}
          : income
          ? {backgroundColor: 'rgba(83, 193, 55, 0.8)'}
          : {backgroundColor: 'rgba(214, 214, 214, 0)'},
      ]}>
      <AutocompleteDropdownContextProvider>
        <Text style={[styles.header]}>
          {expense ? 'Expense' : income ? 'Income' : ''}
        </Text>
        <View
          style={[
            {flex: 1, alignItems: 'center', width: '100%'},
            Platform.select({ios: {zIndex: 1}}),
          ]}>
          {!income?<><AutocompleteDropdown
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
              maxWidth: '92%',
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
          </>:<></>}
          <TextInput
            style={[styles.input]}
            onChangeText={e => setInput({...input, title: e})}
            value={input.title}
            placeholder="Title"
            placeholderTextColor="lightgrey" 
            
          />
          <TextInput
            style={styles.input}
            onChangeText={e => setInput({...input, description: e})}
            value={input.description}
            placeholder="Description"
            placeholderTextColor="lightgrey" 

          />
          <TextInput
            style={styles.input}
            onChangeText={e => setInput({...input, amount: e})}
            value={input.amount}
            placeholder="Amount"
            keyboardType="numeric"
            placeholderTextColor="lightgrey" 

          />
          <TouchableOpacity
            style={[
              styles.saveButtonContainer,
              expense
                ? {backgroundColor: 'red'}
                : income
                ? {backgroundColor: 'green'}
                : {},
            ]}
            onPress={() => {
              submit();
              closeModal();
              refreshHandle();
            }}>
            <Text style={[styles.saveButtonText]}>Save</Text>
          </TouchableOpacity>
        </View>
      </AutocompleteDropdownContextProvider>
    </View>
  );
};

export default IEModel;
