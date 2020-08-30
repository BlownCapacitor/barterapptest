import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './sideBarMenu';
import Exchange from '../screens/ExchangeScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeScreen from '../screens/HomeScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen
    },
  Settings : {
    screen : SettingScreen
  },
 
  Exchange :{
    screen: Exchange
  },
  },
{
  contentComponent:CustomSideBarMenu
},
{
  initialRouteName : 'Home'
})