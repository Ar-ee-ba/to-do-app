import { StyleSheet, View } from "react-native";

export const IconContainer = ({ icon, styles }) => {
  return <View>{icon}</View>;
};
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
});
