import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../screens/SignIn";
import { Registro } from "../../screens/SignUp";
import { Registro2 } from "../../screens/SignUp2";
import Home from "../../screens/Home";
import Favorites from "../../screens/Favorites";
import Pedidos from "../../screens/Pedidos";

const MainStack = createNativeStackNavigator();

export default function MainStacksRoutes() {
  return (
    <MainStack.Navigator
      initialRouteName="Pedidos"
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
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerTitle: "Favoritos",
          headerBackTitle: "Voltar",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <MainStack.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          headerTitle: "Meus Pedidos",
          headerBackTitle: "Voltar",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
    </MainStack.Navigator>
  );
}
