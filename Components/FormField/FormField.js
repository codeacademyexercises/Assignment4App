import React, { Component } from 'react';
import {
  Text, View, SafeAreaView, TextInput, TouchableHighlight,
} from 'react-native';
import styles from './FormField.style';

export default class FormField extends Component {
  render() {
    const { index } = this.props;
    const { updateField } = this.props;
    const { field } = this.props;
    return (
      <TextInput autoCorrect={false} style={styles.FieldInput} placeholder="Enter Field" onChange={(text) => { updateField(index, text); }} value={field} />
    );
  }
}
