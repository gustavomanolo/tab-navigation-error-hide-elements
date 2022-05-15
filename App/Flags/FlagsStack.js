import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Views
import FlagsStep1 from "./FlagsStep1";
import FlagsStep2 from "./FlagsStep2";
import FlagsStep3 from "./FlagsStep3";

const Stack = createNativeStackNavigator();

// { navigation }
export default function FlagsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "",
      }}
    >
      <Stack.Screen
        name="FlagsStep1"
        component={FlagsStep1}
        options={{ title: "Flags" }}
      />
      <Stack.Screen
        name="FlagsStep2"
        component={FlagsStep2}
        options={{ title: "Flags - 2" }}
      />
      <Stack.Screen
        name="FlagsStep3"
        component={FlagsStep3}
        options={{ title: "Flags - 3" }}
      />
    </Stack.Navigator>
  );
}
