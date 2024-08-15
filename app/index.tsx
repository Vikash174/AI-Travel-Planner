import Login from "@/src/components/Login";
import { Colors } from "@/constants/Colors";
import { useFonts } from "expo-font";
import { StatusBar, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { auth } from "@/configs/FirebaseConfig";
import { Redirect, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
  });

  const user = auth.currentUser;
  const navination = useNavigation();

  useEffect(() => {
    navination.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user ? (
          <Redirect href={"/mytrip"} />
        ) : (
          <>
            <StatusBar
              barStyle="dark-content"
              backgroundColor={Colors.light.primary}
            />
            <Login />
          </>
        )}
      </View>
      <Toast />
    </>
  );
}
