import { View, Button } from "react-native";
import React from "react";

export default function FlagsStep1({navigation}) {
  const goToNextStep = () => {
    navigation.navigate('FlagsStep2', {});
  };

  return (
    <View>
      <Button
        title="Next step"
        onPress={goToNextStep}
      />
    </View>
  );
}
