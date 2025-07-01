import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "../components/button";
import Icon from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import AntDesigns from "@expo/vector-icons/AntDesign";

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
          <Button
            onPress={onAddPressed}
            title={"+"}
            btnIcon={<AntDesign name="arrowup" size={24} color="black" />}
          />
        </View>

        <Text style={styles.counterText}>{count}</Text>
        <View>
          <Button
            onPress={onSubtractPressed}
            title={"-"}
            btnIcon={<AntDesigns name="arrowdown" size={24} color="black" />}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  box: {
    width: "90%",
    height: 150,
    flexDirection: "row",
    backgroundColor: "#ADD8E6",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  counterText: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#000080",
  },
});
