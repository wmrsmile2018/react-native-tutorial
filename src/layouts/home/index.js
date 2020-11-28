import React from 'react';
import {Button, View, Text} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to todos"
        onPress={() => navigation.navigate('Todos')}
      />
      <Text>Home Screen</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
        amet rhoncus arcu, id convallis urna. Aenean bibendum dictum nisl, et
        congue tellus placerat et. Etiam dui nunc, porta eget bibendum vitae,
        dignissim quis augue. Maecenas condimentum mollis odio, at facilisis
        libero posuere ac. Aliquam erat volutpat. Integer porta pulvinar diam
      </Text>
    </View>
  );
};
