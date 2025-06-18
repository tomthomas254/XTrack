import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {
  Portal,
  PaperProvider,
  Modal,
  ActivityIndicator,
} from 'react-native-paper';
import {Icons} from '../../components/SVGIcons/SVGIcons/Icons';
import {styles} from './styles';
import {useCallback, useState} from 'react';
import AddBudgetModal from '../../components/AddBudgetModal';
import RealmService from '../../services';
import {useFocusEffect} from '@react-navigation/native';
import EditBudgetModal from '../../components/EditBudgetModal';

const Budget = ({navigation}) => {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);
  const [suggestionData, setSuggestionData] = useState();
  const [loading, setLoading] = useState(false);
  const [catagories, setCatagories] = useState();
  const [editBudget, setEditBudget] = useState(false);
  const [editData, setEditData] = useState();
  const [balance, setBalance] = useState(0)
  useFocusEffect(
    useCallback(() => {
      setVisible(false);
      setEditBudget(false);
      setLoading(true);
      const budgetData = RealmService.getAllBudgets()
      setData(budgetData);
      setBalance(Number(RealmService.getAllIncomes()[0].amount)-Number(budgetData.sum('amount')))
      const catagoriesData = RealmService.getAllCatagories();
      setCatagories(catagoriesData);
      const catData = catagoriesData.map(item => ({
        id: item._id,
        title: item.name,
      }));
      setSuggestionData(catData);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timeout);
    }, []),
  );

  const hideModal = () => setVisible(false);
  const hideEditBudgetModal = () => {
    setVisible(false);
    setVisible(false);
  };

  const handleEditBudget = data => {
    setEditData(data);
    setEditBudget(true);
    setVisible(true);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleEditBudget(item)}>
      <View style={styles.ECContainer}>
        <Text style={styles.catagory}>
          {RealmService.getCatagoryById(item.catagory_id).name}
        </Text>
      </View>
      <View style={styles.ABContainer}>
        <Text style={styles.amount}> &#8377;{item.amount}</Text>
        <Text
          style={[
            styles.balance,
            item.balance < 0 ? {color: 'red'} : {color: 'grey'},
          ]}>
          {' '}
          &#8377;{item.balance}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <PaperProvider>
      <Portal>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <View style={styles.BPContainer}>
              <Text style={styles.headerTitle}>Budget</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => setVisible(true)}>
                <Icons type="plus" width={24} height={24} color="steelblue" />
              </TouchableOpacity>
            </View>
            {loading ? (
              <View
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <ActivityIndicator animating={true} color="#152d44" size={48} />
              </View>
            ) : (
              <>
              <View style={{flexDirection:'row',marginHorizontal:'6%',justifyContent:'space-between', borderBottomWidth:4,borderBottomColor:'grey',paddingBottom:10}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>Balance</Text>
                <Text style={{color:'green',fontSize:16,fontWeight:'bold'}}>&#8377; {balance}</Text>
              </View>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item._id}
                  showsVerticalScrollIndicator={false}
                  // extraData={selectedId}
                />
              </>
            )}
          </View>
        </View>
        <Modal
          visible={visible}
          onDismiss={() => {
            setVisible(false);
            setEditBudget(false);
          }}
          contentContainerStyle={styles.contentcontainerStyle}>
          {editBudget ? (
            <EditBudgetModal
              hideEditBudgetModal={hideEditBudgetModal}
              data={editData}
            />
          ) : visible ? (
            <AddBudgetModal
              hideModal={hideModal}
              navigation={navigation}
              suggestionData={suggestionData}
            />
          ) : (
            <></>
          )}
        </Modal>
      </Portal>
    </PaperProvider>
  );
};

export default Budget;
