/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NavigationBar from 'react-native-navbar';

import {Todos} from './src/layouts/todo/todos';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const App: () => React$Node = () => {
  const [showHome, setShowHome] = useState(true);
  const [showTodos, setShowTodos] = useState(false);
  const navHomeConfig = {
    title: 'HOME',
    handler: () => {
      setShowHome(true);
      setShowTodos(false);
    },
  };

  const navTODOConfig = {
    title: 'TODOS',
    handler: () => {
      setShowHome(false);
      setShowTodos(true);
    },
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
      }}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.navigation}>
            <View style={styles.navView}>
              <NavigationBar
                style={styles.textNav}
                leftButton={navHomeConfig}
              />
            </View>
            <View style={styles.navView}>
              <NavigationBar
                style={styles.textNav}
                leftButton={navTODOConfig}
              />
            </View>
          </View>
          <View style={styles.body}>
            {showTodos && (
              <View style={styles.todo}>
                <Todos />
              </View>
            )}
            {showHome && (
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet rhoncus arcu, id convallis urna. Aenean
                bibendum dictum nisl, et congue tellus placerat et. Etiam dui
                nunc, porta eget bibendum vitae, dignissim quis augue. Maecenas
                condimentum mollis odio, at facilisis libero posuere ac. Aliquam
                erat volutpat. Integer porta pulvinar diam iaculis tincidunt.
                Pellentesque gravida sem nibh, et vulputate lectus gravida ac.
                Vestibulum non mi semper, facilisis sem sit amet, sollicitudin
                nulla. Donec lobortis, nulla a euismod sodales, elit nibh
                rhoncus metus, at suscipit lacus est in nulla. Ut at orci dolor.
                Curabitur tristique porttitor nulla, quis posuere risus
                efficitur vitae. Curabitur in sem scelerisque, eleifend purus
                at, ullamcorper ipsum. Integer vel velit ultricies ante molestie
                viverra ut vitae lacus. Etiam faucibus ut erat et commodo.
                Aenean a fringilla lorem. In vel leo vitae mauris luctus
                aliquam. Nulla bibendum suscipit dignissim. Nullam varius tellus
                nisl. Nullam tincidunt rhoncus massa, et placerat ante tristique
                sed. Fusce sed dignissim risus, ut iaculis augue. Curabitur
                lacinia porta elit. Vestibulum fringilla venenatis mauris sed
                tempus. Sed porta massa nec scelerisque fringilla. Morbi aliquam
                sit amet mauris feugiat malesuada. Nunc sed eros sed purus
                efficitur vehicula. Fusce ultrices tincidunt dui, sed fermentum
                ex maximus eget. Nunc tortor orci, pharetra eu libero luctus,
                sodales malesuada nisi. Praesent quis neque id libero egestas
                cursus quis vitae urna. Fusce magna libero, fringilla sed ex
                non, mollis placerat nisi. Nam est erat, congue non condimentum
                ac, mattis id nisl. Curabitur vehicula est at tincidunt
                facilisis. Pellentesque sit amet lacinia est, non aliquet
                tellus. Nam consectetur quis elit porta sodales. Duis nisi nunc,
                blandit eu ante non, pulvinar vulputate nulla. Etiam dictum
                lacus ac ultrices ultricies. In odio eros, molestie ut placerat
                quis, molestie vel nisi. Orci varius natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Mauris sit amet
                urna quis nisl suscipit consectetur eu sed neque. Donec ac purus
                vitae ante fringilla ultricies vitae a lectus. Nunc a gravida
                sapien. Suspendisse vitae bibendum nisi. Sed posuere erat ac
                varius tempor. Pellentesque posuere quis nibh quis sagittis.
                Cras pulvinar suscipit ex vel sagittis. Curabitur at orci nisl.
                Etiam porttitor mollis quam sed dignissim. Sed sodales quam non
                erat egestas, pretium fringilla diam aliquam. Suspendisse
                potenti. Proin sem dolor, feugiat ac libero quis, hendrerit
                lobortis velit. Etiam sed dolor nisi. In et lectus eget nunc
                pretium ultrices sodales ut leo. Etiam egestas luctus nibh, at
                pellentesque mi condimentum vel. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Fusce
                id mi tempor, vestibulum libero in, auctor sem. Nam nec ipsum
                semper, auctor lectus id, sagittis erat. Integer mattis mauris
                sit amet ullamcorper interdum. Duis neque dolor, mollis quis
                tempor a, finibus eget diam.
              </Text>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
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
