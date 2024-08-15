import { View, Text, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const router = useRouter();
  const colors = Colors.light;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Select Travelers",
    });
  }, []);
  return (
    <View>
      <Text>SelectTraveler</Text>
    </View>
  );
}
