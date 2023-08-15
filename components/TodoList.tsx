import { Text, View, TextInput } from "react-native";
import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <View>
        <Text>New Task</Text>
        <TextInput></TextInput>
      </View>
    );
  }
}
