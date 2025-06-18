import React, {useEffect, useState} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {Icons} from './components/SVGIcons/SVGIcons/Icons';
import Transactions from './screens/Transactions';
import Budget from './screens/Budget';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Catagories from './screens/Catagories';
import Habit from './screens/Habit';
import SplashScreen from './screens/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HabitCatagories from './screens/HabitCatagories';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const [isNavigationIsReady, setNavigationIsReady] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    if (isNavigationIsReady) {
      setTimeout(() => {
        setShowSplash(false);
      }, 800);
    }
  }, []);

  function HabitTabs() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HabitHome" component={Habit} />
        <Stack.Screen name="HabitCatagory" component={HabitCatagories} />
      </Stack.Navigator>
    );
  }
  function MyTabs() {
    return (
      <>
        <Tab.Navigator
          initialRouteName="Home"
          backBehavior="history"
          screenOptions={() => ({
            headerShown: false,
            tabBarActiveTintColor: 'steelblue',
            tabBarHideOnKeyboard: true,
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => (
                <Icons type="home" width={24} height={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Transaction"
            component={Transactions}
            options={{
              tabBarIcon: () => (
                <Icons type="exchange" width={24} height={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Budget"
            component={Budget}
            options={{
              tabBarIcon: () => (
                <Icons type="money" width={24} height={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Habit"
            component={HabitTabs}
            options={{
              tabBarIcon: () => (
                <Icons type="calender" width={24} height={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
  }

  return (
    <NavigationContainer onReady={() => setNavigationIsReady(true)}>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            lazy: true,
          }}>
          <Drawer.Screen name="Dashboard" component={MyTabs} />
          <Drawer.Screen name="Catagories" component={Catagories} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
