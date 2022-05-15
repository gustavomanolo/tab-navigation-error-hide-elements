import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Views
import HomeStep1 from "./HomeStep1";
import HomeStep2 from "./HomeStep2";

const Stack = createNativeStackNavigator();

// { navigation }
export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "",
      }}
    >
      <Stack.Screen
        name="HomeStep1"
        component={HomeStep1}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="HomeStep2"
        component={HomeStep2}
        options={{ title: "Step 2" }}
      />
    </Stack.Navigator>
  );
}
