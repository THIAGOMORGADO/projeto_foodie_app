import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../screens/SignIn";
import { Registro } from "../../screens/SignUp";
import { Registro2 } from "../../screens/SignUp2";
import Home from "../../screens/Tabs/TabHome";
import Favorites from "../../screens/Tabs/TabFavorites";
import Pedidos from "../../screens/Tabs/TabPedidos";

const MainStack = createNativeStackNavigator();

export default function MainStacksRoutes() {
  return (
    <MainStack.Navigator
      headerMode="screen"
      backButtonEnabled={false}
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <MainStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Registro"
        component={Registro}
        options={{
          headerTitle: "",
          headerBackTitle: "Voltar",
        }}
      />
      <MainStack.Screen
        name="Registro2"
        component={Registro2}
        options={{
          headerTitle: "",
          headerBackTitle: "Voltar",
        }}
      />
    </MainStack.Navigator>
  );
}
