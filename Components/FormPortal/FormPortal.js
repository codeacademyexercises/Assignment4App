import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './FormPortal.style';

export default class FormPortal extends Component {
  render() {
    let display = '';
    const { FormName } = this.props;
    const { createdOn } = this.props;
    if (FormName.length > 30) {
      display = `${FormName.slice(0, 31)}...`;
    } else {
      display = FormName;
    }
    return (
      <View style={styles.FormNameContainer}>
        <Text style={styles.FormName}>
          {display}
        </Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.createOn}>
                  Created On:
          {' '}
          {createdOn.slice(0, 10).replace(/[-]/g, '/')}
        </Text>
      </View>
    );
  }
}

FormPortal.propTypes = {
  FormName: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
};
