import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

export default function FlagsStep3() {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={{ height: 40 }}
        placeholder="Insert text here"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        autoFocus
      />

      <Text>FlagsStep3</Text>
    </View>
  );
}
