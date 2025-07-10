import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import React from "react";

function Button({ onPress, title, btnIcon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonCon}>
      <View style={styles.innerContent}>
        {btnIcon}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonCon: {
    backgroundColor: "#B0C4DE",
    width: "100%",
    height: 50, // 🔽 Reduced height
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10, // ✅ Rounded edges (optional)
  },
  innerContent: {
    flexDirection: "row", // ✅ Row layout for icon + text
    alignItems: "center",
    gap: 8, // ✅ Space between icon and text
  },
  buttonText: {
    fontSize: 18, // 🔽 Reduced font size
    fontWeight: "bold",
    color: "#000", // Optional better text color
  },
});

export { Button };
