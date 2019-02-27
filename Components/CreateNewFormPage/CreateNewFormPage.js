import React, { Component } from 'react';
import {
  Text, Platform, SafeAreaView, TextInput, TouchableHighlight, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CreateNewFormPage.style';
import FormField from '../FormField/FormField';

const axios = require('axios');

export default class CreateNewFormPage extends Component {
  state = {
    FormName: '',
    numberOfFields: 0,
    FieldNamesArray: [],
  }

  updateField = (index, field) => {
    const { FieldNamesArray } = this.state;
    FieldNamesArray[index] = field;
    this.setState({ FieldNamesArray });
  }

  incrementNumberOfFields = () => {
    const { numberOfFields } = this.state;
    const { FieldNamesArray } = this.state;
    FieldNamesArray.push('');
    this.setState({ numberOfFields: numberOfFields + 1, FieldNamesArray });
  }

  updateFormDB = async () => {
    const { FormName } = this.state;
    const { numberOfFields } = this.state;
    const { FieldNamesArray } = this.state;
    let FormFields = '';
    FieldNamesArray.forEach((field) => {
      FormFields += `${field},`;
    });
    console.log(FormName, FormFields, numberOfFields);
    if (Platform.OS === 'android') {
      console.log('android');
      await axios.post('http://10.0.2.2:3005/createform', {
        FormName,
        FormFields,
        NumberOfFields: numberOfFields,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        console.log(response);
      })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios.post('http://localhost:3005/createform', {
        FormName,
        FormFields,
        NumberOfFields: numberOfFields,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        console.log(response);
      })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const arrayOfFieldComponents = [];
    const { FormName } = this.state;
    const { FieldNamesArray } = this.state;
    const { navigation } = this.props;
    FieldNamesArray.forEach((field, index) => {
      arrayOfFieldComponents.push(<FormField index={index} field={field} updateField={this.updateField} />);
    });
    return (
      <SafeAreaView style={styles.FormCreateContainer}>
        <TextInput style={styles.FormNameInput} placeholder="Enter FormName" onChange={(text) => { this.setState({ FormName: text }); }} value={FormName} />
        <TouchableHighlight style={styles.createFieldButton} onPress={this.incrementNumberOfFields}>
          <Text style={styles.createFieldButtonText}>
            Add Field
          </Text>
        </TouchableHighlight>
        <ScrollView style={styles.FieldsScrollView}>
          {arrayOfFieldComponents}
        </ScrollView>
        <TouchableHighlight style={styles.SaveFormButton} onPress={async () => { await this.updateFormDB(); navigation.navigate('Home'); }}>
          <Text style={styles.createFieldButtonText}>
            Save
          </Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
CreateNewFormPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
