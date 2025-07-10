import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Button, TextInput, Text } from "react-native";

export function Login() {
  function OnLoginButtonPress() {
    alert("Welcome!!!");
    navigate("WhatsAppStatus");
  }
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Please login into your account</Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={OnLoginButtonPress} title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4c669f",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  heading: {
    fontSize: 20,
    color: "white",
    marginBottom: 30,
  },

  input: {
    width: "100%",
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
    backgroundColor: "white",
    color: "black",
  },

  buttonContainer: {
    marginTop: 20,
    width: "90%",
    borderRadius: 12,
  },
});
