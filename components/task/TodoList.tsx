import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import React, { Component } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { add } from "./todo.slice";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((s) => s.todo);

  return (
    <View>
      <View style={styles.addTaskContainer}>
        <Text>New Task</Text>
        <TextInput
          onChangeText={(e) => setValue(e)}
          style={styles.addTaskInput}
        ></TextInput>
        <Button title="Add" onPress={() => dispatch(add(value))}></Button>
      </View>
      <View>
        {todoList.tasks.map((t) => (
          <TodoItem id={t.id} name={t.name} key={t.id} />
        ))}
      </View>
    </View>
  );
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
