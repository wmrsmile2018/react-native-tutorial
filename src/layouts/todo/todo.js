import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Todo = ({title}) => {
  return (
    <View style={styles.block}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
  },
});
