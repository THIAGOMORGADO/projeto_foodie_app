import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../screens/SignIn";
import { Registro } from "../../screens/SignUp";
import { Registro2 } from "../../screens/SignUp2";
import Home from "../../screens/Home";
import Favorites from "../../screens/Favorites";

const MainStack = createNativeStackNavigator();

export default function MainStacksRoutes() {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
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
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTintColor: "#333",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </MainStack.Navigator>
  );
}
