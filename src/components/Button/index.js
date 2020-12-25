import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    backgroundColor: '#f0f0f0',
    padding: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  },
  operationButton: {
    color: "#fff",
    backgroundColor: "#fa8231"
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3
  }
});;

const Button = (props) => {
  const styleButton = [styles.button]
  if (props.double) styleButton.push(styles.buttonDouble)
  if (props.triple) styleButton.push(styles.buttonTriple)
  if (props.operation) styleButton.push(styles.operationButton)

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styleButton}>{props.label}</Text>
    </TouchableHighlight>
  )
};

export default Button;
