import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppConatainer,createSwitchNavigator} from 'react-navigation'
import {AppTabNavigator} from './components/AppTabNavigator'
export default function App() {
  return (
    <View style={styles.container}>
      <AppConatainer/>
    </View>
  );
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  bottomTab:{screen:AppTabNavigator}
})
const AppConatainer = createAppConatainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
