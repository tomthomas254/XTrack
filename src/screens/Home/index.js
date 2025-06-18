import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './style';
import {
  FAB,
  Portal,
  PaperProvider,
  Modal,
  ActivityIndicator,
} from 'react-native-paper';
import {Icons} from '../../components/SVGIcons/SVGIcons/Icons';
import IEModel from '../../components/IEModal';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import RealmService from '../../services';
import {useFocusEffect} from '@react-navigation/native';
import {DASHBOARDFILTERS} from '../../Constants';
import {dailyBudget, weeklyBudget} from '../../utils/utils';

const Home = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expense, setExpense] = useState(false);
  const [income, setIncome] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [catagories, setCatagories] = useState();
  const [suggestionData, setSuggestionData] = useState();
  const [budget, setBudget] = useState();
  const [loading, setLoading] = useState(true);
  const [filterOption, setFilterOption] = useState('Day');
  const fill = ((totalIncome - totalExpense) / totalIncome) * 100;

  const loadData = async () => {
    setLoading(true);

    const allCatagories = RealmService.getAllCatagories();
    setCatagories(allCatagories);
    const dataCat = allCatagories.map(item => ({
      id: item._id,
      title: item.name,
    }));
    setSuggestionData(dataCat);
    setTotalIncome(RealmService.getTotalIncome());
    setTotalExpense(RealmService.getTotalExpense);
    const budgetData = RealmService.getAllBudgets();
    setBudget(budgetData);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  };

  const refreshHandle = () => {
    loadData();
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const closeModal = () => {
    setVisible(false);
    setExpense(false);
    setIncome(false);
  };
  return (
    <>
      <PaperProvider>
        <Portal>
          <View style={{marginBottom: '20%'}}>
            <View style={styles.IEBContainer}>
              {loading ? (
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <ActivityIndicator animating={true} color="white" size={48} />
                </View>
              ) : (
                <>
                  <AnimatedCircularProgress
                    size={250}
                    width={6}
                    backgroundWidth={25}
                    fill={fill}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                    rotation={0}
                    duration={750}>
                    {fill => (
                      <Text style={styles.points}>
                        {Math.round((totalIncome * fill) / 100)}
                      </Text>
                    )}
                  </AnimatedCircularProgress>
                  <View style={styles.IEContainer}>
                    <View style={styles.incomeContainer}>
                      <Text style={styles.incometext}>Income</Text>
                      <Text style={styles.incometextamount}>{totalIncome}</Text>
                    </View>
                    <View style={styles.expenseContainer}>
                      <Text style={styles.expensetext}>Expense</Text>
                      <Text style={styles.expensetextamount}>
                        {totalExpense}
                      </Text>
                    </View>
                  </View>
                </>
              )}
            </View>
            <View style={styles.budgetTransactionsContainer}>
              {loading ? (
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <ActivityIndicator animating={true} color="white" size={48} />
                </View>
              ) : (
                <>
                  <View style={styles.filterContainer}>
                    <FlatList
                      data={DASHBOARDFILTERS}
                      horizontal
                      renderItem={({item}) => (
                        <TouchableOpacity
                          style={[
                            styles.filterButtonsContainer,
                            filterOption === item && {
                              backgroundColor: '#152d44',
                            },
                          ]}
                          onPress={() => {
                            setFilterOption(item);
                            loadData();
                          }}>
                          <Text
                            style={[
                              styles.filterButtonText,
                              filterOption === item && {
                                color: 'white',
                                fontWeight: 'bold',
                              },
                            ]}>
                            {item}
                          </Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                  <FlatList
                    data={budget}
                    renderItem={({item}) => (
                      <View key={item._id} style={styles.budgetCard}>
                        <View>
                          <Text style={styles.catagoryName}>
                            {
                              RealmService.getCatagoryById(item.catagory_id)
                                .name
                            }
                          </Text>
                          <Text style={styles.budgetText}>
                            Budget :{' '}
                            {filterOption === 'Day'
                              ? Math.ceil(dailyBudget(item.amount))
                              : filterOption === 'Week'
                              ? Math.ceil(weeklyBudget(item.amount))
                              : item.amount}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={[
                              styles.balanceText,
                              item.balance < 1
                                ? {color: 'red'}
                                : {color: 'green'},
                            ]}>
                            {filterOption === 'Day'
                              ? Math.ceil(dailyBudget(item.balance))
                              : filterOption === 'Week'
                              ? Math.ceil(weeklyBudget(item.balance))
                              : item.balance}{' '}
                          </Text>
                        </View>
                      </View>
                    )}
                    showsVerticalScrollIndicator={false}
                  />
                </>
              )}
            </View>
          </View>
          <FAB.Group
            open={open}
            visible={true}
            icon={() =>
              !open ? (
                <Icons type="plus" width={24} height={24} color="black" />
              ) : (
                <Icons type="cross" width={24} height={24} color="black" />
              )
            }
            actions={[
              {
                icon: () => (
                  <Icons type="money-in" width={24} height={24} color="green" />
                ),
                onPress: () => {
                  setVisible(true);
                  setOpen(false);
                  setIncome(true);
                  setExpense(false);
                },
              },
              {
                icon: () => (
                  <Icons type="catagory" width={33} height={33} color="black" />
                ),
                onPress: () => {
                  setOpen(false);
                  navigation.navigate('Catagories');
                },
              },
              {
                icon: () => (
                  <Icons type="money-out" width={24} height={24} color="red" />
                ),
                onPress: () => {
                  setVisible(true);
                  setOpen(false);
                  setExpense(true);
                  setIncome(false);
                },
              },
            ]}
            onStateChange={() => setOpen(!open)}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
            style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              bottom: -8,
            }}
          />

          <Modal
            visible={visible}
            onDismiss={() => {
              setVisible(false);
              setExpense(false);
              setIncome(false);
              loadData();
            }}
            contentContainerStyle={styles.containerStyle}>
            <IEModel
              expense={expense}
              income={income}
              closeModal={closeModal}
              refreshHandle={refreshHandle}
              suggestionData={suggestionData}
            />
          </Modal>
        </Portal>
      </PaperProvider>
    </>
  );
};

export default Home;
