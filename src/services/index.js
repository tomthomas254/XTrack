import Realm, {BSON} from 'realm';
import ExpenseModel from '../Models/ExpenseModel';
import CatagoriesModel from '../Models/CatagoriesModel';
import BudgetModel from '../Models/BudgetModel';
import HabitCatagoryModel from '../Models/HabitCatagoryModel';
import HabitModel from '../Models/HabitModel';
import IncomeModel from '../Models/IncomeModel';

const realm = new Realm({
  schema: [
    CatagoriesModel,
    ExpenseModel,
    BudgetModel,
    HabitCatagoryModel,
    HabitModel,
    IncomeModel,
  ],
});

const today = new Date(); // Current date
const lastDayOfPreviousMonth = new Date(
  today.getFullYear(),
  today.getMonth(),
  0,
);

const RealmService = {
  getAllCatagories: () => realm.objects('Catagories').sorted('name', false),
  getCatagoryById: id => {
    const catId = new BSON.ObjectID(id);
    const catagory = realm.objectForPrimaryKey('Catagories', catId);
    return catagory;
  },

  //Addition of Product
  addCatagory: catagory => {
    realm.write(() => {
      realm.create('Catagories', catagory);
    });
  },

  //Update of Product
  updateCatagory: (id, updatedCatagory) => {
    const catagory = realm.objectForPrimaryKey('Categories', id);
    if (catagory) {
      realm.write(() => {
        Object.keys(updatedCatagory).forEach(key => {
          catagory[key] = updatedCatagory[key];
        });
      });
    }
  },

  deleteCatagory: id => {
    const catId = new BSON.ObjectID(id);
    const catagory = realm.objectForPrimaryKey('Catagories', catId);
    const budget = realm
      .objects('Budget')
      .filtered('catagory_id==$0', catId)[0];
    if (catagory) {
      realm.write(() => {
        if (budget) {
          realm.delete(budget);
        }
        realm.delete(catagory);
      });
    }
  },

  deleteAllCatagories: () => {
    const allCatagories = realm.objects('Catagories');
    realm.write(() => {
      realm.delete(allCatagories);
    });
  },
  //////////////////////////////////EXPENSES/////////////////////////////////////////////////////////
  getAllExpenses: () => {
    const result = realm
      .objects('Expenses')
      .filtered('date >= $0', lastDayOfPreviousMonth)
      .sorted('date', true);
    return result;
  },
  getExpenses: filterOption => {
    const today = new Date();
    if (filterOption === 'All') {
      const result = realm.objects('Expenses').sorted('date', true);
      return result;
    } else if (filterOption === 'Month') {
      const result = realm
        .objects('Expenses')
        .filtered('date >= $0', lastDayOfPreviousMonth)
        .sorted('date', true);
      return result;
    } else if (filterOption === 'Week') {
      let startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay()); // Set to last Sunday
      startOfWeek.setHours(0, 0, 0, 0); // Reset time

      return realm
        .objects('Expenses')
        .filtered('date >= $0', startOfWeek)
        .sorted('date', true);
    } else if (filterOption === 'Day') {
      let date = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
      );
      date.setHours(0, 0, 0, 0);
      const result = realm
        .objects('Expenses')
        .filtered('date >= $0', date)
        .sorted('date', true);
      return result;
    }
  },

  getTotalExpense: () => {
    const expenses = realm
      .objects('Expenses')
      .filtered('date >= $0', lastDayOfPreviousMonth);
    return expenses.sum('amount');
  },

  addExpenses: expense => {
    const catagoryid = new BSON.ObjectID(expense.catagory_id);
    const spendAmount = Number(expense.amount);
    const budget = RealmService.getBudgetByCatagoryId(catagoryid);
    const balanceAmount = Number(budget.balance) - spendAmount;
    const addExp = {
      ...expense,
      catagory_id: catagoryid,
      amount: spendAmount,
    };
    realm.write(() => {
      realm.create('Expenses', addExp);
      if (budget) {
        budget.balance = balanceAmount;
      }
    });
  },
  deleteAllExpenses: async () => {
    const allExpenses = realm.objects('Expenses');
    realm.write(() => {
      realm.delete(allExpenses);
    });
  },
  getExpenseById: id => {
    const result = realm.objectForPrimaryKey('Expenses', id);
    return result;
  },
  getExpenseByCatagory: async id => {
    try {
      if (!id) {
        return 'Error no object selected';
      }
      const lastDayOfPreviousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      ); // Last day of previous month

      const result = realm
        .objects('Expenses')
        .filtered(
          'catagory_id == $0 && date >= $1',
          id,
          lastDayOfPreviousMonth,
        );
      return result;
    } catch (error) {
      return error;
    }
  },
  getExpenseSumByCatagory: id => {
    try {
      if (!id) {
        return 'Error no object selected';
      }
      const today = new Date(); // Current date
      const lastDayOfPreviousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0,
      ); // Last day of previous month

      const result = realm
        .objects('Expenses')
        .filtered(
          'catagory_id == $0 && date >= $1',
          id,
          lastDayOfPreviousMonth,
        );
      return result.sum('amount');
    } catch (error) {
      return error;
    }
  },
  ////////////////////////////////////BUDGET///////////////////////////////////////////////////////
  getAllBudgets: () => realm.objects('Budget'),

  getTotalBudget: async () => {
    const budget = realm.objects('Budget');
    return budget.sum('amount');
  },
  getBudgetByCatagoryId: id => {
    const catId = new BSON.ObjectID(id);
    const result = realm
      .objects('Budget')
      .filtered('catagory_id==$0', catId)[0];
    return result;
  },
  updateBudget: async data => {
    try {
      const amount = Number(data.amount);
      const budget = realm.objectForPrimaryKey('Budget', data._id);
      const totalExpense = await RealmService.getExpenseSumByCatagory(
        data.catagory_id,
      );
      const balanceAmount = amount - totalExpense;
      if (budget) {
        realm.write(() => {
          (budget.amount = amount), (budget.balance = balanceAmount);
        });
      }
      return true;
    } catch (error) {
      console.error('Error', error);
    }
  },
  updateBudgetBalance: async data => {
    try {
      const amount = Number(data.amount);
      const budget = realm.objectForPrimaryKey('Budget', data._id);
      const totalExpense = await RealmService.getExpenseSumByCatagory(
        data.catagory_id,
      );
      const balanceAmount = amount - totalExpense;
      if (budget) {
        realm.write(() => {
          (budget.amount = amount), (budget.balance = balanceAmount);
        });
      }
      return true;
    } catch (error) {
      console.error('Error', error);
    }
  },

  addBudget: budget => {
    const totalExpense = RealmService.getExpenseSumByCatagory(
      budget.catagory_id,
    );
    const balanceAmount = Number(budget.amount) - Number(totalExpense);
    const addBud = {
      catagory_id: BSON.ObjectID(budget.catagory_id),
      balance: balanceAmount,
      amount: Number(budget.amount),
    };
    realm.write(() => {
      realm.create('Budget', addBud);
    });
  },
  deleteBudget: id => {
    const budId = new BSON.ObjectID(id);
    try {
      const budget = realm.objects('Budget').objectForPrimaryKey(budId);
      if (budget) {
        realm.write(() => {
          realm.delete(budget);
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
  deleteAllBudgets: () => {
    const allBudget = realm.objects('Budget');
    realm.write(() => {
      realm.delete(allBudget);
    });
  },
  ////////////////////////////////////INCOME///////////////////////////////////////////////////////
  getAllIncomes: () =>
    realm
      .objects('Income')
      .filtered('date >= $0', lastDayOfPreviousMonth)
      .sorted('date', true),

  getTotalIncome: () => {
    const income = realm
      .objects('Income')
      .filtered('date >= $0', lastDayOfPreviousMonth)
      .sorted('date', true);
    return income.sum('amount');
  },

  addIncome: income => {
    try {
      const incomeAmount = Number(income.amount);
      income = {
        ...income,
        amount: incomeAmount,
      };
      realm.write(() => {
        realm.create('Income', income);
      });
    } catch (error) {
      console.error(error);
    }
  },
  deleteAllIncomes: () => {
    const allIncome = realm.objects('Income');
    realm.write(() => {
      realm.delete(allIncome);
    });
  },
  ////////////////////////////////////HABITCATAGORY///////////////////////////////////////////////////////
  getAllHabitCatagories: () =>
    realm.objects('HabitCatagory').sorted('title', false),
  getHabitCatagoryById: id => {
    const catId = new BSON.ObjectID(id);
    const catagory = realm.objectForPrimaryKey('HabitCatagory', catId);
    return catagory;
  },

  //Addition of Product
  addHabitCatagory: catagory => {
    console.log(catagory);
    realm.write(() => {
      realm.create('HabitCatagory', catagory);
    });
  },

  //Update of Product
  updateHabitCatagory: (id, updatedCatagory) => {
    const catagory = realm.objectForPrimaryKey('HabitCatagory', id);
    if (catagory) {
      realm.write(() => {
        Object.keys(updatedCatagory).forEach(key => {
          catagory[key] = updatedCatagory[key];
        });
      });
    }
  },

  deleteHabitCatagory: id => {
    const catId = new BSON.ObjectID(id);
    const catagory = realm.objectForPrimaryKey('HabitCatagory', catId);
    const habit = realm.objects('Habit').filtered('catagory_id==$0', catId)[0];
    if (catagory) {
      realm.write(() => {
        if (habit) {
          realm.delete(habit);
        }
        realm.delete(catagory);
      });
    }
  },

  deleteAllHabitCatagories: () => {
    const allCatagories = realm.objects('HabitCatagory');
    realm.write(() => {
      realm.delete(allCatagories);
    });
  },
  ////////////////////////////////////HABIT///////////////////////////////////////////////////////
  getAllHabits: () => realm.objects('Habit').sorted('date', false),
  getHabitByCatId: id => {
    const catId = new BSON.ObjectID(id);
    const habit = realm.objects('Habit').filtered('catagory_id==$0', catId)[0];
    return habit;
  },

  //Addition of Product
  addHabit: habit => {
    console.log(catagory);
    realm.write(() => {
      realm.create('Habit', habit);
    });
  },

  //Update of Product
  updateHabit: (id, updatedHabit) => {
    const habit = realm.objectForPrimaryKey('Habit', id);
    if (habit) {
      realm.write(() => {
        Object.keys(updatedHabit).forEach(key => {
          habit[key] = updatedHabit[key];
        });
      });
    }
  },

  deleteHabit: id => {
    const habitId = new BSON.ObjectID(id);
    const habit = realm.objectForPrimaryKey('Habit', habitId);
    if (habit) {
      realm.write(() => {
        realm.delete(habit);
      });
    }
  },

  deleteAllHabits: () => {
    const allCatagories = realm.objects('Habit');
    realm.write(() => {
      realm.delete(allCatagories);
    });
  },
  ///////////////////////////////////////////////////////////////////////////////////////////
};

export default RealmService;
