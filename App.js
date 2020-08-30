import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation'
import Welcome from './screens/Welcome';
import HomeScreen from './screens/HomeScreen'
import Exchange from './screens/ExchangeScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    Exchange: {screen: Exchange},
  },
 {
    defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
       if(routeName === "HomeScreen"){
        return(
          <Text> HomeScreen</Text>
          )

        }
        else if(routeName === "Exchange"){
          return(
           <Text>Exchange</Text>
          )
        }
      }
    })
  }
);

const switchNavigator = createSwitchNavigator({
  Welcome:{screen: Welcome},
  BottomTab:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);