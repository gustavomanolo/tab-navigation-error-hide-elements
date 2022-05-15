import { View, Text, Button } from "react-native";
import React from "react";

export default function HomeStep1({ navigation }) {
  const goToNextStep = () => {
    navigation.navigate('HomeStep2', {});
  };

  return (
    <View>
      <Text>HomeStep1</Text>

      <Button
        title="Next step"
        onPress={goToNextStep}
      />
    </View>
  );
}
