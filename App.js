/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';

import {HomeScreen} from './src/layouts/home/index';
import {Todos} from './src/layouts/todo/todos';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todos" component={Todos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigation: {
    width: 30,
    position: 'relative',
    height: '100%',
  },
  body: {
    // width: ,
    height: '100%',
  },
  todo: {
    height: '100%',
    width: '94%',
    marginRight: '2%',
  },
  navView: {
    width: 30,
    position: 'relative',
    borderWidth: 2,
    borderColor: '#3949ab',
    height: '50%',
  },
  textNav: {
    position: 'relative',
    width: 30,
    height: '50%',
    flexWrap: 'wrap',
  },
});

export default App;
