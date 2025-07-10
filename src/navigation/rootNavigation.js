import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/login";
import { WhatsappStatus } from "../screens/WhatsappStatus/whatsappStatus";

const AppStack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Login">
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="WhatsAppStatus" component={WhatsappStatus} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
