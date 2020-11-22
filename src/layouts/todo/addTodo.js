import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const handleOnPress = () => {
    onSubmit(value);
    setValue('');
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder="input your task"
        onChangeText={setValue}
        value={value}
      />
      <Button style={styles.button} title="add Todo" onPress={handleOnPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  input: {
    width: '70%',
    borderColor: '#3949ab',
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  button: {
    backgroundColor: '#3949ab',
  },
});
