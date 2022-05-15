import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function FlagsStep2({ navigation }) {
  const goToNextStep = () => {
    navigation.navigate("FlagsStep3", {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Text style={styles.textStyle}>FlagsStep2</Text>
      </View>

      <View style={styles.viewBottom}>
        <Button title="Next step" onPress={goToNextStep} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  textStyle: {
    textAlign: "center",
  },
  viewTop: {
    flex: 1,
  },
  viewBottom: {
    backgroundColor: "red",
  },
});
