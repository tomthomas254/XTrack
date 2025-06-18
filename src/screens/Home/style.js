import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  IEBContainer: {
    // backgroundColor: '#ffaf61',
    backgroundColor: '#152d44',
    height: '44%',
    borderBottomLeftRadius: '35%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IEContainer: {
    flexDirection: 'row',
  },
  incomeContainer: {
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '2%',
    marginRight: '10%',
  },
  expenseContainer: {
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '2%',
    paddingLeft: '10%',
    borderLeftWidth: 1,
    borderLeftColor: 'lightgrey',
  },
  incometext: {
    color: 'lightgrey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  expensetext: {
    color: 'lightgrey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  balancetext: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  incometextamount: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  expensetextamount: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  balancetextamount: {
    color: 'green',
    fontSize: 26,
    fontWeight: 'bold',
  },
  budgetTransactionsContainer: {
    // backgroundColor: '#ffe4c2',
    backgroundColor: '#152d44',
    borderTopLeftRadius: 30,
    // borderTopRightRadius:15,
    height: '80%',
    paddingHorizontal: 5,
    paddingTop: '7%',
    paddingBottom: '73%',
  },

  budgetCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 30,
    paddingTop: 8,
    paddingBottom: 5,
    height: 100,
  },
  catagoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  budgetText: {
    fontSize: 14,
    color: 'grey',
    marginTop: '5%',
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerStyle: {
    width: '95%',
    alignSelf: 'center',
  },
  points: {
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: 'bold',
  },
  filterContainer: {
    padding: 10,
    alignItems:'center'
  },
  filterButtonsContainer: {
    paddingHorizontal: 18,
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 15,
    marginHorizontal: 10,
    minWidth: 60,
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  filterButtonText: {
    color: 'black',
    fontSize: 14,
  },
});
