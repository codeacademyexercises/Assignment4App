// import React, {Component} from 'react';
// import {Platform, Text, View, SafeAreaView, ScrollView, TouchableHighlight} from 'react-native';
// import styles from './App.style';
// import Header from './Components/Header/Header';
// import FormPortal from './Components/FormPortal/FormPortal';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CreateNewFormPage from './Components/CreateNewFormPage/CreateNewFormPage';
import AllForms from './Components/AllForms/AllForms';

const RootStack = createStackNavigator(
  {
    Home: { screen: AllForms },
    NewForm: { screen: CreateNewFormPage },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RootStack);
