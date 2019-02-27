import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  FormCreateContainer: {
    marginTop: 50,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  FormNameInput: {
    marginLeft: 70,
    height: 40,
    width: 250,
    fontSize: 30,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  createFieldButton: {
    backgroundColor: '#4154AF',
    marginTop: 30,
    marginRight: 30,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createFieldButtonText: {
    margin: 4,
    fontSize: 16,
    color: 'white',
  },
  SaveFormButton: {
    backgroundColor: '#4154AF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FieldsScrollView: {
    height: 800,
  },
});
