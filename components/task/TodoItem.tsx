//snippet RNF

import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  name: string;
  id: number;
}
export default function TodoItem({ name, id }: Props) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
