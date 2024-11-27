import React from "react";
import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Tabs/TabHome";
import Favorites from "../Tabs/TabFavorites";
import Pedidos from "../Tabs/TabPedidos";
import Perfil from "../Tabs/TabPerfil";

import icon from "../../constants/icon";
import { Image } from "react-native";

const Tabs = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Image
              source={icon.AbaHome}
              style={{
                width: 25,
                height: 25,
                opacity: focused ? 1 : 0.3,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          title: "Favoritos",
          headerTitleAlign: "center",

          tabBarIcon: ({ focused }) => (
            <Image
              source={icon.AbaFavoritos}
              style={{
                width: 25,
                height: 25,
                opacity: focused ? 1 : 0.3,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          title: "Pedidos",
          headerTitleAlign: "center",

          tabBarIcon: ({ focused }) => (
            <Image
              source={icon.AbaPedidos}
              style={{
                width: 25,
                height: 25,
                opacity: focused ? 1 : 0.3,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",
          headerTitleAlign: "center",

          tabBarIcon: ({ focused }) => (
            <Image
              source={icon.AbaPerfil}
              style={{
                width: 25,
                height: 25,
                opacity: focused ? 1 : 0.3,
              }}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
