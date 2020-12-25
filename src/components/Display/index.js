import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  text: {
    fontSize: 60,
    color: '#fff'
  }
})

const Display = (props) => {
  return (
    <View style={styles.display}>
      <Text numberOfLines={1} style={styles.text}>{props.value}</Text>
    </View>
  )
}

export default Display;