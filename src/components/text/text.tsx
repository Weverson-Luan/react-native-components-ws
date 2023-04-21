import React from "react";

import { View, Text } from "react-native";
import { TextProps } from "./interface";

export const TextCustom = ({ text, color, size, fontWeight }: TextProps) => {
  return (
    <View>
      <Text style={{ color: color, fontSize: size, fontWeight: fontWeight }}>
        {text}
      </Text>
    </View>
  );
};
