import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
function Button({ onPress, title, btnIcon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonCon}>
      {btnIcon}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonCon: {
    backgroundColor: "#B0C4DE",
    width: "100%",
    height: 70,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 32,
  },
});
export { Button };
