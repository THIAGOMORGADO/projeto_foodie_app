import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Registro } from "../screens/SignUp";
import { Registro2 } from "../screens/SignUp2";
import { Login } from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{
            headerTitle: "",
            headerBackTitle: "Voltar",
          }}
        />
        <Stack.Screen
          name="Registro2"
          component={Registro2}
          options={{
            headerTitle: "",
            headerBackTitle: "Voltar",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
