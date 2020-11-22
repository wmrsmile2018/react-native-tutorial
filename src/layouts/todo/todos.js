import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {AddTodo} from './addTodo';
import {Todo} from './todo';

export const Todos = () => {
  const [todos, setTodos] = useState([
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
    {title: Date.now().toString(), title: 'hello'},
  ]);

  const addTodo = (title) => {
    // alert(value)
    setTodos((prev) => [
      {
        id: Date.now().toString(),
        title,
      },
      ...todos,
    ]);
  };
  return (
    <View style={styles.block}>
      <AddTodo onSubmit={(value) => addTodo(value)} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View>
          {todos.map((todo) => (
            <Todo key={todo.id} title={todo.title} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: '100%',
    width: '100%',
  },
  scrollView: {},
});
