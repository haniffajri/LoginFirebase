
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SignUp from "./src/SignUp"
import SignIn from "./src/SignIn"

export default class App extends Component {
  render() {
    return (
      <View>
        <SignIn/>
      </View>
    );
  }
}
