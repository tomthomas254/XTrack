import { View, Text } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars';
import { HABIT } from '../../mockdata/mockdata';
import { getCurrentMonthDays } from '../../utils/utils';

const CalenderModal = ({ selectedId, closeModal }) => {


  function markedDates() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0-based (January is 0, December is 11)
    console.log('month',month)
    const daysInMonth = new Date(year, month+1, 0).getDate();
    console.log('daysinmonth',daysInMonth)
    const datesArray = [];
  
    for (let day = 1; day <= daysInMonth; day++) {
      // Create a new date for each day
      const date = new Date(year, month, day);
      console.log('date',date)
      // Format the date to 'YYYY-MM-DD'
      const formattedDate = date.toISOString().split('T')[0];
      datesArray.push(formattedDate);
    }
  
    let days = datesArray.reduce((result, item) => {
      result[item] = {
        selected: false,
        marked: false, // set to true as per your requirement
        // selectedColor: 'white'
      };
      return result
    }, {})

    return HABIT.data1.map(item => {
      days[item.date] = {
        selected: item.selected === 1,
        marked: true, // set to true as per your requirement
        selectedColor: 'green'
      };
      return days;
    });
  }
  
  // Example usage:


  // const markedDates = () => {
  //   return HABIT.data1.map(item => {
  //     days[item.date] = {
  //       selected: item.selected === 1,
  //       marked: true, // set to true as per your requirement
  //       selectedColor: 'green'
  //     };
  //     return result;
  //   });
  // }
console.log(markedDates())

  return (
    <View style={{borderRadius:25}}>
      <Calendar
        onDayPress={day => {
          
          console.log('selected day', new Date(day.dateString));
        }}
        markedDates={
          // {
          //   '2025-02-01': {selected: true, marked: true, selectedColor: 'green'},
          //   '2025-02-02': {selected:true,marked: true,selectedColor:'red'},
          //   '2025-02-03': {selected: true, marked: true, selectedColor: 'green'}
          // {id:'1',date:'2025-02-1',selected:1,catagory_id:'1'},
          // }
          markedDates()[0]
        }

        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          // textDisabledColor: '#dd99ee',
          textDayFontSize:14
        }}
        style={{borderRadius:25,padding:10}}

      />
    </View>
  )
}

export default CalenderModal