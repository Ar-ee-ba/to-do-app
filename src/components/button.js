import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export default function Button({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonCon}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonCon: {
    backgroundColor: "#B0C4DE",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#4682B4",
  },
  buttonText: {
    fontSize: 32,
    color: "#1E3A5F",
    fontWeight: "bold",
  },
});
