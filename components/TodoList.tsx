import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <View style={styles.addTaskContainer}>
        <Text>New Task</Text>
        <TextInput style={styles.addTaskInput}></TextInput>
        <Button title="Add"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addTaskContainer: {
    height: 50,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  addTaskInput: {
    width: 100,
    borderWidth: 1,
    margin: 10,
  },
});
