import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../screens/SignIn";
import { Registro } from "../../screens/SignUp";
import { Registro2 } from "../../screens/SignUp2";
import MainTab from "../../screens/MainTab";
import Cardapio from "../../screens/Cardapio";
import Buscar from "../../screens/Busca";
import DetalheProduto from "../../screens/DetalheProduto";

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Detalhe-produto" component={DetalheProduto} />
        <Stack.Screen name="Maintab" component={MainTab} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Buscar" component={Buscar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
