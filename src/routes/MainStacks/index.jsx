import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../screens/SignIn";
import { Registro } from "../../screens/SignUp";
import { Registro2 } from "../../screens/SignUp2";
import Home from "../../screens/Home";
import Favorites from "../../screens/Favorites";
import Pedidos from "../../screens/Pedidos";
import Buscar from "../../screens/Busca";
import Cardapio from "../../screens/Cardapio";

const MainStack = createNativeStackNavigator();

export default function MainStacksRoutes() {
  return (
    <MainStack.Navigator
      initialRouteName="Buscar"
      headerMode="screen"
      backButtonEnabled={false}
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <MainStack.Screen
        name="Cardapio"
        component={Cardapio}
        options={{
          headerShown: false,
        }}
      />
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
      <MainStack.Screen
        name="Perfil"
        component={Pedidos}
        options={{
          headerTitle: "Meus Pedidos",
          headerBackTitle: "Voltar",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <MainStack.Screen
        name="Buscar"
        component={Buscar}
        options={{
          headerShadowVisible: false,
          title: "Resultado da busca",
          headerBackTitle: "Voltar",
          headerTitleAlign: "center",
        }}
      />
    </MainStack.Navigator>
  );
}
