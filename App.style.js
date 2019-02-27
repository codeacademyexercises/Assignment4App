import {Platform, StyleSheet, Text, View} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: '#DAE5F0',
    },
    FormsScrollView: {
        // marginBottom: 30,
    },
    forms: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    createFormButton: {
        alignSelf: 'flex-end',
        marginRight: 30,
        borderRadius: 60,
        height: 50,
        width: 50,
        backgroundColor: '#4154AF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontWeight: 'normal',
        fontSize: 30,
        color: "white",
    }
  });
  