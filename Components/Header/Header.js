import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Header.style';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>Awesome Forms</Text>
      </View>
    );
  }
}
