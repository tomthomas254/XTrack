import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {Icons} from '../../components/SVGIcons/SVGIcons/Icons';
import {useCallback, useEffect, useState} from 'react';
import {styles} from './style';
import {formatDate} from '../../utils/utils';
import {useFocusEffect} from '@react-navigation/native';
import RealmService from '../../services';
import {filterConstants} from '../../Constants';

const Transactions = ({navigation}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [catagories, setCatagories] = useState();
  const [filterOption, setFilterOption] = useState('Day');
  const [totalExpense, setTotalExpense] = useState(0);

  const loadData = () => {
    setLoading(true);
    setData(null);
    const expenseData = RealmService.getExpenses(filterOption);
    setTotalExpense(expenseData.sum('amount'));
    const incomeData = RealmService.getAllIncomes();
    const transactions =filterOption==="All"||filterOption==="Month"? [...expenseData, ...incomeData]:[...expenseData];
    
    setData(transactions);
    setCatagories(RealmService.getAllCatagories());
    const timeout = setTimeout(() => {
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

  useEffect(() => {
    loadData();
  }, [filterOption]);
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.TCContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.catagory}>
          {RealmService.getCatagoryById(item.catagory_id)?.name}
        </Text>
      </View>
      <View style={styles.DAIContainer}>
        <View style={styles.DAContainer}>
          <Text style={styles.date}>{formatDate(item.date)}</Text>
          <Text
            style={[
              styles.amount,
              item.type === 'income' ? {color: 'green'} : {color: 'black'},
            ]}>
            {' '}
            &#8377;{item.amount}
          </Text>
        </View>
        {item.type === 'income' ? (
          <Icons type="incoming" width={24} height={24} color="green" />
        ) : (
          <Icons type="outgoing" width={24} height={24} color="red" />
        )}
      </View>
    </View>
  );

  const filterButtons = ({item}) => (
    <TouchableOpacity
      style={[
        styles.filterButtonsContainer,
        filterOption === item && {backgroundColor: '#152d44'},
      ]}
      onPress={() => {
        setFilterOption(item);
      }}>
      <Text
        style={[
          styles.filterButtonText,
          filterOption === item && {color: 'white', fontWeight: 'bold'},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.TContainer}>
          <Text style={styles.header}>Transactions</Text>
          <View style={styles.filterContainer}>
            <FlatList
              data={filterConstants}
              renderItem={filterButtons}
              keyExtractor={(_, index) => index}
              horizontal
              showsHorizontalScrollIndicator={false}
              // extraData={selectedId}
            />
          </View>

          {loading ? (
            <View
              style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
              <ActivityIndicator animating={true} color="#152d44" size={48} />
            </View>
          ) : (
            <>
              <View style={styles.totalContainer}>
                <Text style={styles.totalTitle}>Total </Text>
                <Text style={styles.totalAmount}>&#8377; {totalExpense}</Text>
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
    </>
  );
};

export default Transactions;
