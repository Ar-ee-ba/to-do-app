import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const ranger = 1;
const MIN_COUNT_LIMIT = 0;
export default function Counter() {
  const [count, setCount] = useState(MIN_COUNT_LIMIT);
  function onAddPressed() {
    setCount(count + ranger);
  }
  function onSubtractPressed() {
    if (count - ranger < MIN_COUNT_LIMIT) return;
    setCount(count - ranger);
  }
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Button onPress={onAddPressed} title={"+"} />
        </View>

        <Text style={styles.counterText}>{count}</Text>
        <View>
          <Button onPress={onSubtractPressed} title={"-"} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    backgroundColor: "orange",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontSize: 40,
  },
});
