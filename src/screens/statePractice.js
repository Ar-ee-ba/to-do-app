import { View, TextInput, StyleSheet, Button, Image, Text } from "react-native";

export default function StatePractice() {
  function OnButtonPressed() {
    alert("Hello User");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Image style={styles.image} source={require("../../assets/login.jpg")} />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Button onPress={OnButtonPressed} title="Submit" />
    </View>
  );
}
const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
    gap: 20,
    alignItems: "center",
  },

  text: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 10,
  },
  input: {
    width: "100%",
    hright: 30,
    borderColor: "black",
    borderWidth: 2,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  sty: {
    textAlign: "center",
  },
});
