import Login from "@/src/components/Login";
import { Colors } from "@/constants/Colors";
import { useFonts } from "expo-font";
import { StatusBar, Text, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Index() {
  useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
  });

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
        <Login />
      </View>
      <Toast />
    </>
  );
}
