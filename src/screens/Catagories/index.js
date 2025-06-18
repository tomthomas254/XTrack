import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import RealmService from '../../services';
import {Icons} from '../../components/SVGIcons/SVGIcons/Icons';

const Catagories = () => {
  const [input, setInput] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState({});

  const loadData = () => {
    setLoading(true);
    setData(null);
    const timeout = setTimeout(() => {
      const catagoriesData = RealmService.getAllCatagories();
      setData(catagoriesData);
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  };
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const saveData = () => {
    try {
      RealmService.addCatagory(input);
    } catch (error) {
      console.error(error);
    }
    loadData();
    setInput({name: ''});
  };

  const deleteCatagory = id => {
    try {
      RealmService.deleteCatagory(id);
    } catch (error) {
      console.error(error);
    }
    loadData();
  };
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={e => setInput({name: e})}
        value={input.name}
        placeholder="Catagory Name"
      />
      <TouchableOpacity
        style={styles.saveButtonContainer}
        onPress={() => saveData()}
        disabled={!input.name?true:false}
        >
        <Text style={[styles.saveButtonText]}>Save</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {loading ? (
          <View
            style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
            <ActivityIndicator animating={true} color="#152d44" size={48} />
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View key={item._id} style={styles.catagoryCard}>
                <Text style={styles.catagoryName}>{item.name}</Text>
                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => deleteCatagory(item._id)}>
                  <Icons type="delete" width={24} height={24} color="grey" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            // extraData={selectedId}
          />
        )}
      </View>
    </View>
  );
};

export default Catagories;
