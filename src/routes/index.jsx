import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MainStacksRoutes from "./MainStacks";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <MainStacksRoutes />
    </NavigationContainer>
  );
}
