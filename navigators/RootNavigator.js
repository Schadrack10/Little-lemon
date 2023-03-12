import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(31,31,31)",
          alignSelf: "center",
          textAlign: "center",
          color: "red",
          flex: 1,
        },
        headerTitle: {
          color: "red",
        },
      }}
    >
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
      <Stack.Screen
        options={{
          title: "Welcome",
          headerStyle: {
            backgroundColor: "rgb(31,31,31)",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{
          title: "Subscribe",
          headerStyle: {
            backgroundColor: "rgb(31,31,31)",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="Subscribe"
        component={SubscribeScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
