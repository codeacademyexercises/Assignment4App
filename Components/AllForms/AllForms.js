/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  Platform, View, SafeAreaView, ScrollView, TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './AllForms.style';
import Header from '../Header/Header';
import FormPortal from '../FormPortal/FormPortal';

const axios = require('axios');

export default class App extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    FormDetails: [],
  }

  getFormData = async (url) => {
    await axios.get(url).then((data) => { this.setState({ FormDetails: data.data }); });
  }

  async componentDidMount() {
    if (Platform.OS === 'android') {
      console.log('android');
      await this.getFormData('http://10.0.2.2:3005/displayforms');
    } else {
      await this.getFormData('http://localhost:3005/displayforms');
    }
    const { FormDetails } = this.state;
    console.log(FormDetails, 'hi');
  }

  // getFormData = async (url) => {
  //   await axios.get(url).then((data) => { this.setState({ FormDetails: data.data }); });
  // }

  render() {
    const Forms = [];
    const { FormDetails } = this.state;
    const { navigation } = this.props;
    console.log(FormDetails);
    FormDetails.forEach(Form => Forms.push(<FormPortal FormName={Form.FormName} createdOn={Form.createdAt} />));
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={styles.FormsScrollView}>
          <View style={styles.forms}>
            {Forms}
          </View>
        </ScrollView>
        <TouchableHighlight style={styles.createFormButton} onPress={() => { navigation.navigate('NewForm'); }}>
          <Icon name="plus" style={styles.icon} />
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

App.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
