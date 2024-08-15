import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

export default function SearchPlace() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: false,
      headerTitle: "Search",
    });
  }, []);

  return (
    <View style={{ padding: 25, paddingTop: 100, height: "100%" }}>
      <Text>SearchPlace</Text>
    </View>
  );
}
