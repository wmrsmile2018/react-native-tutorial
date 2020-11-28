import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, FlatList} from 'react-native';

import {AddTodo} from './addTodo';
import {Todo} from './todo';

export const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
    {
      id: Date.now().toString() + Math.ceil(Math.random() * 1000000),
      title: Math.ceil(Math.random() * 1000000),
    },
  ]);

  const addTodo = (title) => {
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
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Todo title={`some text ${item.title}`} />}
      />
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
